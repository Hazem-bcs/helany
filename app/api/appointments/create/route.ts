import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { patient_name, phone, email, date, time, reason } = body

    console.log('Received booking data:', { patient_name, phone, email, date, time, reason })

    // Validate required fields
    if (!patient_name || !phone || !email || !date || !time || !reason) {
      console.log('Missing required fields:', { patient_name, phone, email, date, time, reason })
      return NextResponse.json(
        { message: 'جميع الحقول مطلوبة' },
        { status: 400 }
      )
    }

    // Test Supabase connection first
    const { data: testData, error: testError } = await supabase
      .from('appointments')
      .select('count')
      .limit(1)

    if (testError) {
      console.error('Supabase connection error:', testError)
      return NextResponse.json(
        { message: 'خطأ في الاتصال بقاعدة البيانات: ' + testError.message },
        { status: 500 }
      )
    }

    console.log('Supabase connection successful')

    // Check if the slot is still available
    const { data: existingAppointment, error: checkError } = await supabase
      .from('appointments')
      .select('*')
      .eq('date', date)
      .eq('time', time)
      .eq('status', 'confirmed')
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing appointment:', checkError)
      return NextResponse.json(
        { message: 'خطأ في التحقق من الموعد: ' + checkError.message },
        { status: 500 }
      )
    }

    if (existingAppointment) {
      console.log('Slot already booked:', existingAppointment)
      return NextResponse.json(
        { message: 'هذا الموعد محجوز بالفعل' },
        { status: 409 }
      )
    }

    console.log('Creating new appointment...')

    // Create the appointment
    const { data, error } = await supabase
      .from('appointments')
      .insert([
        {
          patient_name,
          phone,
          email,
          date,
          time,
          reason,
          status: 'pending',
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { message: 'حدث خطأ أثناء الحجز: ' + error.message },
        { status: 500 }
      )
    }

    console.log('Appointment created successfully:', data)

    // Send confirmation email (you can implement this with nodemailer or a service like SendGrid)
    try {
      await fetch(`${request.nextUrl.origin}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'تأكيد موعدك - عيادة د. محمد حيلاني',
          type: 'confirmation',
          appointmentData: {
            patient_name,
            date,
            time,
            reason,
          },
        }),
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { message: 'تم الحجز بنجاح', appointment: data },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating appointment:', error)
    return NextResponse.json(
      { message: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}



import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { patient_name, phone, email, date, time, reason } = body

    // Validate required fields
    if (!patient_name || !phone || !email || !date || !time || !reason) {
      return NextResponse.json(
        { message: 'جميع الحقول مطلوبة' },
        { status: 400 }
      )
    }

    // Check if the slot is still available
    const { data: existingAppointment } = await supabase
      .from('appointments')
      .select('*')
      .eq('date', date)
      .eq('time', time)
      .eq('status', 'confirmed')
      .single()

    if (existingAppointment) {
      return NextResponse.json(
        { message: 'هذا الموعد محجوز بالفعل' },
        { status: 409 }
      )
    }

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
      console.error('Supabase error:', error)
      return NextResponse.json(
        { message: 'حدث خطأ أثناء الحجز' },
        { status: 500 }
      )
    }

    // Send confirmation email (you can implement this with nodemailer or a service like SendGrid)
    try {
      await fetch(`${request.nextUrl.origin}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'تأكيد موعدك - عيادة د. محمد حلاني',
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



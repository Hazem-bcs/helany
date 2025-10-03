import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json(
        { message: 'المعرف والحالة مطلوبان' },
        { status: 400 }
      )
    }

    // Update the appointment status
    const { data, error } = await supabase
      .from('appointments')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { message: 'حدث خطأ أثناء تحديث الموعد' },
        { status: 500 }
      )
    }

    // Send notification email to patient
    if (status === 'confirmed' || status === 'cancelled') {
      try {
        await fetch(`${request.nextUrl.origin}/api/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: data.email,
            subject: status === 'confirmed' 
              ? 'تأكيد موعدك - عيادة د. محمد حلاني'
              : 'إلغاء موعدك - عيادة د. محمد حلاني',
            type: status,
            appointmentData: {
              patient_name: data.patient_name,
              date: data.date,
              time: data.time,
              reason: data.reason,
            },
          }),
        })
      } catch (emailError) {
        console.error('Email error:', emailError)
      }
    }

    return NextResponse.json(
      { message: 'تم تحديث الموعد بنجاح', appointment: data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error updating appointment:', error)
    return NextResponse.json(
      { message: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}



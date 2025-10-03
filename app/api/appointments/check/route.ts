import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const date = searchParams.get('date')

    if (!date) {
      return NextResponse.json(
        { message: 'التاريخ مطلوب' },
        { status: 400 }
      )
    }

    // Get all confirmed appointments for the date
    const { data, error } = await supabase
      .from('appointments')
      .select('time')
      .eq('date', date)
      .in('status', ['pending', 'confirmed'])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { message: 'حدث خطأ أثناء جلب المواعيد' },
        { status: 500 }
      )
    }

    // Extract booked times
    const bookedTimes = data.map((appointment) => appointment.time)

    return NextResponse.json({ bookedTimes }, { status: 200 })
  } catch (error) {
    console.error('Error checking appointments:', error)
    return NextResponse.json(
      { message: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}



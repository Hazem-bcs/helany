import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Get all appointments ordered by date
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('date', { ascending: false })
      .order('time', { ascending: true })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { message: 'حدث خطأ أثناء جلب المواعيد' },
        { status: 500 }
      )
    }

    return NextResponse.json({ appointments: data }, { status: 200 })
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json(
      { message: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}



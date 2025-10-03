import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { id } = body

    if (!id) {
      return NextResponse.json(
        { message: 'معرف الموعد مطلوب' },
        { status: 400 }
      )
    }

    // Delete the appointment
    const { error } = await supabase
      .from('appointments')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Supabase delete error:', error)
      return NextResponse.json(
        { message: 'حدث خطأ أثناء حذف الموعد' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'تم حذف الموعد بنجاح' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting appointment:', error)
    return NextResponse.json(
      { message: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

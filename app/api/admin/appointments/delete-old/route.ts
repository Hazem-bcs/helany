import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { cutoffDate } = body

    if (!cutoffDate) {
      return NextResponse.json(
        { message: 'تاريخ القطع مطلوب' },
        { status: 400 }
      )
    }

    // First, get count of appointments to be deleted
    const { data: appointmentsToDelete, error: countError } = await supabase
      .from('appointments')
      .select('id')
      .lt('date', cutoffDate)

    if (countError) {
      console.error('Supabase count error:', countError)
      return NextResponse.json(
        { message: 'حدث خطأ أثناء عد المواعيد' },
        { status: 500 }
      )
    }

    const deletedCount = appointmentsToDelete?.length || 0

    // Delete old appointments
    const { error } = await supabase
      .from('appointments')
      .delete()
      .lt('date', cutoffDate)

    if (error) {
      console.error('Supabase delete error:', error)
      return NextResponse.json(
        { message: 'حدث خطأ أثناء حذف المواعيد القديمة' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'تم حذف المواعيد القديمة بنجاح',
        deletedCount 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting old appointments:', error)
    return NextResponse.json(
      { message: 'حدث خطأ في الخادم' },
      { status: 500 }
    )
  }
}

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Appointment {
  id?: string
  patient_name: string
  phone: string
  email: string
  date: string
  time: string
  reason: string
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at?: string
}

export interface AvailableSlot {
  id?: string
  date: string
  time: string
  is_available: boolean
}



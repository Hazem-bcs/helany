-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  reason TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create available_slots table
CREATE TABLE IF NOT EXISTS available_slots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  time TIME NOT NULL,
  is_available BOOLEAN DEFAULT true,
  UNIQUE(date, time)
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_available_slots_date ON available_slots(date);

-- Insert default available time slots (example)
-- Working hours: Saturday to Thursday, 9 AM to 8 PM
-- You can modify these as needed

INSERT INTO available_slots (date, time, is_available)
SELECT 
  date_series::date as date,
  (time '09:00' + (slot * INTERVAL '30 minutes'))::time as time,
  true as is_available
FROM 
  generate_series(
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '30 days',
    '1 day'::interval
  ) as date_series,
  generate_series(0, 22) as slot  -- 0 to 22 = 23 slots (9:00 AM to 8:30 PM)
WHERE 
  EXTRACT(DOW FROM date_series) NOT IN (5)  -- Exclude Friday (5 = Friday)
  AND (time '09:00' + (slot * INTERVAL '30 minutes'))::time <= time '20:00'
ON CONFLICT (date, time) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE available_slots ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (for booking)
CREATE POLICY "Allow public to insert appointments" ON appointments
  FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Allow public to view available slots" ON available_slots
  FOR SELECT TO public
  USING (true);

-- Create policies for authenticated admin users
CREATE POLICY "Allow admin to view all appointments" ON appointments
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow admin to update appointments" ON appointments
  FOR UPDATE TO authenticated
  USING (true);

CREATE POLICY "Allow admin to manage available slots" ON available_slots
  FOR ALL TO authenticated
  USING (true);



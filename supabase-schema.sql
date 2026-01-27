-- Create bookings table for Paradox House
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  reason TEXT NOT NULL,
  is_part_of_paradox TEXT NOT NULL,
  cohort TEXT NOT NULL,
  program TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for the booking form)
-- You may want to restrict this based on your needs
CREATE POLICY "Allow public inserts" ON bookings
  FOR INSERT
  WITH CHECK (true);

-- Create a policy that allows authenticated users to read
-- Adjust this based on your authentication needs
CREATE POLICY "Allow authenticated reads" ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

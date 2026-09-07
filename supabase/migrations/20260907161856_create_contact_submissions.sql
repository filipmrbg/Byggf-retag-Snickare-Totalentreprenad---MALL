/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
   - `contact_submissions`
     - `id` (uuid, primary key)
     - `name` (text, not null) - sender's name
     - `email` (text, not null) - sender's email
     - `phone` (text, not null) - sender's phone
     - `service` (text) - optional selected service type
     - `message` (text, not null) - the project description
     - `email_sent` (boolean, default false) - whether the notification email was dispatched
     - `created_at` (timestamptz) - submission timestamp

2. Security
   - Enable RLS on `contact_submissions`.
   - Allow anon + authenticated INSERT only (visitors submit; no one reads via the API).
   - SELECT restricted to service_role only (admin/edge function reads).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text,
  message text NOT NULL,
  email_sent boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_submissions" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_submissions" ON contact_submissions;
CREATE POLICY "anon_select_submissions" ON contact_submissions FOR SELECT
  TO anon, authenticated USING (false);

DROP POLICY IF EXISTS "anon_update_submissions" ON contact_submissions;
CREATE POLICY "anon_update_submissions" ON contact_submissions FOR UPDATE
  TO anon, authenticated USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "anon_delete_submissions" ON contact_submissions;
CREATE POLICY "anon_delete_submissions" ON contact_submissions FOR DELETE
  TO anon, authenticated USING (false);

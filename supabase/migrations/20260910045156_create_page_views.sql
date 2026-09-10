/*
# Create page_views table for built-in analytics

1. New Tables
  - `page_views`
    - `id` (bigint, auto-increment primary key)
    - `path` (text, the page path visited)
    - `referrer` (text, nullable, where the visitor came from)
    - `user_agent` (text, nullable)
    - `created_at` (timestamptz, when the visit happened)

2. Indexes
  - Index on `created_at` for time-range queries
  - Index on `path` for per-page aggregation

3. Security
  - RLS enabled
  - anon + authenticated can INSERT (tracking)
  - anon + authenticated can SELECT (dashboard reads)
*/

CREATE TABLE IF NOT EXISTS page_views (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  path text NOT NULL,
  referrer text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views (created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views (path);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_page_views" ON page_views;
CREATE POLICY "anon_insert_page_views" ON page_views FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_page_views" ON page_views;
CREATE POLICY "anon_select_page_views" ON page_views FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_page_views" ON page_views;
CREATE POLICY "anon_update_page_views" ON page_views FOR UPDATE
  TO anon, authenticated USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "anon_delete_page_views" ON page_views;
CREATE POLICY "anon_delete_page_views" ON page_views FOR DELETE
  TO anon, authenticated USING (false);

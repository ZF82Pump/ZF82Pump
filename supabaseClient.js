import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

export const supabase = createClient(
  "YOUR_SUPABASE_URL_HERE",
  "YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY_HERE"
);

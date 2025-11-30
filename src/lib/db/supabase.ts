import { createClient } from "@supabase/supabase-js";

// Server-side only - these env vars are NOT exposed to the client
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!;

if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error(
    "Missing Supabase environment variables. Please set SUPABASE_URL and SUPABASE_SECRET_KEY"
  );
}

// Create a server-side Supabase client with secret key
// This has elevated permissions and should NEVER be exposed to the client
export const supabase = createClient(supabaseUrl, supabaseSecretKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

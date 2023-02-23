import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabaseClient = createBrowserSupabaseClient<Database>(
  supabaseUrl,
  supabaseAnonKey
)
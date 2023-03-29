import { Database } from "@/utils/supabase"
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL as string)
const supabaseKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)

export const supabaseClient = createBrowserSupabaseClient<Database>({
  supabaseUrl,
  supabaseKey
})
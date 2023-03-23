import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env?.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
);

const sessions = {};

export async function getUserSession({ user }) {
  if (!sessions[user]) {
    const { data } = await supabase.auth.signInWithPassword({
      email: `${user}@example.com`,
      password: `${user}-password`,
    });

    sessions[user] = data.session;
  }

  return sessions[user];
}
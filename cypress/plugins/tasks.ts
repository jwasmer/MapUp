import { createClient, User } from '@supabase/supabase-js';

const sessions = {};

export async function getUserSession({
  user,
  env,
}: {
  user: User;
  env: { [key: string]: string };
}) {
  const supabase = createClient(
    env.SUPABASE_URL,
    env.SUPABASE_ANON_KEY
  );

  if (!sessions['user']) {
    const { data } = await supabase.auth.signInWithPassword({
      email: env.testUser,
      password: env.testPass,
    });

    sessions['user'] = data.session;
  }

  return sessions['user'];
}

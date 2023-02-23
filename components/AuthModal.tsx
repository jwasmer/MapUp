import { useState, useEffect } from 'react'
import { useUser, Session } from '@supabase/auth-helpers-react'
import { useSession } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { Database } from '../utils/supabase'

export default function Account({ session }: { session: Session }) {
  
  return (
    <div>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
    </div>
  )
}
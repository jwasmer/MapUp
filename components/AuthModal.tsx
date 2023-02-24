import { SupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import styles from "../styles/AuthModal.module.css"

export default function Account({ supabase }: { supabase: SupabaseClient }) {
  
  return (
    <div className={styles.modalWrapper}>
      <Auth 
        supabaseClient={supabase} 
        appearance={{ theme: ThemeSupa }} 
        theme="dark"
        providers={['google', 'github', 'linkedin']} 
      />
    </div>
  )
}
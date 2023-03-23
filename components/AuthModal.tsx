import { SupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import styles from "../styles/AuthModal.module.css"

export default function Account({ supabase }: { supabase: SupabaseClient }) {
  
  return (
    <>
      <div className={styles.modalWrapper} data-cy="auth-modal-wrapper">
        <Auth 
          supabaseClient={supabase} 
          appearance={{ theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                inputLabelText: '#333333',
                anchorTextColor: '#333333',
                anchorTextHoverColor: '#FFFFFF'
              }
            }
          } }} 
          theme="dark"
          providers={['google', 'github', 'linkedin']}
        />
      </div>
    </>
  )
}
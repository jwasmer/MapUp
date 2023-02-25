import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import AuthModal from '../components/AuthModal'
import style from "../styles/Home.module.css"
import BackdropMap from '@/components/BackdropMap'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <main className={style.main}>
      <BackdropMap />
      {!session ? (
        <AuthModal supabase={supabase}/>
      ) : (
        <Account session={session} />
      )}
    </main>
  )
}

export default Home
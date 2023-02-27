import { useState } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import AuthModal from '../components/AuthModal'
import style from "../styles/Home.module.css"
import MapUI from '@/components/MapUI'
import BackdropMap from '@/components/BackdropMap'

export default function Home () {
  const [accountToggle, setAccountToggle] = useState<boolean>(false)
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <main className={style.main}>
      <BackdropMap />
      {!session && <AuthModal supabase={supabase} />}
      {session && !accountToggle && <MapUI />}
      {session && <Account session={session} />}
    </main>
  )
}
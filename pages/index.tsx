import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from './account'
import AuthModal from '../components/AuthModal'
import style from "../styles/Home.module.css"
import MapUI from '@/components/MapUI'
import BackdropMap from '@/components/BackdropMap'

export default function Home () {
  const supabase = useSupabaseClient()
  const { isLoading, session } = useSessionContext()

  return (
    <main className={style.main}>
      <BackdropMap />
      {!session && !isLoading && 
        <AuthModal supabase={supabase} />
      }
      {session && 
        <MapUI />
      }
      {session && 
        <Account />
      }
    </main>
  )
}
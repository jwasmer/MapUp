import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from './account'
import AuthModal from '../components/AuthModal'
import style from "../styles/Home.module.css"
import MapUI from '@/components/MapUI'
import BackdropMap from '@/components/BackdropMap'
import { Database } from '@/utils/supabase'

export default function Home () {
  const supabase = useSupabaseClient<Database>()
  const { isLoading, session } = useSessionContext()

  console.log(session)

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
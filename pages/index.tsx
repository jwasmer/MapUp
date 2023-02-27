import { useEffect } from 'react'
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import AuthModal from '../components/AuthModal'
import style from "../styles/Home.module.css"
import MapUI from '@/components/MapUI'
import BackdropMap from '@/components/BackdropMap'
import Dropdown from '@/components/Dropdown'
import SettingsIcon from '@/components/icons/SettingsIcon'
import Searchbar from '@/components/Searchbar'
import ExpandDownIcon from '@/components/icons/ExpandDownIcon'

export default function Home () {
  const supabase = useSupabaseClient()
  const { isLoading, session } = useSessionContext()
  
  useEffect(() => {
    console.log(session)
  }, [session])

  return (
    <main className={style.main}>
      <BackdropMap />
      {!session && !isLoading && 
        <AuthModal supabase={supabase} />
      }
      {session && 
        <MapUI>
          <Searchbar />
          <Dropdown 
            closedIcon={<SettingsIcon color={"#FFFFFF"} />}
            openIcon={<ExpandDownIcon color={"#FFFFFF"} />}
          />
        </MapUI>
      }
      {session && 
        <Account session={session} />
      }
    </main>
  )
}
import '@/styles/globals.css'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { AppProps } from 'next/app'
import { mapState, MapStateContext } from "../helpers/mapStateContext"
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {

  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <MapStateContext.Provider value={mapState}>
        <Component {...pageProps} />
      </MapStateContext.Provider>
    </SessionContextProvider>
  )
}
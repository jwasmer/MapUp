import '@/styles/globals.css'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { AppProps } from 'next/app'
import { mapState, MapStateContext } from "../helpers/mapStateContext"
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabaseClient } from '@/supabase/supabaseClient'

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
      <MapStateContext.Provider value={mapState}>
        <Component {...pageProps} />
      </MapStateContext.Provider>
    </SessionContextProvider>
  )
}
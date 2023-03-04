import '@/styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { AppProps } from 'next/app'
import { mapState, MapStateContext } from "../helpers/mapStateContext"
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {

  const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL as string)
  const supabaseKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)

  const supabaseClient = createBrowserSupabaseClient({
    supabaseUrl,
    supabaseKey
  })

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
      <MapStateContext.Provider value={mapState}>
        <Component {...pageProps} />
      </MapStateContext.Provider>
    </SessionContextProvider>
  )
}
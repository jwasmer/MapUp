import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient, useSessionContext, Session } from '@supabase/auth-helpers-react'
import { Database } from '../../utils/supabase'
import styles from "../../styles/Account.module.css"
type Users = Database['users']

export default function Account() {
  const supabase = useSupabaseClient<Database>()
  const { session } = useSessionContext()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState<Users['email']>(undefined)
  const [first_name, setFirstName] = useState<Users['first_name']>(null)
  const [last_name, setLastName] = useState<Users['last_name']>(null)
  const [street_address, setStreetAddress] = useState<Users['street_address']>(null)
  const [city, setCity] = useState<Users['city']>(null)
  const [home_state, setHomeState] = useState<Users['home_state']>(null)
  const [zipcode, setZipcode] = useState<Users['zipcode']>(null)

  useEffect(() => {
    if (session) getUser()
  }, [session])

  async function getUser() {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      let { data, error, status } = await supabase
        .from('users')
        .select('email, first_name, last_name, street_address, city, home_state, zipcode')
        .eq('user_id', user.id)
        .maybeSingle()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setEmail(session!.user.email)
        setFirstName(data.first_name)
        setLastName(data.last_name)
        setStreetAddress(data.street_address)
        setCity(data.city)
        setHomeState(data.home_state)
        setZipcode(data.zipcode)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log("First error:", error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    email,
    first_name,
    last_name,
    street_address,
    city,
    home_state,
    zipcode,
  }: {
    email: Users['email']
    first_name: Users['first_name']
    last_name: Users['last_name']
    street_address: Users['street_address']
    city: Users['city']
    home_state: Users['home_state']
    zipcode: Users['zipcode']
  }) {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      const updates = {
        id: user.id,
        email,
        first_name,
        last_name,
        street_address,
        city,
        home_state,
        zipcode,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('users').upsert(updates)
      if (error) throw error
      alert('User profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {session && <div className={styles.frame}>
        <div>
          <label htmlFor="email">Email</label>
          {session && <input id="email" type="text" value={session.user.email} disabled />}
        </div>
        <div>
          <input
            id="first-name"
            type="text"
            placeholder="First name"
            value={first_name || ''}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <input
            id="last-name"
            type="text"
            placeholder="Last name"
            value={last_name || ''}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            id="street-address"
            type="text"
            placeholder="Address"
            value={street_address || ''}
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </div>
        <div>
          <input
            id="city"
            type="text"
            placeholder="City"
            value={city || ''}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <input
            id="state"
            type="text"
            placeholder="State"
            value={home_state || ''}
            onChange={(e) => setHomeState(e.target.value)}
          />
        </div>
        <div>
          <input
            id="zipcode"
            type="text"
            placeholder="Zipcode"
            value={zipcode || ''}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>

        <div>
          <button
            onClick={() => updateProfile({
              email,
              first_name,
              last_name,
              street_address,
              city,
              home_state,
              zipcode,
            })}
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Update'}
          </button>
        </div>

        <div>
          <button onClick={() => supabase.auth.signOut()}>
            Sign Out
          </button>
        </div>
      </div>}
    </>
  )
}
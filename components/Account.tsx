import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient, Session } from '@supabase/auth-helpers-react'
import { Database } from '../utils/supabase'
type Profiles = Database['profiles']

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState<Profiles['email']>(null)
  const [first_name, setFirstName] = useState<Profiles['first_name']>(null)
  const [last_name, setLastName] = useState<Profiles['last_name']>(null)
  const [street_address, setStreetAddress] = useState<Profiles['street_address']>(null)
  const [city, setCity] = useState<Profiles['city']>(null)
  const [home_state, setHomeState] = useState<Profiles['home_state']>(null)
  const [zipcode, setZipcode] = useState<Profiles['zipcode']>(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`email, first_name, last_name, street_address, city, home_state, zipcode`)
        .eq('id', user.id)
        .maybeSingle()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setEmail(session.user.email)
        setFirstName(data.first_name)
        setLastName(data.last_name)
        setStreetAddress(data.street_address)
        setCity(data.city)
        setHomeState(data.home_state)
        setZipcode(data.zipcode)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
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
    email: Profiles['email']
    first_name: Profiles['first_name']
    last_name: Profiles['last_name']
    street_address: Profiles['street_address']
    city: Profiles['city']
    home_state: Profiles['home_state']
    zipcode: Profiles['zipcode']
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

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
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
          className="button primary block"
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
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
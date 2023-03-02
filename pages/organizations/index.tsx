import { useState } from "react"
import CreateOrganization from "../../components/CreateOrganization"

export default function Organizations() {
  const [search, setSearch] = useState('')

  return (
    <div className="">      
      <h2>
        Your Organizations
      </h2>
      <h4>Turing</h4>
      <h4>Norwich University</h4>
      <h4>Board Game Enthusiasts of Vermont</h4>
      <label htmlFor="search-orgs">Search Organizations</label>
      <input id="search-orgs" type="text" value={search} placeholder="Search for organizations..." onChange={(event) => setSearch(event.target.value)} />
      <CreateOrganization />
    </div>
  )
}
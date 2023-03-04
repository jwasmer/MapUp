import { useState } from "react"
import DisplayUserOrgs from "@/components/DisplayUserOrganizations"
import CreateOrganization from "@/components/CreateOrganization"

export default function Organizations() {
  const [search, setSearch] = useState<string>('')

  return (
    <>
      <div className="">      
        <h2>
          Your Organizations
        </h2>
        <DisplayUserOrgs />
        <form>
          <label htmlFor="search-orgs">Search Organizations</label>
          <input id="search-orgs" type="text" value={search} placeholder="Search for organizations..." onChange={(event) => setSearch(event.target.value)} />
        </form>
        <CreateOrganization />
      </div>
    </>
  )
}
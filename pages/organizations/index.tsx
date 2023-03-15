import { useState } from "react"
import DisplayUserOrgs from "@/components/DisplayUserOrganizations"
import CreateOrganization from "@/components/CreateOrganization"
import SearchOrgs from "@/components/SearchOrgs"

export default function Organizations() {
  const [search, setSearch] = useState<string>('')

  return (
    <>
      <div className="">
        <CreateOrganization />
        <h2>
          Your Organizations
        </h2>
        <DisplayUserOrgs />
        <SearchOrgs />
      </div>
    </>
  )
}
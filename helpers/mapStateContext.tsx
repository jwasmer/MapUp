import { createContext } from "react"

export const mapState = {
  profile: "car",
  time: "60",
}

export const MapStateContext = createContext(mapState)
import { PropsWithChildren } from "react"

export interface MapContext {
  profile: string
  time: string
}

export interface ColorProps {
  color: string
}

export interface DropdownProps {
  icon?: React.ReactNode
  children?: PropsWithChildren<React.ReactNode>
}

export interface MapUIProps {
  dropdown: React.ReactElement<DropdownProps>
}
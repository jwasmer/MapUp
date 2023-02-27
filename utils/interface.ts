import { PropsWithChildren } from "react"

export interface MapContext {
  profile: string
  time: string
}

export interface ColorProps {
  color: string
}

export interface DropdownProps {
  closedIcon: React.ReactNode
  openIcon: React.ReactNode
  children?: PropsWithChildren<React.ReactNode>
}

export interface MapUIProps {
  children: PropsWithChildren<React.ReactNode>
}
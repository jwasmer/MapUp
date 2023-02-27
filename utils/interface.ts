import { PropsWithChildren } from "react"

export interface MapContext {
  profile: string
  time: string
}

export interface ColorProps {
  color: string
}

export interface MapUIProps {
  children: PropsWithChildren<React.ReactNode>
}

export type DropdownProps = PropsWithChildren<{
  closedIcon: React.ReactNode
  openIcon: React.ReactNode
}>
import { PropsWithChildren } from "react"

export interface MapContext {
  profile: string
  time: string
}

export interface ColorProps {
  color: string
}

export interface MenuItemProps {
  icon: React.ReactNode
}

export type DropdownProps = PropsWithChildren<{
  icon: React.ReactNode
}>
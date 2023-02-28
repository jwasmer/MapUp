import { PropsWithChildren } from "react"

export interface MapContext {
  profile: string
  time: string
}

export interface ColorProps {
  color?: string
}

export type MenuItemProps = PropsWithChildren <{
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}>

export type DropdownProps = PropsWithChildren<{
  icon: React.ReactNode
}>
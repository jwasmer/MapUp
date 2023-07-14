import { PropsWithChildren } from "react"
import { Session } from "@supabase/supabase-js"

export interface ToggleButtonProps {
  iconTrue: React.ReactNode
  iconFalse: React.ReactNode
  colorTrue?: string
  colorFalse?: string
}

export interface IconProps {
  color?: string
  name: string
}

export interface MapContext {
  profile: string
  time: string
}

export interface ProcessEnv {
  NEXT_PUBLIC_SUPABASE_URL: string
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string
}

export interface OrgCard {
  orgData: OrgData
}

export interface OrgData {
  organization_id: string;
  organizations: {
    organization_name: string;
  };
  profile_organization_role: string;
}

export interface SearchResult {
  organization_id: string | null
  organization_name: string
}

export interface SearchbarProps {
  runSearch: Function
}

export interface TestSessions {
  user?: Session
}

export type ActiveMenu = 'Map' | 'Events' | 'Organizations' | 'Account' | null

export type MapButtonProps = PropsWithChildren<{
  icon: React.ReactNode
}>

export type MenuItemProps = PropsWithChildren <{
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  link?: string
}>

export type NavBarProps = PropsWithChildren <{
  detailsFrameToggle: boolean
  setDetailsFrameToggle: Function
}>

export type NavButtonProps = PropsWithChildren <{
  setActiveMenu: Function
  activeMenu: string | null
  menuItemName: string
  iconName: string
  setDetailsFrameToggle: Function
}>
import { PropsWithChildren } from "react"
import { Session } from "@supabase/supabase-js"

export interface IconProps {
  color?: string
  name: "arrow_drop_down" | "settings" | "navigate_next" | "add" | "delete" | "account_circle" | "manage_accounts" | "logout"
}

export type MapButtonProps = PropsWithChildren<{
  icon: React.ReactNode
}>

export interface MapContext {
  profile: string
  time: string
}

export interface ProcessEnv {
  NEXT_PUBLIC_SUPABASE_URL: string
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string
}

export type MenuItemProps = PropsWithChildren <{
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  link?: string
}>

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
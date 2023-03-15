import { PostgrestError, PostgrestSingleResponse } from "@supabase/supabase-js"
import { PropsWithChildren } from "react"

export interface IconProps {
  color?: string
  name: "arrow_drop_down" | "settings" | "navigate_next" | "add" | "delete"
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
  user_organization_role: string;
}

export interface SearchResult {
  organization_id: string | null
  organization_name: string
}

export interface SearchbarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  runSearch: Function
}
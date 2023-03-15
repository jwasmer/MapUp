export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      join_users_organizations: {
        Row: {
          created_at: string | null
          organization_id: string | null
          user_id: string | null
          user_organization_id: string
          user_organization_role: string | null
        }
        Insert: {
          created_at?: string | null
          organization_id?: string | null
          user_id?: string | null
          user_organization_id: string
          user_organization_role?: string | null
        }
        Update: {
          created_at?: string | null
          organization_id?: string | null
          user_id?: string | null
          user_organization_id?: string
          user_organization_role?: string | null
        }
      }
      organizations: {
        Row: {
          created_at: string | null
          organization_id: string
          organization_name: string
        }
        Insert: {
          created_at?: string | null
          organization_id: string
          organization_name: string
        }
        Update: {
          created_at?: string | null
          organization_id?: string
          organization_name?: string
        }
      }
      users: {
        Row: {
          city: string | null
          email: string | null
          first_name: string | null
          home_state: string | null
          last_name: string | null
          street_address: string | null
          updated_at: string | null
          user_id: string
          zipcode: string | null
        }
        Insert: {
          city?: string | null
          email?: string | null
          first_name?: string | null
          home_state?: string | null
          last_name?: string | null
          street_address?: string | null
          updated_at?: string | null
          user_id: string
          zipcode?: string | null
        }
        Update: {
          city?: string | null
          email?: string | null
          first_name?: string | null
          home_state?: string | null
          last_name?: string | null
          street_address?: string | null
          updated_at?: string | null
          user_id?: string
          zipcode?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_organization: {
        Args: {
          org_id: string
          auth_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}


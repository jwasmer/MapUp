import { defineConfig } from "cypress";
import { createClient } from "@supabase/supabase-js";
import { TestSessions } from "@/utils/interface"
import dotenv from "dotenv"

dotenv.config({ path: ".env.local" });
dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on("task", {
        async getUserSession() {

          const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL as string)
          const supabaseKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)

          const supabase = createClient(
            supabaseUrl,
            supabaseKey
          )
          
          const sessions: TestSessions = {};

          if (!sessions['user']) {
            const { data } = await supabase.auth.signInWithPassword({
              email: process.env.NEXT_PUBLIC_TEST_USER_1_EMAIL as string,
              password: process.env.NEXT_PUBLIC_TEST_USER_1_PASS as string
            });

            sessions['user'] = data.session!
          }

          console.log(sessions)
          return sessions['user'];  
        },
      })
    },
  },
});
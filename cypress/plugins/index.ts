import { User } from '@supabase/supabase-js';
import { getUserSession } from './tasks';

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  on('task', {
    getUserSession: (user: User) =>
      getUserSession({ user, env: config.env }),
  });
};

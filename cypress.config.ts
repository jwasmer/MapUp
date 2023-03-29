import { defineConfig } from "cypress";
import tasks from '@/cypress/plugins';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      tasks(on, config);
    },
  },
});
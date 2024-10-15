import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  base: '/film',
  vite: {
    define: {
      'import.meta.env.CONSUMER_KEY': JSON.stringify(process.env.CONSUMER_KEY),
      'import.meta.env.CONSUMER_SECRET': JSON.stringify(process.env.CONSUMER_SECRET),
      'import.meta.env.OAUTH_TOKEN': JSON.stringify(process.env.OAUTH_TOKEN),
      'import.meta.env.OAUTH_TOKEN_SECRET': JSON.stringify(process.env.OAUTH_TOKEN_SECRET),
      'import.meta.env.PHOTOSET_ID': JSON.stringify(process.env.PHOTOSET_ID),
      'import.meta.env.USER_ID': JSON.stringify(process.env.USER_ID),
    },
  },
});

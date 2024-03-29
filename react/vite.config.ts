// this is required if we want to put the vitest configuration in the vite.config.ts
/// <reference types="vitest"/> 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  test: {
    // ...
    globals: true,
    
  },
  
})

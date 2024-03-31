import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import resolve from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),resolve({
    // Specify that Axios should be treated as an external dependency
    preferBuiltins: true,
    modulesOnly: true
  }) ],
  external: ['axios']
})



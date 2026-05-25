import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Fixed package name hook

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Keeps your application on port 3000
  }
});
import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173
  }
};
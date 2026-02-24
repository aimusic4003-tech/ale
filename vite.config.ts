<<<<<<< HEAD
import { defineConfig } from 'vite';
=======
     import { defineConfig } from 'vite';
>>>>>>> 453c94ea2f6ab5df176410789710f7fd00e15392
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> 453c94ea2f6ab5df176410789710f7fd00e15392

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), 
    
    chunkSplitPlugin({
      strategy: 'unbundle',
      customSplitting: {
        // All files in `src/container` will be merged together in `container` chunk
        'container': [/src\/container/]
      }
    })
  ],
});

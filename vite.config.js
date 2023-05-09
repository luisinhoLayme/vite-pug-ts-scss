// vite.config.(js|ts)
import { resolve } from "path"

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer' // Optimizar images, sharp, svgo
import { ViteMinifyPlugin } from 'vite-plugin-minify' // Minificar html produccion

import { defineConfig } from "vite"
import vitePugPlugin from "vite-plugin-pug-transformer"

// const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default defineConfig({
  resolve: {
    alias: {
      '@image': resolve(__dirname, './src/assets/images')
    }
  },
  plugins: [
    vitePugPlugin({pugLocals: locals}),
    ViteMinifyPlugin({}),
    ViteImageOptimizer({})
  ],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, "index.html"),
  //       nested: resolve(__dirname, "nested/index.html"),
  //     },
  //   },
  // },
})

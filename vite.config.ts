import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import svgLoader from "vite-svg-loader";
// import Unocss from 'unocss/vite'
// import {
//   presetAttributify,
//   presetIcons,
//   presetUno,
//   transformerDirectives,
//   transformerVariantGroup,
// } from 'unocss'

const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${pathSrc}/`,
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    svgLoader({
      defaultImport: "component", // or 'raw'
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
      dts: "src/components.d.ts",
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    // Unocss({
    //   presets: [
    //     presetUno(),
    //     presetAttributify(),
    //     presetIcons({
    //       scale: 1.2,
    //       warn: true,
    //     }),
    //   ],
    //   transformers: [
    //     transformerDirectives(),
    //     transformerVariantGroup(),
    //   ]
    // }),
  ],
});

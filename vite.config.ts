import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from "unplugin-auto-import/vite"
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve:{
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname,'src'),
            },
        ],
    },
    plugins: [
      vue(),
      Components({
        resolvers: [NaiveUiResolver()]
      }),
      AutoImport({
        imports: ["vue","vue-router"],
        dts: "src/auto-import.d.ts"
      }),
    ]
})

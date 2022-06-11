/*
 * @Author: maggot-code
 * @Date: 2022-03-27 15:32:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-12 00:52:18
 * @Description: file content
 */
import type { BuildOptions } from 'vite';

export function viteBuild(env: ImportMetaEnv): BuildOptions {
    return {
    target: "modules",
minify: "terser",
sourcemap: "hidden",
chunkSizeWarningLimit: 500,
assetsInlineLimit: 4096,
        polyfillModulePreload: true,
        cssCodeSplit: true,
        ssrManifest: false,
        emptyOutDir: true,
        manifest: false,
        write: true,
        outDir: env.VITE_OUT_DIR,
        assetsDir: env.VITE_ASSETS_DIR,
        terserOptions: {
            compress: {
                keep_infinity: true,
                drop_debugger: env.VITE_DROP_DEBUGGER,
                drop_console: env.VITE_DROP_CONSOLE
            }
        },
        rollupOptions: {
            output: {
                chunkFileNames: `${env.VITE_ASSETS_DIR}/js/[name]-[hash].js`,
                entryFileNames: `${env.VITE_ASSETS_DIR}/js/[name]-[hash].js`,
                assetFileNames: `${env.VITE_ASSETS_DIR}/[name]-[hash].[ext]`
            }
        }
    }
}
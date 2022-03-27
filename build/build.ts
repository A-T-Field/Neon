/*
 * @Author: maggot-code
 * @Date: 2022-03-27 15:32:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-27 15:34:03
 * @Description: file content
 */
import type { BuildOptions } from 'vite';

export function viteBuild(): BuildOptions {
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
    }
}
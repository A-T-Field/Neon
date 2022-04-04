/*
 * @Author: maggot-code
 * @Date: 2022-03-27 00:38:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-04 21:57:17
 * @Description: file content
 */
/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '*.json' {
    const value: any;
    export default value;
}

declare module 'layouts-generated' {
    import type { RouteRecordRaw } from 'vue-router'
    export function setupLayouts(routes: RouteRecordRaw[]): RouteRecordRaw[]
}

declare module 'virtual:generated-layouts' {
    import type { RouteRecordRaw } from 'vue-router'
    export function setupLayouts(routes: RouteRecordRaw[]): RouteRecordRaw[]
}

declare module 'pages-generated' {
    import type { RouteRecordRaw } from 'vue-router'
    const routes: RouteRecordRaw[]
    export default routes
}

declare module 'virtual:generated-pages' {
    import type { RouteRecordRaw } from 'vue-router'
    const routes: RouteRecordRaw[]
    export default routes
}

interface ImportMetaEnv extends Record<string, any> {
    // public
    // VITE_ENV_PREFIX: string;
    VITE_APP_TITLE: string;
    VITE_PUBLIC_DIR: string;
    VITE_CACHE_DIR: string;
    VITE_OUT_DIR: string;
    VITE_ASSETS_DIR: string;
    // private
    VITE_BASE_URI: string;
    VITE_DROP_DEBUGGER: boolean;
    VITE_DROP_CONSOLE: boolean;
    VITE_LOG_LEVEL: "info" | "warn" | "error";
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
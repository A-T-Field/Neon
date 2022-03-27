/*
 * @Author: maggot-code
 * @Date: 2022-03-27 00:38:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-27 13:36:22
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

interface ImportMetaEnv extends Record<string, any> {
    VITE_APP_TITLE: string;
    VITE_DROP_DEBUGGER: boolean;
    VITE_DROP_CONSOLE: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
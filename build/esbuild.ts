/*
 * @Author: maggot-code
 * @Date: 2022-03-27 15:34:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 14:08:29
 * @Description: file content
 */
import type { ESBuildOptions } from 'vite';

export function viteESBuild(env: ImportMetaEnv): ESBuildOptions {
    const usePure: Array<string> = [];

    env.VITE_DROP_CONSOLE && usePure.push("console.log");

    env.VITE_DROP_DEBUGGER && usePure.push("debugger");

    return {
        pure: usePure,
        jsxInject: `import {h} from 'vue';`,
        jsxFactory: "h",
        jsxFragment: "Fragment"
    }
}
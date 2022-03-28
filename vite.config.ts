/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 14:06:28
 * @Description: file content
 */
import type { UserConfigExport, UserConfig } from 'vite';

import { defineConfig } from 'vite';
import { viteRoot } from './build/root';
import { viteEnv } from './build/env';
import { viteDefine } from './build/define';
import { viteResolve } from './build/resolve';
import { viteCss } from './build/css';
import { viteServer } from './build/server';
import { vitePlugins } from './build/plugins';
import { viteBuild } from './build/build';
import { viteESBuild } from './build/esbuild';

const setupConfig: UserConfigExport = ({ command, mode }): UserConfig => {
    const root = viteRoot();
    const env = viteEnv(mode);

    return {
        mode,
        root,
        envDir: root,
        clearScreen: false,
        base: env.VITE_BASE_URI,
        publicDir: env.VITE_PUBLIC_DIR,
        cacheDir: env.VITE_CACHE_DIR,
        logLevel: env.VITE_LOG_LEVEL,
        define: viteDefine(),
        resolve: viteResolve(),
        css: viteCss(),
        server: viteServer(),
        plugins: vitePlugins(command),
        build: viteBuild(env),
        esbuild: viteESBuild(env),
        json: {
            namedExports: true,
            stringify: false,
        },
        optimizeDeps: {
            include: []
        }
    }
}

export default defineConfig(setupConfig);
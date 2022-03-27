/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-27 15:35:26
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
    const define = viteDefine();
    const resolve = viteResolve();
    const css = viteCss();
    const server = viteServer();
    const plugins = vitePlugins(command);
    const build = viteBuild();
    const esbuild = viteESBuild();

    return {}
}

export default defineConfig(setupConfig);
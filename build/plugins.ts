/*
 * @Author: maggot-code
 * @Date: 2022-03-27 15:28:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-27 15:30:15
 * @Description: file content
 */
import type { PluginOption } from 'vite';

import { isBuild } from './utils';

export type PluginsType = (PluginOption | PluginOption[])[];

export function vitePlugins(command: ViteCommand): PluginsType {
    if (isBuild(command)) {

    }

    return [];
}
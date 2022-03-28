/*
 * @Author: maggot-code
 * @Date: 2022-03-27 15:28:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 14:26:42
 * @Description: file content
 */
import type { PluginOption } from 'vite';

import { setupVuePlugins } from './plugins/vue';
import { setupComponentPlugins } from './plugins/components';
import { setupCompressionPlugins } from './plugins/compression';
import { setupVisualizerPlugins } from './plugins/visualizer';

import { isBuild } from './utils';

export type PluginsType = (PluginOption | PluginOption[])[];

export function vitePlugins(command: ViteCommand): PluginsType {
    const plugins: PluginsType = [
        ...setupVuePlugins(),
        ...setupComponentPlugins()
    ];

    if (isBuild(command)) {
        plugins.push(
            ...setupCompressionPlugins(),
            ...setupVisualizerPlugins()
        );
    }

    return plugins;
}
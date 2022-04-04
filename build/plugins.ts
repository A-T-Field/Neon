/*
 * @Author: maggot-code
 * @Date: 2022-03-27 15:28:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-03 21:59:38
 * @Description: file content
 */
import type { PluginOption } from 'vite';

import { setupVuePlugins } from './plugins/vue';
import { setupComponentPlugins } from './plugins/components';
import { setupImportPlugins } from './plugins/import';
import { setupCompressionPlugins } from './plugins/compression';
import { setupVisualizerPlugins } from './plugins/visualizer';

import { isBuild } from './utils';

export type PluginsType = (PluginOption | PluginOption[])[];

export function vitePlugins(command: ViteCommand): PluginsType {
    const plugins: PluginsType = [
        ...setupVuePlugins(),
        ...setupComponentPlugins(),
        ...setupImportPlugins()
    ];

    if (isBuild(command)) {
        plugins.push(
            ...setupCompressionPlugins(),
            ...setupVisualizerPlugins()
        );
    }

    return plugins;
}
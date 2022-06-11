/*
 * @Author: maggot-code
 * @Date: 2022-03-27 15:28:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-11 21:51:32
 * @Description: file content
 */
import type { PluginOption } from 'vite';

import { setupVuePlugins } from './plugins/vue';
import { setupComponentPlugins } from './plugins/components';
import { setupImportPlugins } from './plugins/import';
import { setupCompressionPlugins } from './plugins/compression';
import { setupVisualizerPlugins } from './plugins/visualizer';
// import { setupPages } from './plugins/pages';
// import { setupVueLayouts } from './plugins/layouts';

import { isBuild } from './utils';

export type PluginsType = (PluginOption | PluginOption[])[];

export function vitePlugins(command: ViteCommand): PluginsType {
    const plugins: PluginsType = [
        // ...setupPages(),
        // ...setupVueLayouts(),
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
/*
 * @Author: maggot-code
 * @Date: 2022-03-28 14:11:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 14:24:08
 * @Description: file content
 */
import { PluginsType } from '../plugins';

import visualizer from 'rollup-plugin-visualizer';

export function setupVisualizerPlugins(): PluginsType {
    return [
        visualizer({
            filename: './node_modules/.cache/visualizer/stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true,
        }),
    ];
}

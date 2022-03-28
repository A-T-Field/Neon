/*
 * @Author: maggot-code
 * @Date: 2022-03-28 14:10:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 14:22:45
 * @Description: file content
 */
import { PluginsType } from '../plugins';

import viteComperssion from 'vite-plugin-compression';

export function setupCompressionPlugins(): PluginsType {
    return [
        viteComperssion({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: "gzip",
            ext: ".gz",
            deleteOriginFile: false
        })
    ];
}
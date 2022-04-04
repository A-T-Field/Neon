/*
 * @Author: maggot-code
 * @Date: 2022-04-04 21:04:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-05 02:46:15
 * @Description: file content
 */
import { PluginsType } from '../plugins';

import pluginVueLayouts from 'vite-plugin-vue-layouts';

export function setupVueLayouts(): PluginsType {
    return [
        pluginVueLayouts({
            layoutsDirs: "src/layouts",
            extensions: ["vue", "tsx"]
        })
    ]
}
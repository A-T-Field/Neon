/*
 * @Author: maggot-code
 * @Date: 2022-04-04 21:04:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-05 03:34:24
 * @Description: file content
 */
import { PluginsType } from '../plugins';

import pluginVueLayouts from 'vite-plugin-vue-layouts';

export function setupVueLayouts(): PluginsType {
    return [
        pluginVueLayouts({
            layoutsDirs: "src/layouts",
            defaultLayout: "common",
            extensions: ["vue", "tsx"]
        })
    ]
}
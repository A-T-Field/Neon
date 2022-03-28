/*
 * @Author: maggot-code
 * @Date: 2022-03-28 14:11:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 15:59:31
 * @Description: file content
 */
import { PluginsType } from '../plugins';

import viteComponents from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export function setupComponentPlugins(): PluginsType {
    return [
        viteComponents({
            resolvers: [
                NaiveUiResolver()
            ],
            dirs: [
                "src/shared/components",
                "src/pages/**/components"
            ],
            extensions: ["vue", "tsx"],
            dts: true,
            deep: true,
        })
    ];
}
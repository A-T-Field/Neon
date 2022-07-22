/*
 * @Author: maggot-code
 * @Date: 2022-03-28 14:11:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-22 11:09:41
 * @Description: file content
 */
import { PluginsType } from '../plugins';

import viteComponents from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export function setupComponentPlugins(): PluginsType {
    return [
        viteComponents({
            resolvers: [AntDesignVueResolver()],
            dirs: ['src/components', 'src/layout', 'src/pages'],
            extensions: ['vue', 'tsx'],
            dts: true,
            deep: true,
        }),
    ];
}

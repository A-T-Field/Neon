/*
 * @Author: maggot-code
 * @Date: 2022-03-28 14:10:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 14:18:50
 * @Description: file content
 */
import { PluginsType } from '../plugins';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export function setupVuePlugins(): PluginsType {
    return [
        vue(),
        vueJsx()
    ];
}
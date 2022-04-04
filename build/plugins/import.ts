/*
 * @Author: maggot-code
 * @Date: 2022-04-03 21:52:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-03 22:03:45
 * @Description: file content
 */
import { PluginsType } from '../plugins';
import autopImport from 'unplugin-auto-import/vite';

export function setupImportPlugins(): PluginsType {
    return [
        autopImport({
            imports: [
                'vue',
                'vue-router',
                'pinia',
            ],
            dts: true
        })
    ]
}
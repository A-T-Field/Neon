/*
 * @Author: maggot-code
 * @Date: 2022-04-04 21:04:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-05 03:03:57
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

import { PluginsType } from '../plugins';
import pluginPages from 'vite-plugin-pages';

function extendRoute(router: RouteRecordRaw, parent: RouteRecordRaw) {
    return router;
}

export function setupPages(): PluginsType {
    return [
        pluginPages({
            importMode: "async",
            routeBlockLang: "json",
            dirs: [
                { dir: "src/pages", baseRoute: "" }
            ],
            extensions: ["vue", "tsx"],
            exclude: [],
            extendRoute
        })
    ]
}
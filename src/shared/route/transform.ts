/*
 * @Author: maggot-code
 * @Date: 2022-03-31 10:08:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 16:13:59
 * @Description: file content
 */
import type {
    RouteMeta,
    RouteRecordRaw,
    AppRouteRecordRaw,
} from 'vue-router';

import { selectPage } from '@/pages';
import { map } from '@/shared/utils/loop';
import { assign } from '@/shared/utils/common';
import { flowRight } from '@/shared/utils/lodash';
import { isArray } from '@/shared/utils/checkers';

type RouteMetaGiveup = Omit<RouteMeta, "parentName" | "fullPath">;
type RouteRecord = (route: RouteRecordRaw) => RouteRecordRaw;
const setupRouteName: RouteRecord = (route) => {
    const { name, path } = route;

    return assign(route, {
        name: name ?? path
    });
};
const setupRouteMeta: RouteRecord = (route) => {
    const { meta, name } = route;
    const metaRaw = assign<RouteMetaGiveup, RouteMetaGiveup>(meta ?? {}, {
        componentName: meta?.componentName ?? "Unknow",
        icon: meta?.icon ?? "",
        title: meta?.title ?? name,
        label: meta?.label ?? name,
        tag: meta?.tag ?? "default",
        sort: meta?.sort ?? 0,
        frameSrc: meta?.frameSrc ?? "",
        isDisabled: meta?.isDisabled ?? false,
        isHidden: meta?.isHidden ?? false,
        isSort: meta?.isSort ?? false,
        isFrameSrc: meta?.isFrameSrc ?? false,
        isAsync: meta?.isAsync ?? true,
        isKeepAlive: meta?.isKeepAlive ?? false,
        isMenu: meta?.isMenu ?? false,
        isCrumbs: meta?.isCrumbs ?? false
    });

    return assign(route, {
        meta: metaRaw
    });
};
const setupRecord = flowRight([
    setupRouteName,
    setupRouteMeta
]);

type RouteParent = (route: RouteRecordRaw, parent?: RouteRecordRaw) => RouteRecordRaw;
const setupFullPath: RouteParent = (route, parent) => {
    if (!parent) {
        route.meta!.fullPath = route.path;

        return route;
    }

    const { path } = parent;
    const fullPath = path + route.path;

    route.meta!.fullPath = fullPath;
    route.path = fullPath;

    return route;
};
const setupParentName: RouteParent = (route, parent) => {
    if (!parent) return route;

    const { name } = parent;

    route.meta!.parentName = name as string;

    return route;
};
const setupComponent: RouteParent = (route) => {
    const { meta } = route;

    route.component = selectPage(meta!.componentName);

    return route;
}
const setupParent = flowRight([
    setupFullPath,
    setupParentName,
    setupComponent
]);

type HandlerTransform = (parent: RouteRecordRaw) => (route: RouteRecordRaw) => RouteRecordRaw;
const handlerTransform: HandlerTransform = (parent) => (route) => {
    const record = setupRecord(route);
    if (record.children && record.children.length > 0) {
        record.children = routeTransform(record.children, record);
    }

    return setupParent(record, parent);
}

export function routeTransform(schema: RouteRecordRaw, parent?: RouteRecordRaw): AppRouteRecordRaw;
export function routeTransform(schema: AppRouteRecordRaw, parent?: RouteRecordRaw): AppRouteRecordRaw;
export function routeTransform(schema: any, parent?: any) {
    const unifiedSchema: AppRouteRecordRaw = isArray(schema) ? schema : [schema];
    return map(unifiedSchema, handlerTransform(parent));
}
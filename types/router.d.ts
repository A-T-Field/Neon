/*
 * @Author: maggot-code
 * @Date: 2022-03-28 16:51:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-31 14:00:18
 * @Description: file content
 */
import "vue-router";

declare module "vue-router" {
    interface RouteMeta {
        // 组件名称
        componentName: string;
        // 父节点
        parentName: string;
        // 完整路由地址
        fullPath: string;
        // 图标
        icon: string;
        // 标题
        title: string;
        // 标签
        label: string;
        // 标记
        tag: string;
        // 排序权重
        sort: number;
        // 外部链接地址
        frameSrc: string;
        // 是否禁用
        isDisabled: boolean;
        // 是否隐藏
        isHidden: boolean;
        // 是否排序
        isSort: boolean;
        // 是否外链
        isFrameSrc: boolean;
        // 是否为异步路由
        isAsync: boolean;
        // 是否需要缓存 
        isKeepAlive: boolean;
        // 是否为菜单路由
        isMenu: boolean;
        // 是否渲染面包屑
        isCrumbs: boolean;
        // 额外属性
        [key: string]: any;
    };
    type AppRouteMeta = Partial<RouteMeta>;
    type AppRouteRecordRaw = Array<RouteRecordRaw>;
}
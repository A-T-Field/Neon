/*
 * @Author: maggot-code
 * @Date: 2022-03-28 16:51:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-21 22:55:17
 * @Description: file content
 */
import "vue-router";

declare module "vue-router" {
    interface RouteMeta {
        // 参数部分 ⬇
        // 父级标识
        parent: string;
        // 索引表示(xxx.xxx.self)
        indexes: string;

        // UI 部分 ⬇
        // 标题
        title: string;
        // 标签
        label: string;
        // 图标
        icon: string;
        // 标记
        tag: string;

        // 功能部分 ⬇
        // 是否为导航路由
        isNav: boolean;
        // 是否为菜单路由
        isMenu: boolean;
        // 是否渲染面包屑
        isCrumbs: boolean;
        // 是否排序
        isSort: boolean;
        // 排序权重
        sort: number;
        // 是否外链
        isFrameSrc: boolean;
        // 外部链接地址
        frameSrc: string;
        // 是否禁用
        isDisabled: boolean;
        // 是否隐藏
        isHidden: boolean;
        // 是否缓存 
        isKeepAlive: boolean;

        // 额外属性
        [key: string]: any;
    };
    type AppRouteMeta = Partial<RouteMeta>;
}
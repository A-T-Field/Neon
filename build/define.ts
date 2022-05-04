/*
 * @Author: maggot-code
 * @Date: 2022-03-27 14:11:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-05-01 19:35:11
 * @Description: file content
 */
import pkg from '../package.json';

export type AppInfoPackage = {
    name: string;
    version: string;
    dependencies: Record<string, string>,
    devDependencies: Record<string, string>
}

export function viteDefine() {
    const { name, version, dependencies, devDependencies } = pkg;

    const __APP_INFO__: AppInfoPackage = {
        name,
        version,
        dependencies,
        devDependencies
    };

    return {
        pkg: __APP_INFO__,
        lastBuildTime: Date.now(),
        __VUE_OPTIONS_API__: false,
    }
}
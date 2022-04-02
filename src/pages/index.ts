/*
 * @Author: maggot-code
 * @Date: 2022-04-02 15:06:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 17:00:11
 * @Description: file content
 */
import { default as layoutPage } from '@/layout';
import { assign } from '@/shared/utils/common';
import { each } from '@/shared/utils/loop';

const DefaultName = "Unknow";
const matchingComponent = new RegExp(/\.\/(.*)\/index.*/);
const pageSource = new Map<string, any>();

function transformKey(key: string) {
    const nameMatch = key.match(matchingComponent);

    if (!nameMatch || nameMatch.length <= 1) return key;

    return nameMatch[1];
}

export function getPageSourceKeys() {
    return pageSource.keys();
}

export function selectPage(name: string) {
    if (!pageSource.has(name)) return pageSource.get(DefaultName);

    return pageSource.get(name);
}

export default () => {
    if (pageSource.size > 0) return pageSource;

    const pages = import.meta.glob("./**/index.{ts,tsx}");

    each(assign(pages, layoutPage), (module, key) => {
        if (pageSource.has(key)) return;

        pageSource.set(transformKey(key), module);
    });

    return pageSource;
}
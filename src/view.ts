/*
 * @Author: maggot-code
 * @Date: 2022-04-04 18:52:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-05 18:44:38
 * @Description: file content
 */
import { assign } from '@/shared/utils/common';

const gather = new Map();

function transformKey(rawKey: string) {
    const key = rawKey.split(".").slice(1, -1).join("/");

    return key;
}

export function setupView() {
    const layout = import.meta.glob("./layout/**/*.{vue,tsx}");
    const page = import.meta.glob("./pages/**/*.{vue,tsx}");
    const view = assign(layout, page);
    for (const key in view) {
        gather.set(transformKey(key), view[key]);
    }
}

export function selectView(key: string) {
    if (!gather.has(key)) return gather.get("/layout/Unknow/Unknow");

    return gather.get(key);
}
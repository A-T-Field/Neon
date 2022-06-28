/*
 * @Author: maggot-code
 * @Date: 2022-03-28 16:41:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-23 17:42:47
 * @Description: file content
 */
import type { App, Component } from 'vue';

import { uuidv4 } from '@neon-utils/id';
import { isEmpty } from '@neon-utils/checkers';

export const componentInstall = (app: App) => (component: Component) => {
    const { name } = component;

    return app.component(name ?? uuidv4(), component);
};

export function getOrigin(): string {
    const { protocol, hostname } = window.location;

    return `${protocol}//${hostname}`;
}

export function getPort(): number {
    const { port } = window.location;

    return isEmpty(port) ? 80 : +port;
}

export function randomSection(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function assign<T, E = any>(base: T, extend: E): T {
    return Object.assign({}, base, extend);
}

export function getImage(path: string) {
    return new URL(`/src/assets/images${path}`, window.location.origin).href;
}

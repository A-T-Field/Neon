/*
 * @Author: maggot-code
 * @Date: 2022-03-27 14:37:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-11 21:53:57
 * @Description: file content
 */
import type { ResolveOptions, AliasOptions } from 'vite';

import { viteRoot } from './root';
import { resolve } from 'path';
import tspaths from '../tsconfig.json';

export type ResolveType = ResolveOptions & {
    alias: AliasOptions;
};

export const extensions = [
    '.mjs',
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
    '.json',
    '.proto',
];

export function setupAlias() {
    const { paths } = tspaths.compilerOptions;
    const root = viteRoot();
    const alias: Record<string, string> = {};

    Reflect.ownKeys(paths).forEach((keyRaw) => {
        const key = keyRaw.toString().split('/')[0];
        const val = paths[keyRaw][0].split('/').slice(0, -1).join('/');

        alias[key] = resolve(root, val + '/');
    });

    return alias;
}

export function viteResolve(): ResolveType {
    return {
        extensions,
        preserveSymlinks: false,
        alias: setupAlias(),
        dedupe: ['vue'],
    };
}

/*
 * @Author: maggot-code
 * @Date: 2022-03-27 15:24:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-27 15:27:39
 * @Description: file content
 */
import type { ServerOptions } from 'vite';

import { searchForWorkspaceRoot } from 'vite';
import { viteRoot } from './root';
import { viteServerProxy } from './proxy';

export function viteServer(): ServerOptions {
    const root = viteRoot();

    return {
        strictPort: false,
        https: false,
        open: false,
        cors: true,
        force: true,
        fs: {
            strict: true,
            allow: [searchForWorkspaceRoot(root)],
            deny: ['.env', '.env.*', '*.{pem,crt}'],
        },
        proxy: viteServerProxy(),
    };
}

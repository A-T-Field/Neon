/*
 * @Author: maggot-code
 * @Date: 2022-03-27 15:21:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-23 17:44:26
 * @Description: file content
 */
import type { CSSOptions } from 'vite';

export function viteCss(): CSSOptions {
    return {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@neon/assets/style/var.scss";`,
            },
        },
    };
}

/*
 * @Author: maggot-code
 * @Date: 2022-03-26 23:56:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 13:58:24
 * @Description: file content
 */
import { loadEnv } from "vite";
import { viteRoot } from './root';

const Blank = /\s+/g;
const isNumber = new RegExp(/^[0-9]*$/);
const isBoolean = (val: any) => ['true', 'false'].includes(val);
const toBoolean = (val: any) => val === 'true' ? true : val === 'false' ? false : false;

export function wrapperEnv(envRaw: Record<string, any>): ImportMetaEnv {
    const env: Record<string, any> = {};

    Reflect.ownKeys(envRaw).forEach((keyRaw) => {
        const key = keyRaw.toString().replace(Blank, "");
        const valRaw = envRaw[key].replace
            ? envRaw[key].replace(Blank, "")
            : envRaw[key];
        env[key] = isNumber.test(valRaw)
            ? +valRaw
            : isBoolean(valRaw)
                ? toBoolean(valRaw)
                : valRaw;
        process.env[key] = env[key];
    });

    return env as ImportMetaEnv;
}

export function viteEnv(mode?: string) {
    const envRaw = loadEnv(mode ?? "development", viteRoot());
    return wrapperEnv(envRaw);
}
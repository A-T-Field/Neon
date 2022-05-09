/*
 * @Author: maggot-code
 * @Date: 2022-05-08 23:24:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-05-09 23:41:57
 * @Description: file content
 */
import type { AxiosRequestConfig } from "axios";
import axios from "axios";

export function setupAxios(config?: AxiosRequestConfig) {
    const instance = axios.create(config);

    function getWrap() {
        console.log(instance);
    }

    return {
        get: instance.get,
        post: instance.post,
        put: instance.put,
        request: instance.request,
        delete: instance.delete,
        patch: instance.patch,
        getWrap
    }
}
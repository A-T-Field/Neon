/*
 * @Author: maggot-code
 * @Date: 2022-04-23 16:14:56
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-05 23:15:11
 * @Description: file content
 */
import 'axios';

declare module 'axios' {
    type AxiosPickModuleService =
        | 'version'
        | 'appendVersion'
        | 'tag'
        | 'headers'
        | 'dataType'
        | 'timeout'
        | 'responseType';
    type AxiosPickModule =
        | 'namespace'
        | 'baseURL'
        | 'withCredentials'
        | 'validateStatus'
        | 'xsrfHeaderName'
        | 'xsrfCookieName';
    type AxiosPickService =
        | 'requestID'
        | 'url'
        | 'method'
        | 'params'
        | 'dataType'
        | 'data';
    type AxiosDateType = 'json' | 'buffer' | 'form' | 'file' | 'blob';
    type AxiosDefaultType = string | 'default';
    // global config
    interface AxiosGlobalRequestConfig<D> extends AxiosRequestConfig<D> {
        requestID?: string;
        version?: number;
        appendVersion?: boolean;
        namespace?: AxiosDefaultType;
        tag?: AxiosDefaultType;
        dataType?: AxiosDateType;
        [key: string]: any;
    }
    // module config
    type AxiosModuleRequestConfig<D> = Pick<
        AxiosGlobalRequestConfig<D>,
        AxiosPickModuleService | AxiosPickModule
    >;
    // service config
    type AxiosServiceRequestConfig<D> = Pick<
        AxiosGlobalRequestConfig<D>,
        AxiosPickModuleService | AxiosPickService
    >;
}

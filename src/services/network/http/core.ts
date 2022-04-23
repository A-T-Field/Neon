/*
 * @Author: maggot-code
 * @Date: 2022-04-23 17:27:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-24 00:10:19
 * @Description: file content
 */
import { HttpConfig } from "./config";
import { HttpRequestInterceptor, HttpResponseInterceptor } from "./transformer";
import { HttpSend, HttpSendAll } from "./resources";
import { HttpUpload, HttpDownload } from "./file";

export interface HttpOptions {
    config: HttpConfig;
    requestInterceptor: HttpRequestInterceptor;
    responseInterceptor: HttpResponseInterceptor;
}

export abstract class HttpExtends {
    abstract httpSend: HttpSend;
    abstract httpSendall: HttpSendAll;
    abstract httpUpload: HttpUpload;
    abstract httpDownload: HttpDownload;

    abstract send: () => void;
    abstract sendall: () => void;
    abstract upload: () => void;
    abstract download: () => void;
}

export class HttpCore extends HttpExtends {
    httpSend: HttpSend;
    httpSendall: HttpSendAll;
    httpUpload: HttpUpload;
    httpDownload: HttpDownload;
    options: HttpOptions;
    private constructor(options: HttpOptions) {
        super();
        this.options = options;
        this.httpSend = new HttpSend(this);
        this.httpSendall = new HttpSendAll(this);
        this.httpUpload = new HttpUpload(this);
        this.httpDownload = new HttpDownload(this);
    }
    static setup(options?: Partial<HttpOptions>) {
        const config =
            options?.config
            ?? new HttpConfig();
        const requestInterceptor =
            options?.requestInterceptor
            ?? new HttpRequestInterceptor();
        const responseInterceptor =
            options?.responseInterceptor
            ?? new HttpResponseInterceptor();
        return new HttpCore({
            config,
            requestInterceptor,
            responseInterceptor
        });
    }

    send = () => {
        return this.httpSend;
    }
    sendall = () => {
        return this.httpSendall;
    }
    upload = () => {
        return this.httpUpload;
    }
    download = () => {
        return this.httpDownload;
    }
}
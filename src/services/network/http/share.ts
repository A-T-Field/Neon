/*
 * @Author: maggot-code
 * @Date: 2022-05-03 20:23:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-05-04 22:55:38
 * @Description: file content
 */
import axios from "axios";

const entity = axios.create({});

entity.interceptors.request.use((config) => {
    console.log(config);
    return config;
});
entity.interceptors.response.use((response) => {
    console.log(response);
    return response;
});

// https://api.thecatapi.com/v1/images/search?limit=1
const catSignal = new AbortController();
const send = (config: any) => {
    return entity.request(config)
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.log(error);
            return [];
        });
}

// setTimeout(() => {
//     catSignal.abort();
// }, 100);

async function wrap() {
    const response = await send({
        url: "https://api.thecatapi.com/v1/images/search",
        method: "get",
        params: {
            limit: 10
        },
        data: {},
        timeout: 0,
        timeoutErrorMessage: "请求超时11",
        responseType: "json",
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        validateStatus: function (status) {
            return status >= 200 && status < 400; // 默认值
        },
        signal: catSignal.signal,
    });

    console.log(response);
}

wrap();
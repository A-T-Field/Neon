/*
 * @Author: maggot-code
 * @Date: 2022-05-08 16:51:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-05-09 23:42:00
 * @Description: https://api.thecatapi.com/v1/images/search?limit=1
 */
import { setupAxios } from "./enhance";

const testAxios = setupAxios({
    baseURL: "https://api.thecatapi.com"
});

const response = await testAxios.get("/v1/images/search", {
    params: {
        limit: 100
    }
});

console.log(response);
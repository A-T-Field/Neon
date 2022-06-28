/*
 * @Author: maggot-code
 * @Date: 2022-03-27 15:27:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-28 23:45:13
 * @Description: file content
 */
export function viteServerProxy() {
    return {
        '/api': {
            target: 'http://jsonplaceholder.typicode.com/',
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
    };
}

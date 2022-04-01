/*
 * @Author: maggot-code
 * @Date: 2022-04-01 17:58:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 18:04:44
 * @Description: file content
 */
export default () => {
    const gather = import.meta.globEager("./*.ts");
    console.log(gather);
}
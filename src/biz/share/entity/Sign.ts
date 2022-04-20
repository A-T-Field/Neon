/*
 * @Author: maggot-code
 * @Date: 2022-04-20 22:39:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-20 22:46:08
 * @Description: file content
 */
import { uuidv4 } from "@neon/utils/id";

export function Sign() {
    const sign = ref(uuidv4());

    const setupSign = () => {
        sign.value = uuidv4();
    }

    return {
        value: sign,
        setupSign
    }
}
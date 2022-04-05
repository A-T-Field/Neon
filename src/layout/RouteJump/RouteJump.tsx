/*
* @Author: maggot-code
* @Date: 2022-04-03 21:16:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-05 14:56:42
* @Description: file content
*/
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return () => (<>
            <router-view></router-view>
        </>)
    }
})
/*
 * @Author: maggot-code
 * @Date: 2022-04-05 02:53:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-05 02:58:49
 * @Description: file content
 */
export default defineComponent({
    setup() {
        return () => (<>
            <h1>jump layout</h1>
            <router-view></router-view>
        </>)
    }
})
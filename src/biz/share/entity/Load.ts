/*
 * @Author: maggot-code
 * @Date: 2022-04-20 23:13:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-20 23:15:29
 * @Description: file content
 */
export function Load() {
    const loading = ref(true);
    const setupLoading = (status: boolean = false) => {
        loading.value = status;
    }

    return {
        value: loading,
        setupLoading
    }
}
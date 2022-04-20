<!--
 * @Author: maggot-code
 * @Date: 2022-04-19 23:57:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-20 23:55:42
 * @Description: file content
-->
<script setup lang='ts'>
import { useNeonTable } from "@neon-biz/NeonTable/usecase/useNeonTable";
const { setupTableData } = useNeonTable("table-test");

const a: Array<any> = [];
const random = () => {
    return Math.random() > 0.5 ? true : false;
}
const requestData = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        a.push(a.length + 1);
        const b = random();
        const h = b ? resolve : reject;
        const msg = b ? "ok" : "error";

        setTimeout(() => {
            h({
                msg,
                data: a
            })
        }, 2000);
    });
}

const getData = () => {
    setupTableData(requestData().then(res => res.data));
    // setupLoading(true);

    // requestData()
    //     .then(setupTableData)
    //     .finally(() => {
    //         setupLoading(false);
    //         setupSign();
    //     });
}

onMounted(getData);
</script>

<template>
    <h1>app</h1>
    <n-button @click="getData">请求喵～</n-button>
    <neon-table name="table-test"></neon-table>
</template>

<style scoped lang='scss'>
</style>
<!--
 * @Author: maggot-code
 * @Date: 2022-04-20 22:33:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-21 00:02:21
 * @Description: file content
-->
<script setup lang='ts'>
import { Table } from "@neon-biz/NeonTable/entity/Table";

const props = defineProps({
    name: {
        type: String,
        default: 'default',
    },
});

const { tableSource } = Table();
const provideSource = inject(props.name, tableSource);

const key = computed(() => {
    return provideSource.value.sign.value;
});
const loading = computed(() => {
    return provideSource.value.loading.value;
});
const data = computed(() => {
    return provideSource.value.tableData.value;
});
</script>

<template>
    <n-spin :show="loading">
        <h1>neon table</h1>
        <h1>{{ key }}</h1>
        <h1>{{ loading }}</h1>
        <ul>
            <li v-for="(item, index) in data" :key="index">{{ item }}</li>
        </ul>
    </n-spin>
</template>

<style scoped lang='scss'>
</style>
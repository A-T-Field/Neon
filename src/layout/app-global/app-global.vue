<!--
 * @Author: maggot-code
 * @Date: 2022-03-28 15:14:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-29 14:32:52
 * @Description: file content
-->
<script setup lang="ts">
import type { NLocale, NDateLocale } from 'naive-ui';

import { zhCN, dateZhCN, darkTheme, lightTheme } from 'naive-ui';
import { computed } from 'vue';

type localeType = Nullable<NLocale>;
const locale = computed<localeType>(() => {
    return zhCN;
});

type dateLocaleType = Nullable<NDateLocale>;
const dateLocale = computed<dateLocaleType>(() => {
    return dateZhCN;
});

const theme = computed(() => {
    // darkTheme
    return lightTheme;
});
</script>

<template>
    <n-config-provider
        id="app-config"
        tag="main"
        :abstract="false"
        :locale="locale"
        :date-locale="dateLocale"
        :theme="theme"
    >
        <app-proxy></app-proxy>
    </n-config-provider>
</template>

<style lang="scss">
@import "@/style/index.scss";
</style>
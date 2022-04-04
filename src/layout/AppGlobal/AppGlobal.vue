<!--
 * @Author: maggot-code
 * @Date: 2022-03-28 15:14:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-04 17:54:59
 * @Description: file content
-->
<script setup lang="ts">
import type { NLocale, NDateLocale } from 'naive-ui';

import { zhCN, dateZhCN, lightTheme } from 'naive-ui';

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
        <app-proxy>
            <router-view></router-view>
        </app-proxy>
    </n-config-provider>
</template>

<style lang="scss">
@import "@/style/index.scss";
</style>
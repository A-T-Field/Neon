<!--
 * @Author: maggot-code
 * @Date: 2022-04-19 23:57:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-19 17:32:18
 * @Description: file content
-->
<script setup lang='ts'>
import { useBooleanValueObject } from "@neon-form/Usecase";
const { value,setupValue } = useBooleanValueObject("init", false);
</script>

<template>
<h1>App</h1>

<h2>{{value}}</h2>
<button @click="value ? setupValue(false) : setupValue(true)">修改</button>
</template>

<style scoped lang='scss'>
</style>

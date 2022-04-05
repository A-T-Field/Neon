<!--
 * @Author: maggot-code
 * @Date: 2022-04-05 03:28:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-05 03:30:07
 * @Description: file content
-->
<script setup lang='ts'>
const props = defineProps<{ id: string }>();
</script>

<template>
    <h1>home - [{{ props.id }}]</h1>
</template>

<style scoped lang='scss'></style>
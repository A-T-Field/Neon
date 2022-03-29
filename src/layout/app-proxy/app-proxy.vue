<!--
 * @Author: maggot-code
 * @Date: 2022-03-28 15:17:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-29 14:26:54
 * @Description: file content
-->
<script setup lang='ts'></script>

<template>
    <n-loading-bar-provider>
        <n-dialog-provider>
            <n-notification-provider>
                <n-message-provider>
                    <slot name="default"></slot>
                </n-message-provider>
            </n-notification-provider>
        </n-dialog-provider>
    </n-loading-bar-provider>
</template>

<style scoped lang='scss'></style>
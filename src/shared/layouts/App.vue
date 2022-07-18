<!--
 * @Author: maggot-code
 * @Date: 2022-04-19 23:57:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-18 15:32:06
 * @Description: file content
-->
<script setup lang='ts'>
const pwd = ref("");
const usablepwd = ref("");
function handlerOutput() {
    // fe.status.setInitialized(true);
    // console.log(
    //     unref(pwd),
    //     unref(usablepwd)
    // );
}
</script>

<template>
    <form>
        密码：<input type="text"  v-model="pwd">
        确认密码：<input type="text" v-model="usablepwd">
        <button type="button" @click="handlerOutput">提交</button>
        <div>
            <p>密码输出：{{pwd}}</p>
            <p>确认密码输出：{{usablepwd}}</p>
        </div>
        <!-- <h1>字段初始化状态：{{fe.status.initialized.value}}</h1>
        <h1>字段初始化描述：{{fe.status.initialized.label}}</h1> -->
    </form>
</template>

<style scoped lang='scss'>
</style>

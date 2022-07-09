<!--
 * @Author: maggot-code
 * @Date: 2022-04-19 23:57:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-09 12:57:44
 * @Description: file content
-->
<script setup lang='ts'>
const pwd = ref("");
const usablepwd = ref("");
function handlerOutput() {
    console.log(
        unref(pwd),
        unref(usablepwd)
    );
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
    </form>
</template>

<style scoped lang='scss'>
</style>

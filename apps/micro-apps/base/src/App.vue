<template>
  <div class="layout">
    <div class="head">1</div>
    <div class="body">
      <div class="menu">
        <a href="/base/vue">1111</a>
        <br />
        <a href="/base/react">2222</a>
      </div>
      <div class="content" id="container">3</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("base mounted");
});
</script>
<style lang="less" scoped>
.layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .head {
    height: 60px;
    // background-color: skyblue;
    flex-shrink: 0;
  }
  .body {
    flex-grow: 1;
    display: flex;
    .menu {
      width: 200px;
      flex-shrink: 0;
      // background-color: aquamarine;
    }
    .content {
      flex-grow: 1;
      // background-color: antiquewhite;
    }
  }
}
</style>

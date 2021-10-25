<template>
  <div class="page home">
    <com-top-bar class="top-bar-pool"></com-top-bar>
    <div class="content">
      <div ref="menuPool" class="menu-pool">
        <com-menu-pool></com-menu-pool>
      </div>
      <div ref="containerPool" class="container-pool">
        <router-view v-if="isRouterActive"></router-view>
      </div>
    </div>
    <div class="player-pool"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, provide, onMounted } from "vue";
import { getBanner } from "../../api/banner";
import ComMenuPool from "../../components/menuPool/ComMenuPool.vue";
import ComTopBar from "../../components/public/ComTopBar.vue";

const isRouterActive = ref(true);
const menuPool = ref(null);
const containerPool = ref(null);

/** 控制 isRouterActive 实现某些页面的自刷新 */
const reload = () => {
  isRouterActive.value = false;
  nextTick(() => {
    isRouterActive.value = true;
  })
}
provide("reload", reload);

onMounted(() => {
  // 首页加载banner数据
  // getBanner();
  console.log(containerPool.value);
  console.log(menuPool.value);
})

// 控制区域滚动

</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.home {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  border: 1px solid red;
  background-color: $app-bg-color-base;
  .top-bar-pool {
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #ebebeb;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 40px;
    .menu-pool {
      width: 20%;
      min-width: 160px;
      height: 640px;
      overflow: auto;
      border: 1px solid blue;
      text-indent: 16px;
    }
    .container-pool {
      flex: 1;
      height: 640px;
      overflow: auto;
      border: 1px solid red;
      background-color: white; 
    }
  }
  .player-pool {
    width: 100%;
    height: 72px;
    border: 1px solid orangered;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    background-color: #ebebeb;
  }
}
</style>

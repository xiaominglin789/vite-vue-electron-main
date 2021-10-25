<template>
  <div class="com topbar">
    <div class="left">
      <div class="logo">Logo</div>
      <com-route></com-route>
      <div class="search">
        <input v-model="keyword" type="text" :placeholder="String(placeholderTip)">
        <i class="iconfont icon-search" @click="onClickSearch"></i>
      </div>
    </div>
    <div class="right">
      <div class="user">
        <i class="iconfont icon-user"></i>
        <span>未登录</span>
        <i class="iconfont icon-email"></i>
        <i class="iconfont icon-skin"></i>
        <i class="iconfont icon-setting"></i>
      </div>
      <div class="tool">
        <i class="iconfont icon-hide"></i>
        <i class="iconfont icon-min"></i>
        <i class="iconfont icon-max"></i>
        <i class="iconfont icon-closed"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import ComRoute from "./ComRoute.vue";

const router = useRouter();
const keyword = ref("");
/** 搜索提示关键字,后期可动态设置 */
const placeholderTip = String(null || import.meta.env.VITE_APP_INPUT_PLACEHOLDER || "搜索音乐、歌手、歌词、用户");;

/** 搜索操作 */
const onClickSearch = () => {
  if (!keyword.value) return;

  // url跳转
  router.push({ path: "/search", query: { keyword: keyword.value } });
}

</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.topbar {
  background-color: $a-text-color-active !important;
  color: $text-color-white;
  .left {
    display: flex;
    .logo {
      min-width: 160px;
      height: 100%;
    }
    .search {
      margin-left: 10px;
      width: 220px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      input {
        width: 100%;
        height: 24px;
        border-radius: 36px;
        text-indent: 8px;
        outline: none;
        border: none;
        background-color: rgba($color: #dddddd, $alpha: 1);
        color: $text-color-white;
        font-size: 14px;
      }
      input::placeholder {
        color: grey;
        font-size: 12px;
      }
      .iconfont {
        position: absolute;
        right: 4px;
        top: 4px;
        z-index: 2;
        cursor: pointer;
        opacity: .8;
      }
      .iconfont:hover {
        opacity: 1;
      }
    }
  }
  .right {
    @include flex-center;
    .user,.tool {
      @include flex-center;
      i {
        font-size: 20px;
        padding: 0 6px;
        opacity: .7;
        cursor: pointer;
      }
      i:hover {
        opacity: 1;
      }
      i:active {
        opacity: .8;
        scale: .9;
      }
    }
    .user {
      padding-right: 10px;
      border-right: 1px solid grey;
      span {
        font-size: 12px;
        text-overflow: unset;
        @include ellipsis;
      }
    }
    .tool {
      padding: 0 10px;
      i {
        font-size: 14px;
      }
    }
  }
}
</style>

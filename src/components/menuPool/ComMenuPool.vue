<template>
  <div class="com menu">
    <com-menu-temp-vue title="推荐" :menu="recommendMenuData"></com-menu-temp-vue>
    <com-menu-temp-vue title="我的音乐" :menu="userMenuData"></com-menu-temp-vue>
    <com-menu-temp-vue title="我的歌单" :menu="userSongCateMenuData"></com-menu-temp-vue>
    <com-menu-temp-vue title="推荐" :menu="recommendMenuData"></com-menu-temp-vue>
    <com-menu-temp-vue title="我的音乐" :menu="userMenuData"></com-menu-temp-vue>
    <com-menu-temp-vue title="我的歌单" :menu="userSongCateMenuData"></com-menu-temp-vue>
    <com-menu-temp-vue title="推荐" :menu="recommendMenuData"></com-menu-temp-vue>
    <com-menu-temp-vue title="我的音乐" :menu="userMenuData"></com-menu-temp-vue>
    <com-menu-temp-vue title="我的歌单" :menu="userSongCateMenuData"></com-menu-temp-vue>
  </div>
</template>

<script setup lang="ts">
import type { MenuType } from '../../utils/types/menu';
import ComMenuTempVue from '../public/ComMenuTemp.vue';

const recommendMenuData: Array<MenuType> = [
  {
    title: "发现音乐",
    to: "/found",
    icon: "",
  },
  {
    title: "FM频道",
    to: "/user-dj",
    icon: "",
  },
];

const userMenuData: Array<MenuType> = [
  {
    title: "本地音乐",
    to: "/local",
    icon: "",
  },
  {
    title: "下载管理",
    to: "/dowload",
    icon: "",
  },
  {
    title: "我的电台",
    to: "/my-dj",
    icon: "",
  },
  {
    title: "收藏管理",
    to: "/my-colletion",
    icon: "",
  },
];

const userSongCateMenuData: Array<MenuType> = [
  {
    title: "我喜欢的音乐",
    to: "/my-create-colletion",
    icon: "",
  }
]

</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.menu {
  width: 100%;
  color: $text-color-grey;
}
</style>

<template>
  <div class="com menu">
    <com-menu-temp-vue title="推荐" :menu="recommendMenuData" :active-title="activeTitle" @on-change-menu="onChangeMenu"></com-menu-temp-vue>
    <com-menu-temp-vue title="我的音乐" :menu="userMenuData" :active-title="activeTitle"  @on-change-menu="onChangeMenu"></com-menu-temp-vue>
    <com-menu-temp-vue title="我的歌单" :menu="userSongCateMenuData" :active-title="activeTitle" @on-change-menu="onChangeMenu"></com-menu-temp-vue>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { MenuType } from '../../utils/types/menu';
import ComMenuTempVue from '../public/ComMenuTemp.vue';


const recommendMenuData: Array<MenuType> = [
  {
    title: "发现音乐",
    to: "/",
    icon: "icon-music",
  },
  {
    title: "FM频道",
    to: "/user-fm",
    icon: "icon-volume",
  },
];

const userMenuData: Array<MenuType> = [
  {
    title: "本地音乐",
    to: "/local",
    icon: "icon-musicer",
  },
  {
    title: "下载管理",
    to: "/dowload",
    icon: "icon-dowload",
  },
  {
    title: "我的电台",
    to: "/my-dj",
    icon: "icon-dj",
  },
  {
    title: "收藏管理",
    to: "/my-colletion",
    icon: "icon-love",
  },
];

const activeTitle = ref("");

/** 页面激活 */
onMounted(() => {
  activeTitle.value = '发现音乐';
})

const userSongCateMenuData: Array<MenuType> = [
  {
    title: "我喜欢的音乐",
    to: "/my-create-colletion",
    icon: "icon-love",
  }
]

const onChangeMenu = (title: string) => {
  console.log("切换menu: ", title);
  activeTitle.value = title;
}

</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.menu {
  width: 100%;
  color: $text-color-grey;
}
</style>

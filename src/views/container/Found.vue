<template>
  <div class="page found">
    <com-tabs :tabs="foundTabs"></com-tabs>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FoundTabType } from '../../utils/types/tab';
import ComTabs from '../../components/public/ComTabs.vue';

const foundTabs: Array<FoundTabType> = [
  {
    title: "个性推荐",
    id: 1,
    to: "/found/recommend"
  },
  {
    title: "歌单",
    id: 2,
    to: "/found/playlist"
  },
  {
    title: "主播电台",
    id: 3,
    to: "/found/dj"
  },
  {
    title: "排行榜",
    id: 4,
    to: "/found/rank"
  },
  {
    title: "歌手",
    id: 5,
    to: "/found/singer"
  },
  {
    title: "最新音乐",
    id: 6,
    to: "/found/music"
  },
];

</script>

<style lang="scss" scoped>
.found {
  width: 100%;
  height: 100%;
  .content {
    padding: 20px;
  }
}
</style>

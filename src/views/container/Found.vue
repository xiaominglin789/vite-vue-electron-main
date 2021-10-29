<template>
  <div class="page found">
    <com-tabs :tabs="foundTabs" width="86%"></com-tabs>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { FoundTabType } from '../../utils/types/tab';
import ComTabs from '../../components/public/ComTabs.vue';

const router = useRouter();

const foundTabs: Array<FoundTabType> = [
  {
    title: "个性推荐",
    id: 1,
    to: "/"
  },
  {
    title: "歌单",
    id: 2,
    to: "/playlist"
  },
  {
    title: "主播电台",
    id: 3,
    to: "/dj"
  },
  {
    title: "排行榜",
    id: 4,
    to: "/rank"
  },
  {
    title: "歌手",
    id: 5,
    to: "/singer"
  },
  {
    title: "最新音乐",
    id: 6,
    to: "/music"
  },
];
</script>

<style lang="scss" scoped>
.found {
  width: 100%;
  height: 100%;
  .content {
    padding: 16px 28px;
  }
}
</style>

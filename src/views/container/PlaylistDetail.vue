<template>
  <div v-if="detail" class="com playlist-detail">
    <div class="header-pool">
      <img :src="detail.coverImgUrl">
      <div class="detail">
        <h3 class="title"><span class="tip">歌单</span> {{ detail.name }}</h3>
        <div v-if="detail.creator" class="creator">
          <img :src="detail.creator.avatarUrl">
          <span class="name">{{ detail.creator.nickname }}</span>
          <span class="date">{{ detail.createTime + "创建" }}</span>
        </div>
        <!-- 功能栏展示 -->
        <ul class="tools">
          <li class="play">
            <div>
              <i class="iconfont icon-play-start"></i> 播放全部
            </div>
            <i class="iconfont icon-add"></i>
          </li>
          <li>
            <i class="iconfont icon-file"></i> 收藏{{}}
          </li>
          <li>
            <i class="iconfont icon-shared"></i> 分享{{}}
          </li>
          <li>
            <i class="iconfont icon-dowload"></i> 下载全部
          </li>
        </ul>
        <!--  -->
        <div v-if="detail.tags&&detail.tags.length" class="others">
          <p class="tags">
            <span class="title">标签: </span>
            <span v-for="(item,index) in detail.tags" :key="item" class="links">
              <a  href="/">{{ item }}</a>
              {{ (detail.tags.length - index > 1) ? '/ ' : '' }}
            </span>
          </p>
          <p class="des">
            <span class="title">简介: </span>
          </p>
        </div>
        <!-- 提示信息容器 -->
        <div class="remark">
          <div class="play-songs">
            <i class="iconfont icon-music"></i> 
          </div>
          <div class="play-nums">
            <i class="iconfont icon-play-start"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="list-pool">
      <com-tabs></com-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, computed } from "vue";
import { getPlaylistDetailById } from "../../api/playlist";
import { useRoute, useRouter } from "vue-router";
import ComTabs from "../../components/public/ComTabs.vue";
import type { playlistType } from "../../utils/types/playlist";

const router = useRouter();
const route = useRoute();
const detail = ref<playlistType>();
const id = ref(0);

onBeforeMount(async() => {
  id.value = Number(route.query['id']);
  if (id.value) {
    try {
      const result = await getPlaylistDetailById(id.value);
      detail.value = result;
    } catch (error) {
      router.replace("/404");
    }
  }
})

</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.playlist-detail {
  width: 100%;
  .header-pool {
    width: 100%;
    display: flex;
    padding: 16px;
    img {
      width: 100%;
      height: 100%;
      min-width: 150px;
      min-height: 150px;
    }
    .detail {
      flex: 1;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      .title {
        width: 100%;
        height: 32px;
        font-size: 21px;
        font-weight: 600;
        @include ellipsis;
        .tip {
          width: 48px;
          height: 100%;
          @include flex-center;
          color: $text-color-white;
          background-color: $a-text-color-active;
        }
      }
      .creator {
        opacity: .8;
        cursor: pointer;
        @include flex;
        color: $text-color-grey;
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
        .date {
          color: $text-color-active;
        }
      }
      .creator:hover {
        opacity: 1;
      }
      .tools {
        width: 100%;
        @include flex;
        justify-content: flex-start;
        li {
          width: 84px;
          height: 24px;
          border: 1px solid $text-color-active;
          border-radius: 4px;
          @include flex-center;
          color: $text-color-link;
        }
        li.play {
          position: relative;
          .iconfont {
            height: 100%;
            border-left: 1px solid $text-color-active;
          }
        }
      }
      .others {
        width: 60%;
        .tags .title,.des .title {
          font-size: 14px;
          color: $text-color-black;
        }
        .tags {
          .links a { color: blue; cursor: pointer; }
        }
        .des {
          height: 24px;
          @include ellipsis(2);
        }
      }
      .remark {}
    }
  }
  .list-pool {
    width: 100%;
  }
}
</style>

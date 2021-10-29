<template>
  <div v-if="detail" class="com playlist-detail">
    <div class="header-pool">
      <img :src="detail.coverImgUrl">
      <div class="detail">
        <h3 class="title"><span class="tip">歌单</span> {{ detail.name }}</h3>
        <div v-if="detail.creator" class="creator">
          <img :src="detail.creator.avatarUrl">
          <span class="name">{{ detail.creator.nickname }}</span>
          <span class="date">{{ createTimeStr }}</span>
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
            <i class="iconfont icon-file"></i> 
            收藏({{ detail.subScribedCount?detail.subScribedCount:0}})
          </li>
          <li>
            <i class="iconfont icon-shared"></i> 
            分享({{ detail.shareCount?detail.shareCount:0 }})
          </li>
          <li>
            <i class="iconfont icon-dowload"></i> 下载全部
          </li>
        </ul>
        <!--  -->
        <div v-if="detail.tags&&detail.tags.length" class="others">
          <p class="tags">
            <span class="tip">标签:&nbsp;&nbsp;</span>
            <span v-for="(item,index) in detail.tags" :key="item" class="links">
              <a  href="/">{{ item }}</a>
              {{ (detail.tags.length - index > 1) ? '/ ' : '' }}
            </span>
          </p>
          <p class="des">
            <span class="tip">简介:&nbsp;&nbsp;<span v-text="detail.description"></span></span>
          </p>
        </div>
        <!-- 提示信息容器 -->
        <div class="remark">
          <div v-show="detail.trackCount" class="play-songs">
            <i class="iconfont icon-music"></i>
            {{ detail.trackCount }}
          </div>
          <div v-show="playCountStr" class="play-nums">
            <i class="iconfont icon-play-start"></i>
            {{ playCountStr }}
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
import { formatDateTime } from '../../utils/utils';

const router = useRouter();
const route = useRoute();
const playlistDetailRes = ref<{ playlist: playlistType }>();
const detail = ref<playlistType>();
const id = ref(0);

onBeforeMount(async() => {
  id.value = Number(route.query['id']);
  if (id.value) {
    try {
      const result = await getPlaylistDetailById(id.value);
      playlistDetailRes.value = result;
      console.log(playlistDetailRes.value);
      if (playlistDetailRes.value.playlist) {
        detail.value = playlistDetailRes.value.playlist;
        console.log(detail.value);
      }
    } catch (error) {
      router.replace("/404");
    }
  }
})

const playCountStr = computed(() => {
  const temp = detail.value?.playCount||0;
  return temp/1000 > 1 ? (temp/1000).toFixed(1)+"k" : temp;
})

const createTimeStr = computed(() => {
  return formatDateTime(detail.value?.createTime||0) + (detail.value?.createTime?"创建":"");
})

</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.playlist-detail {
  width: 100%;
  .header-pool {
    width: 100%;
    display: flex;
    padding: 20px;
    img {
      width: 160px;
      height: 100%;
    }
    .detail {
      flex: 1;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      .title {
        width: 100%;
        font-size: 21px;
        font-weight: 600;
        @include ellipsis;
        .tip {
          display: inline-block;
          width: 48px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          font-size: 16px;
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
        .name {
          padding: 0 10px;
          color: $text-color-black;
        }
        .date {
          color: $text-color-grey;
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
          cursor: pointer;
          width: 100px;
          height: 24px;
          line-height: 24px;
          margin-right: 10px;
          border: 1px solid $a-bg-color-active;
          border-radius: 4px;
          font-size: 12px;
          @include flex-center;
          color: $text-color-link;
        }
        li.play {
          .icon-play-start {
            position: relative;
            top: 1px;
            color: $a-text-color-active;
          }
          .icon-add {
            box-sizing: border-box;
            margin-left: 1px;
            padding-left: 4px;
            border-left: 1px solid $a-bg-color-active;
          }
        }
      }
      .others {
        width: 50%;
        font-size: 12px;
        .tags .tip,.des .tip {
          font-size: 12px;
          color: $text-color-black;
        }
        .tags {
          .links a { color: blue; cursor: pointer; }
        }
        .des {
          margin-top: 2px;
          @include ellipsis(2);
          .tip span {
            font-size: 14px;
            color: $text-color-grey;
          }
        }
      }
      .remark {
        position: absolute;
        top: 0;
        right: 0;
        @include flex;
        color: $text-color-grey;
        .play-songs {
          margin-right: 16px;
        }
      }
    }
  }
  .list-pool {
    width: 100%;
  }
}
</style>

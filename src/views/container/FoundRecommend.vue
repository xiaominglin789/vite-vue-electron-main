<template>
  <div class="page found-recommend">
    <div class="swiper">
      <com-banner></com-banner>
    </div>
    <!-- 1 -->
    <com-panel
      title="推荐歌单"
      panel-class="panel-class"
    >
      <template v-slot:tool>
        <span class="tool">更多<i class="iconfont icon-forward"></i></span>
      </template>
      <template v-slot:content>
        <com-playlist v-for="(child, index) in playlists" :key="index"  :value="child" @on-detail="onToDetal"></com-playlist>
      </template>
    </com-panel>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ComBanner from "../../components/public/ComBanner.vue";
import ComPanel from "../../components/public/ComPanel.vue";
import ComPlaylist from "../../components/public/ComPlaylist .vue";
import type { playlistType } from "../../utils/types/playlist";
import { getRecommendPlaylists } from "../../api/playlist";
import { useRouter } from "vue-router";
// import { getPrivateFM } from "../../api/user";

const playlists = ref<Array<playlistType>>([
  {
    /** 歌单id号 */
    id: 1,
    /** 歌单标题 */
    name: "歌单简介歌单简介歌单简介歌单简介歌单简介歌单简介歌单简介歌单简介歌单简介歌单简介歌单简介歌单简介歌单简介歌单简介",
    /** 歌单简介 */
    description: '歌单简介',
    /** 歌单播放数量 */
    playCount: 123213,
    /** 歌单被分享数 */
    shareCount: 123,
    /** 歌单收藏数 */
    subScribedCount: 321,
    /** 歌单标签数组 */
    tags: ['测试', '测试2', '测试3'],
    /** 歌曲数量 */
    trackCount: 10,
    /** 歌单创建者id */
    userId: 11232313,
    /** 歌单创建时间 */
    createTime: 1633755698489,
    /** 歌单更新时间 */
    updateTime: 1633755698489,
    /** 歌单评论数据 */
    commentCount: 160,
    /** 歌单封面图地址 */
    coverImgUrl: 'http://p1.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg',
    /** 歌单创建者信息 */
    creator: {
      userId: 11232313,
      nickname: 'jack',
      avatarUrl: 'http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg',
    }
  },
  {
    /** 歌单id号 */
    id: 1,
    /** 歌单标题 */
    name: "歌单标题",
    /** 歌单简介 */
    description: '歌单简介',
    /** 歌单播放数量 */
    playCount: 123213,
    /** 歌单被分享数 */
    shareCount: 123,
    /** 歌单收藏数 */
    subScribedCount: 321,
    /** 歌单标签数组 */
    tags: ['测试', '测试2', '测试3'],
    /** 歌曲数量 */
    trackCount: 10,
    /** 歌单创建者id */
    userId: 11232313,
    /** 歌单创建时间 */
    createTime: 1633755698489,
    /** 歌单更新时间 */
    updateTime: 1633755698489,
    /** 歌单评论数据 */
    commentCount: 160,
    /** 歌单封面图地址 */
    coverImgUrl: 'http://p1.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg',
    /** 歌单创建者信息 */
    creator: {
      userId: 11232313,
      nickname: 'jack',
      avatarUrl: 'http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg',
    }
  },
  {
    /** 歌单id号 */
    id: 1,
    /** 歌单标题 */
    name: "歌单标题",
    /** 歌单简介 */
    description: '歌单简介',
    /** 歌单播放数量 */
    playCount: 123213,
    /** 歌单被分享数 */
    shareCount: 123,
    /** 歌单收藏数 */
    subScribedCount: 321,
    /** 歌单标签数组 */
    tags: ['测试', '测试2', '测试3'],
    /** 歌曲数量 */
    trackCount: 10,
    /** 歌单创建者id */
    userId: 11232313,
    /** 歌单创建时间 */
    createTime: 1633755698489,
    /** 歌单更新时间 */
    updateTime: 1633755698489,
    /** 歌单评论数据 */
    commentCount: 160,
    /** 歌单封面图地址 */
    coverImgUrl: 'http://p1.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg',
    /** 歌单创建者信息 */
    creator: {
      userId: 11232313,
      nickname: 'jack',
      avatarUrl: 'http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg',
    }
  },
  {
    /** 歌单id号 */
    id: 1,
    /** 歌单标题 */
    name: "歌单标题",
    /** 歌单简介 */
    description: '歌单简介',
    /** 歌单播放数量 */
    playCount: 123213,
    /** 歌单被分享数 */
    shareCount: 123,
    /** 歌单收藏数 */
    subScribedCount: 321,
    /** 歌单标签数组 */
    tags: ['测试', '测试2', '测试3'],
    /** 歌曲数量 */
    trackCount: 10,
    /** 歌单创建者id */
    userId: 11232313,
    /** 歌单创建时间 */
    createTime: 1633755698489,
    /** 歌单更新时间 */
    updateTime: 1633755698489,
    /** 歌单评论数据 */
    commentCount: 160,
    /** 歌单封面图地址 */
    coverImgUrl: 'http://p1.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg',
    /** 歌单创建者信息 */
    creator: {
      userId: 11232313,
      nickname: 'jack',
      avatarUrl: 'http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg',
    }
  },
  {
    /** 歌单id号 */
    id: 1,
    /** 歌单标题 */
    name: "歌单标题",
    /** 歌单简介 */
    description: '歌单简介',
    /** 歌单播放数量 */
    playCount: 123213,
    /** 歌单被分享数 */
    shareCount: 123,
    /** 歌单收藏数 */
    subScribedCount: 321,
    /** 歌单标签数组 */
    tags: ['测试', '测试2', '测试3'],
    /** 歌曲数量 */
    trackCount: 10,
    /** 歌单创建者id */
    userId: 11232313,
    /** 歌单创建时间 */
    createTime: 1633755698489,
    /** 歌单更新时间 */
    updateTime: 1633755698489,
    /** 歌单评论数据 */
    commentCount: 160,
    /** 歌单封面图地址 */
    coverImgUrl: 'http://p1.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg',
    /** 歌单创建者信息 */
    creator: {
      userId: 11232313,
      nickname: 'jack',
      avatarUrl: 'http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg',
    }
  },
  {
    /** 歌单id号 */
    id: 1,
    /** 歌单标题 */
    name: "歌单标题",
    /** 歌单简介 */
    description: '歌单简介',
    /** 歌单播放数量 */
    playCount: 123213,
    /** 歌单被分享数 */
    shareCount: 123,
    /** 歌单收藏数 */
    subScribedCount: 321,
    /** 歌单标签数组 */
    tags: ['测试', '测试2', '测试3'],
    /** 歌曲数量 */
    trackCount: 10,
    /** 歌单创建者id */
    userId: 11232313,
    /** 歌单创建时间 */
    createTime: 1633755698489,
    /** 歌单更新时间 */
    updateTime: 1633755698489,
    /** 歌单评论数据 */
    commentCount: 160,
    /** 歌单封面图地址 */
    coverImgUrl: 'http://p1.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg',
    /** 歌单创建者信息 */
    creator: {
      userId: 11232313,
      nickname: 'jack',
      avatarUrl: 'http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg',
    }
  },
  {
    /** 歌单id号 */
    id: 1,
    /** 歌单标题 */
    name: "歌单标题",
    /** 歌单简介 */
    description: '歌单简介',
    /** 歌单播放数量 */
    playCount: 123213,
    /** 歌单被分享数 */
    shareCount: 123,
    /** 歌单收藏数 */
    subScribedCount: 321,
    /** 歌单标签数组 */
    tags: ['测试', '测试2', '测试3'],
    /** 歌曲数量 */
    trackCount: 10,
    /** 歌单创建者id */
    userId: 11232313,
    /** 歌单创建时间 */
    createTime: 1633755698489,
    /** 歌单更新时间 */
    updateTime: 1633755698489,
    /** 歌单评论数据 */
    commentCount: 160,
    /** 歌单封面图地址 */
    coverImgUrl: 'http://p1.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg',
    /** 歌单创建者信息 */
    creator: {
      userId: 11232313,
      nickname: 'jack',
      avatarUrl: 'http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg',
    }
  },
  {
    /** 歌单id号 */
    id: 1,
    /** 歌单标题 */
    name: "歌单标题",
    /** 歌单简介 */
    description: '歌单简介',
    /** 歌单播放数量 */
    playCount: 123213,
    /** 歌单被分享数 */
    shareCount: 123,
    /** 歌单收藏数 */
    subScribedCount: 321,
    /** 歌单标签数组 */
    tags: ['测试', '测试2', '测试3'],
    /** 歌曲数量 */
    trackCount: 10,
    /** 歌单创建者id */
    userId: 11232313,
    /** 歌单创建时间 */
    createTime: 1633755698489,
    /** 歌单更新时间 */
    updateTime: 1633755698489,
    /** 歌单评论数据 */
    commentCount: 160,
    /** 歌单封面图地址 */
    coverImgUrl: 'http://p1.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg',
    /** 歌单创建者信息 */
    creator: {
      userId: 11232313,
      nickname: 'jack',
      avatarUrl: 'http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg',
    }
  },
  {
    /** 歌单id号 */
    id: 1,
    /** 歌单标题 */
    name: "歌单标题",
    /** 歌单简介 */
    description: '歌单简介',
    /** 歌单播放数量 */
    playCount: 123213,
    /** 歌单被分享数 */
    shareCount: 123,
    /** 歌单收藏数 */
    subScribedCount: 321,
    /** 歌单标签数组 */
    tags: ['测试', '测试2', '测试3'],
    /** 歌曲数量 */
    trackCount: 10,
    /** 歌单创建者id */
    userId: 11232313,
    /** 歌单创建时间 */
    createTime: 1633755698489,
    /** 歌单更新时间 */
    updateTime: 1633755698489,
    /** 歌单评论数据 */
    commentCount: 160,
    /** 歌单封面图地址 */
    coverImgUrl: 'http://p1.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg',
    /** 歌单创建者信息 */
    creator: {
      userId: 11232313,
      nickname: 'jack',
      avatarUrl: 'http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg',
    }
  },
  {
    /** 歌单id号 */
    id: 1,
    /** 歌单标题 */
    name: "歌单标题",
    /** 歌单简介 */
    description: '歌单简介',
    /** 歌单播放数量 */
    playCount: 123213,
    /** 歌单被分享数 */
    shareCount: 123,
    /** 歌单收藏数 */
    subScribedCount: 321,
    /** 歌单标签数组 */
    tags: ['测试', '测试2', '测试3'],
    /** 歌曲数量 */
    trackCount: 10,
    /** 歌单创建者id */
    userId: 11232313,
    /** 歌单创建时间 */
    createTime: 1633755698489,
    /** 歌单更新时间 */
    updateTime: 1633755698489,
    /** 歌单评论数据 */
    commentCount: 160,
    /** 歌单封面图地址 */
    coverImgUrl: 'http://p1.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg',
    /** 歌单创建者信息 */
    creator: {
      userId: 11232313,
      nickname: 'jack',
      avatarUrl: 'http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg',
    }
  }
]);
const router = useRouter();

onMounted(async () => {
  // await getPrivateFM();
  console.log(playlists);
  setTimeout(async () => {
    // const res = await getRecommendPlaylist();
    console.log('set_time_out');
  }, 500);
})

const onToDetal = (id: number) => {
  console.log("点击了: ", id);
  // 页面跳转
  router.push({ path: "/playlist-detail", query: { id } });
}

</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.found-recommend {
  width: 100%;
  .swiper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    > .banners {
      width: 50%;
    }
  }
  // 
  &:deep(.panel-class) {
    .header {
      align-items: center !important;
      .title {
        height: 32px;
        font-size: 18px;
        color: $text-color-black;
      }
      .tool {
        font-size: 14px;
        color: $text-color-grey;
        cursor: pointer;
        i {
          font-size: 14px;
        }
      }
      .tool:hover {
        text-decoration: underline;
        color: $text-color-black;
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      gap: 20px 18px;
      padding: 10px 0px;
    }
  }
}

</style>

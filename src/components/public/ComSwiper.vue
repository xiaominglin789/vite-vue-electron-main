<template>
  <div class="com wrap">
    <div class="swiper">
      <div class="swiper-item" v-for="item in banners" :key="item.typeTitle" @click="onClickSwiperItem(item)">
        <img :src="item.imageUrl" />
        <div v-if="false" class="tip"></div>
      </div>
    </div>
    <div v-if="indicator&&indicator!=null" class="indicator">
      <ul>
        <li v-for="item in banners" :key="item.typeTitle" @click="onClickIndicator(item)"></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";

const bannerTypeRoutePath = {
  [0]: "",
  [1]: "",
  [10]: "",
  [3000]: "",
  [1005]: "",
}

type bannerType = {
  /** 图片地址 */
  imageUrl: string;
  /** id */
  targetId: number;
  /** 跳转目标,0:独家策划, 1:新歌首发,单曲 10:专辑(一组歌曲) 3000:直播/专题链接 1005:广告 */ 
  targetType: number;
  /** 文本 */
  typeTitle?: string;
  /** 文本颜色 */
  titleColor?: string;
}

defineProps({
  banners: {
    type: Array as PropType<Array<bannerType>>,
    default: () => [
      {
        imageUrl: "http://p1.music.126.net/26NtvqCXZyj8XqNl8R5YGA==/109951166553811423.jpg",
        targetId: 1888695134,
        targetType: 1,
        titleColor: "red",
        typeTitle: "新歌首发",
      },
      {
        imageUrl: "http://p1.music.126.net/Lk_qYbeufgwghN-0meUCxA==/109951166552767425.jpg",
        targetId: 1889480512,
        targetType: 1,
        titleColor: "red",
        typeTitle: "新歌首发",
      },
      {
        imageUrl: "http://p1.music.126.net/lIWjk6p1v4GpT9AxAlo27Q==/109951166554561402.jpg",
        targetId: 1888874634,
        targetType: 1,
        titleColor: "red",
        typeTitle: "新歌首发",
      },
    ]
  },
  indicator: {
    type: Object,
    default: ()=>{}
  }
});

const onClickSwiperItem = (item: bannerType) => {}
const onClickIndicator = (item: bannerType) => {}

</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  // height: 120px;
  // max-height: 120px;
  position: relative;
  overflow: hidden;
  .swiper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    transform: translateX(-375px);
    .swiper-item {
      width: 100%;
      flex-shrink: 0;
      img {
        width: 100%;
      }
    }
  }
}
</style>

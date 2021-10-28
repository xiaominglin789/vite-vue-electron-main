<template>
  <div class="com banners" @mouseenter="onMouseenterToBanner" @mouseleave="onMouseenterFromBanner">
    <!-- image容器 -->
    <transition name="fade">
      <div class="wrap" @click="onClickWrap">
        <img :src="activeImage" />
      </div>
    </transition>
    <!-- 指示器 -->
    <ul class="indicators">
      <li 
        v-for="(item, index) in banners" :key="item.typeTitle" @click="onClickIndicator(index)"
        :class="['indicator-dot', activeIndex==index?'active':'']" ></li>
    </ul>
    <!-- 控制器 -->
    <button class="btn btn-prev" @click="onPrev">
      <i class="iconfont icon-back"></i>
    </button>
    <button class="btn btn-next" @click="onNext">
      <i class="iconfont icon-forward"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { PropType } from "vue";

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

type bannerConfigType = {
  /** 切换间隔时间 */
  time: number
  /** 开始切换的延迟时间 */
  delay: number
  /** 是否循环切换 */
  loop: boolean
}

const bannerTypeRoutePath = {
  [0]: "",
  [1]: "",
  [10]: "",
  [3000]: "",
  [1005]: "",
}

const props = defineProps({
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
  config: {
    type: Object as PropType<bannerConfigType>,
    default: {
      time: 5000,
      delay: 1000,
      loop: true
    }
  },
  indicator: {
    type: Object,
    default: () =>{}
  }
});

const activeIndex = ref(0);
const activeImage = ref("");
const bannerLen = ref(0);
const bannerPlayStatus = ref(true);
let intervalTimer: any = null;

onMounted(() => {
  bannerLen.value = props.banners.length;
  activeImage.value = props.banners[activeIndex.value].imageUrl;
  //
  props.config.delay && setTimeout(()=>{}, props.config.delay);
  intervalTimer = setInterval(() => {
    bannerPlayStatus.value == true && onNext();
    if (!props.config.loop && activeIndex.value === bannerLen.value - 1) {
      console.log("xxxx");
      clearInterval(intervalTimer);
    }
  }, props.config.time);
})

onUnmounted(() => {
  intervalTimer = null;
})

const onMouseenterToBanner = () => {
  bannerPlayStatus.value = false;
}

const onMouseenterFromBanner = () => {
  bannerPlayStatus.value = true;
}

/** 点击item */
const onClickWrap = () => {
  console.log("点击: ", {
    activeIndex: activeIndex.value,
    activeImage: activeImage.value
  });
}

/** 点击指示器 */
const onClickIndicator = (idx: number) => {
  activeIndex.value = idx;
  checkActiveIndex(idx);
}

/** 上一个 */
const onPrev = () => {
  activeIndex.value -= 1;
  checkActiveIndex(activeIndex.value);
}

/** 下一个 */
const onNext = () => {
  activeIndex.value += 1;
  checkActiveIndex(activeIndex.value);
}

/** 检测激活的index */
const checkActiveIndex = (idx: number) => {
  if (idx < 0) {
    activeIndex.value = bannerLen.value - 1;
  }
  if (idx > bannerLen.value - 1) {
    activeIndex.value = 0;
  }
  activeImage.value = props.banners[activeIndex.value].imageUrl;
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.banners {
  width: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  .wrap {
    width: 100%;
    cursor: pointer;
    img {
      min-height: 150px;
      width: 100%;
    }
  }
  .btn {
    outline: none;
    border: none;
    width: 48px;
    height: 64px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    background-color: rgba($color: #000000, $alpha: .2);
    color: $a-bg-color-hover;
    cursor: pointer;
    &.btn-prev {
      left: 0;
    }
    &.btn-next {
      right: 0;
    }
  }
  /** 指示器 */
  .indicators {
    position: absolute;
    left: 50%;
    bottom: 1%;
    transform: translateX(-50%);
    z-index: 998;
    width: 100%;
    height: 20px;
    line-height: 20px;
    background-color: rgba($color: #000000, $alpha: .1);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 56px;
    .indicator-dot {
      content: "";
      width: 18px;
      height: 10px;
      border: 1px solid $a-bg-color-hover;
      background-color: $a-bg-color-active;
      margin: 0 4px;
      border-radius: 6px;
      cursor: pointer;
    }
    .indicator-dot.active {
      background-color: $a-text-color-active;
      transition: all .3 ease-in-out;
    }
  }
}

</style>

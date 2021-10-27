<template>
  <div class="com playlist" @click="onClick"  >
    <img 
      :src="value.coverImgUrl" 
      @mouseenter="showRemark(true)"
      @mouseleave="showRemark(false)">
    <p class="title">{{ value.name }}</p>
    <!-- remark -->
    <div v-show="remarkStatus" class="remark">
      <p class="play-count">
        <i class="iconfont icon-listen"></i> {{ value.playCount }}
      </p>
      <i class="tip iconfont icon-play-start" style="border-radius: 50%; background-color: #c3c3c3;"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import type { playlistType } from "../../utils/types/playlist";


const remarkStatus = ref(false);

defineProps({
  value: {
    type: Object as PropType<playlistType>,
    default: () => {}
  }
})

const onClick = () => {
  console.log("xasdsa");
}

const showRemark = (show: boolean) => {
  remarkStatus.value = show;
  console.log(111);
  
}

</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.playlist {
  width: 150px;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    max-height: 150px;
  }
  .title {
    width: 100%;
    font-size: 14px;
    text-align: left;
    @include ellipsis(2);
  }
  .title:hover {
    opacity: .9;
  }
  .remark {
    transition-duration: 1.2s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 150px;
    opacity: 1;
    .play-count {
      width: 100%;
      height: 24px;
      line-height: 24px;
      text-align: right;
      background-color: rgba($color: #000000, $alpha: .3);
      color: #fff;
      padding: 0 6px;
    }
    .tip {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 30px;
    }
  }
}
</style>

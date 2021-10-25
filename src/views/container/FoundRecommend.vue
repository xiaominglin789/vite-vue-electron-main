<template>
  <div class="page found-recommend">
    <div class="banners">
      <com-swiper></com-swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import ComSwiper from "../../components/public/ComSwiper.vue";

</script>

<style lang="scss" scoped>
.found-recommend {
  width: 100%;
  position: relative;
  .banners {
    width: 100%;
    display: flex;
    justify-content: right;
    > .wrap {
      width: 50%;
    }
  }
}
</style>

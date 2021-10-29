<template>
  <div class="com tabs" :style="{'width':width}">
    <div :class="['content', child.id==foundTabActive?'active':'']" v-for="child in tabs" :key="child.id" @click="onClickTab(child)">
      <p class="title">{{ child.title }}</p>
      <p class="icon">
        <i :class="['iconfont', child.icon?child.icon:'']"></i>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import type { FoundTabType } from "../../utils/types/tab";
import router from "../../router";

const foundTabActive = ref(1);

defineProps({
  tabs: {
    type: Array as PropType<Array<FoundTabType>>,
    default: () => [],
  },
  width: {
    type: String,
    default: "100%",
  }
});

const onClickTab = (child: FoundTabType) => {
  console.log("点击了id: ", child.id);

  // 路由跳转
  if (child.to) {
    router.push(child.to);
  }
}

</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.tabs {
  width: 100%;
  height: 36px;
  margin: 0 auto;
  @include flex-center;
  border-bottom: 1px solid $a-bg-color-active;
  .content {
    width: 100px;
    height: 36px;
    line-height: 36px;
    @include ellipsis;
    position: relative;
    cursor: pointer;
    margin: 0 10px;
    text-align: center;
  }
  .content.active {
    color: $a-text-color-active;
  }
  .content.active::after {
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    content: "";
    left: 0;
    bottom: 0;
    background-color: $a-text-color-active;
    transition: all .3s ease-in-out;
  }
}
</style>

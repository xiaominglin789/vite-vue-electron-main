<template>
  <div class="com route" >
    <button ref="btnPrev" disabled :class="{'active':hasPrevRouteRecord}" @click="onClickLeft">
      <i class="iconfont icon-back"></i>
    </button>
    <i class="line"></i>
    <button ref="btnNext" disabled :class="{'active':hasNextRouteRecord}" @click="onClickRigth">
      <i class="iconfont icon-forward"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { useStore } from "../../store";

const router = useRouter();
const store = useStore();
const btnPrev = ref<Element>();
const btnNext = ref<Element>();

const currentRoute = computed(() => store.state.routeRecord.currentRoute);
const routeRecords = computed(() => store.state.routeRecord.routeRecords);

onMounted(() => {
  console.log("路由记录: ", routeRecords.value);
  console.log(btnNext.value);
})

onBeforeRouteUpdate((from, to) => {
  console.log(currentRoute.value);
  console.log("路由变化了");
  console.log("旧路由：", to.fullPath);
  console.log("当前路由：", from.fullPath);
  store.dispatch('routeRecord/addNewRoutes', from.fullPath);
  store.dispatch('routeRecord/setCurrentRoute', from.fullPath);
  console.log(currentRoute.value);
  console.log("路由记录: ", routeRecords.value);
})

/** 有下一项路由 */
const hasNextRouteRecord = computed(() => {
  console.log(routeRecords.value.indexOf(currentRoute.value));
  if (routeRecords.value.indexOf(currentRoute.value) < routeRecords.value.length-1) {
    btnNext.value?.removeAttribute("disabled");
    return true;
  } else {
    btnNext.value?.setAttribute("disabled", "");
    return false;
  }
})
/** 有上一项路由 */
const hasPrevRouteRecord = computed(() => {
  console.log(routeRecords.value.indexOf(currentRoute.value));
  if (routeRecords.value.indexOf(currentRoute.value) > 0) {
    btnPrev.value?.removeAttribute("disabled");
    return true;
  } else {
    btnPrev.value?.setAttribute("disabled", "");
    return false;
  }
})

const onClickLeft = () => {
  router.back();
}
const onClickRigth = () => {
  router.forward();
}

</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.route {
  width: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid $text-color-link;
  border-radius: 4px;
  button {
    border: none;
    outline: none;
    width: 36px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .5;
    background-color: $a-text-color-active;
    position: relative;
    &:deep(.iconfont) {
      color: rgb(20, 24, 236);
      opacity: 1;
    }
  }
  button:disabled {
    &:deep(.iconfont) {
      color: #fff;
      opacity: 1;
      pointer-events: none;
    }
  }
  button:active {
    opacity: 1;
  }
  button.active {
    background-color: rgb(253, 47, 57);
  }
  .line {
    width: 1px;
    height: 100%;
    background-color: grey;
  }
}
</style>

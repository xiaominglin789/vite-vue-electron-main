<template>
  <div class="com route" >
    <button :class="{'active':leftActive}" @click="onClickLeft">
      <i class="iconfont icon-back"></i>
    </button>
    <i class="line"></i>
    <button :class="{'active2':rightActive}" @click="onClickRigth">
      <i class="iconfont icon-forward"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onBeforeRouteLeave,onBeforeRouteUpdate, useRouter } from "vue-router";

const router = useRouter();
const leftActive = ref(false);
const rightActive = ref(false);
const appRouters = ref(Array<string>());

onBeforeRouteLeave(() => {
  console.log("leave...");
})

onBeforeRouteUpdate((from, to) => {
  
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
    &:deep(.iconfont) {
      color: #fff;
    }
  }
  button:active {
    opacity: 1;
  }
  button.active {
    background-color: blue;
  }
  .active2 {
    background-color: rgb(0, 255, 0);
  }
  .line {
    width: 1px;
    height: 100%;
    background-color: grey;
  }
}
</style>

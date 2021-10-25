<template>
  <div class="com route" >
    <button @click="onClickLeft">
      <i class="iconfont icon-back"></i>
    </button>
    <i class="line"></i>
    <button @click="onClickRigth">
      <i class="iconfont icon-forward"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const onClickLeft = () => {
  router.back();
}
const onClickRigth = () => {
  router.forward();
}
</script>

<style lang="scss" scoped>
.route {
  width: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
  border-radius: 4px;
  button {
    border: none;
    outline: none;
    width: 36px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .8;
    background-color: #e3e3e3;
  }
  button:active {
    opacity: 1;
  }
  .line {
    width: 1px;
    height: 100%;
    background-color: grey;
  }
}
</style>

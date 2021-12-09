<template>
  <h3 style="position: fixed; padding-left: 50px; text-decoration: underline; z-index: 1000;" v-if="appEnv">环境: {{ appEnv }}</h3>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: 'App',
  setup() {
    const appEnv = ref("");
    onMounted(() => {
      appEnv.value = import.meta.env.VITE_APP_ENV==="development"?"dev":"prod";
      console.log("当前环境：", appEnv.value);
    })

    return {
      appEnv
    }
  }
})
</script>

<style>
.page {
  width: 100%;
}
.com {
  width: 100%;
}
</style>

<template>
  <div class="com test">
    <h3>hello...</h3>
    <p>{{ state.uname }}</p>
    <p>
      <span @click="count--">&nbsp-&nbsp</span>
      <span>{{count}}</span>
      <span @click="count++">&nbsp+&nbsp</span>
    </p>
  </div>  
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";

const count = ref(0);
const state = reactive({
  uname: "vite2-vue3-electron12..."
});

setTimeout(() => {
  state.uname = "13570584409"
}, 3000);
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

<template>
  <div class="page search">
    <div class="search-key">
      <p>搜索: <span class="key">\"{{ keyword }}\"</span></p>
    </div>
    <!-- tab -->
    <div class="search-tabs>">
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted, ref, inject } from "vue";
import { useRoute } from "vue-router";
import { searchByKeyWord } from "../../api/search";

const reload: Function = inject("reload") as Function;
const route = useRoute();
const keyword = ref("");

onMounted(async () => {
  keyword.value = String(route.query['keyword']?route.query['keyword']:"");

  if (keyword.value) { 
    const res = await searchByKeyWord(keyword.value);
    console.log(res);
    
  }
})

watch(()=>route.query, () => {
  keyword.value = String(route.query['keyword']?route.query['keyword']:"");
  route.query['keyword'] = keyword.value;
  reload();
})
</script>

<style lang="scss" scoped>
.search {
  .search-key {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    p {
      .key {
        color: rgb(39, 39, 248);
      }
    }
  }
}
</style>

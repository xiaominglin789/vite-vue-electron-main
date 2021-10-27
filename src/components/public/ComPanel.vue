<template>
  <div :class="['com panel', panelClass]">
    <div v-if="showHeader" class="header">
      <span class="title">{{ title }}</span>
      <div class="tool">
        <slot name="tool"></slot>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  title: {
    type: String,
    default: "",
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  panelClass: {
    type: String,
    default: true,
  }
});

</script>

<style lang="scss" scoped>
.panel {
  width: 100%;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
  }
  .content {
    width: 100%;
  }
}
</style>

<template>
  <div class="com menu-temp">
    <h3 class="title">{{title}}</h3>
    <ul class="content">
      <li :class="['content-li', activeTitle==child.title?'active':'']" v-for="(child, index) in menu" :key="index" @click="onChangeMenu(child.title)">
        <router-link :to="child.to"><i :class="['iconfont', child.icon]"></i> {{ child.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { MenuType } from "../../utils/types/menu";

defineProps({
  title: {
    type: String,
    default: ""
  },
  menu: {
    type: Array as PropType<Array<MenuType>>,
    default: () => [
      {
        title: "测试",
        to: "/",
        icon: "x-xxxx"
      },
      {
        title: "测试2",
        to: "/",
        icon: "x-xxx2"
      }
    ],
  },
  activeTitle: {
    type: String,
    default: ""
  }
});

const emit = defineEmits([
  'onChangeMenu'
]);

/** 切换菜单 */
const onChangeMenu = (title: string) => {
  emit('onChangeMenu', title);
}

</script>

<style lang="scss" scoped>
@import "../../assets/style/import.scss";

.menu-temp {
  width: 100%;
  box-sizing: border-box;
  .title {
    color: $text-color-grey;
  }

  li {
    padding: 4px 0;
    a {
      color: $text-color-link;
      text-decoration: none;
      font-size: 14px;
    }
  }
  li:hover {
    background-color: $a-bg-color-hover;
  }
  li.active {
    background-color: $a-bg-color-active;
    a {
      color: $a-text-color-active; 
    }
  }
}
</style>

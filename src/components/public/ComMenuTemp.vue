<template>
  <div class="com menu-temp">
    <!-- <slot name="menu-title-slot">
      <h3 class="title" @click="onClick">{{title}}</h3>
    </slot> -->
    <h3 class="title" @click="onClick">{{title}}</h3>
    <ul class="content">
      <li class="content-li" v-for="(child, index) in menu" :key="index">
        <router-link :to="child.to">{{ child.title }}</router-link>
      </li>
      <li class="content-li">
        <router-link to=""></router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import type { MenuType } from "../../utils/types/menu";

const activeIndex = ref(1);

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
  }
});

const emit = defineEmits([
  'my-click'
]);

const onClick = () => {
  emit('my-click');
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

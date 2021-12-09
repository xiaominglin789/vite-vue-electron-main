import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";
import RootStateTypes from "./interface";
import AllStateTypes from "./interface";
import RouteRecordMoudel from "./moudels/route-record/record-route";

export const store = createStore({
  modules: {
    routeRecord: RouteRecordMoudel
  }
});

// vuex强类型支持三部： 
// 1.定义`InjectionKey`
// 2.app安装时提供`InjectionKey`
// 3.使用时,传递`InjectionKey`给`useStore`
// 简化每次使用`useStore`都要传递key,使用自定义的`useStore`方法即可
export const key: InjectionKey<Store<RootStateTypes>> = Symbol();


export function useStore<T=AllStateTypes>() {
  return baseUseStore<AllStateTypes>(key);
};

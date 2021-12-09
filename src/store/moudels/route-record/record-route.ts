/** 用于记录当前app的浏览记录 */
import { Module } from "vuex";
import RootStateTypes from "../../interface";
import RecordRouteTypes from "./interface";

const RouteRecordMoudel: Module<RecordRouteTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    currentRoute: '/',
    routeRecords: ['/'],
    maxRecordLen: 10, // 自定义限制路由记录长度，避免返回的路径过长
  },
  mutations: {
    SetCurrentRoute(state, newRoute){
      state.currentRoute = newRoute;
    },
    AddNewRoutes(state, newRoute) {
      state.routeRecords.push(newRoute);
      if (state.routeRecords.length >= state.maxRecordLen) {
        state.routeRecords.shift();
      }
    },
  },
  actions: {
    setCurrentRoute({ commit, state }, newRoute) {
      commit('SetCurrentRoute', newRoute);
    },
    addNewRoutes({ commit, state }, newRoute) {
      if (!state.routeRecords.includes(newRoute)) {
        commit('AddNewRoutes', newRoute);
      }
    }
  }
}

export default RouteRecordMoudel;

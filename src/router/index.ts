import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../views/home/Home.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/container/Found.vue"),
        name: "Found",
        children: [
          {
            path: "",
            component: () => import("../views/container/FoundRecommend.vue"),
            name: "FoundRecommend",
          },
          {
            path: "playlist",
            component: () => import("../views/container/FoundPlaylists.vue"),
            name: "FoundPlaylist",
          },
          {
            path: "dj",
            component: () => import("../views/container/FoundPlaylists.vue"),
            name: "FoundDJ",
          },
          {
            path: "rank",
            component: () => import("../views/container/FoundPlaylists.vue"),
            name: "FoundRank",
          },
          {
            path: "singer",
            component: () => import("../views/container/FoundSinger.vue"),
            name: "FoundSinger",
          },
        ]
      },
      {
        path: "user-fm",
        component: () => import("../views/container/UserFM.vue"),
        name: "UserFM",
      },
      {
        path: "search",
        component: () => import("../views/container/Search.vue"),
        name: "Search"
      },
      {
        path: "playlist-detail",
        component: () => import("../views/container/PlaylistDetail.vue"),
        name: "PlaylistDetail",
      },
      {
        path: "404",
        component: () => import("../views/container/404.vue"),
        name: "404"
      }
    ]
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../views/home/Home.vue"),
    children: [
      {
        path: "",
        redirect: "/found",
      },
      {
        path: "/found",
        component: () => import("../views/container/Found.vue"),
        name: "Found",
        children: [
          {
            path: "",
            redirect: "/recommend",
          },
          {
            path: "/recommend",
            component: () => import("../views/container/FoundRecommend.vue"),
            name: "FoundRecommend",
          },
          {
            path: "/playlist",
            component: () => import("../views/container/FoundPlaylist.vue"),
            name: "FoundPlaylist",
          },
          {
            path: "/dj",
            component: () => import("../views/container/FoundPlaylist.vue"),
            name: "FoundDJ",
          },
          {
            path: "/rank",
            component: () => import("../views/container/FoundPlaylist.vue"),
            name: "FoundRank",
          },
          {
            path: "/singer",
            component: () => import("../views/container/FoundSinger.vue"),
            name: "FoundSinger",
          }
        ]
      },
      {
        path: "/user-dj",
        component: () => import("../views/container/UserDJ.vue"),
        name: "UserDJ",
      },
      {
        path: "/search",
        component: () => import("../views/container/Search.vue"),
        name: "Search"
      },
    ]
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;

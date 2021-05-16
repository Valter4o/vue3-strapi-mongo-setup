import { createRouter, createWebHistory } from "vue-router"
import home from "@/pages/Home.vue"


export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: home },
  ],
})

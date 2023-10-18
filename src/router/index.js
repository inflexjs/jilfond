import Vue from 'vue'
import VueRouter from 'vue-router'
import EmployeeSearch from "@/components/pages/EmployeeSearch.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: EmployeeSearch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/test',
    children: [
      {
        path: 'test',
        name: 'test',
        component:()=>import("../components/Test.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

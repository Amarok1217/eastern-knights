import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import HomePage from '@/views/homePage/HomePage'
import OfficialMsg from '@/views/officialMsg/OfficialMsg'
import Wiki from '@/views/wiki/Wiki'
import About from '@/views/about/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'homePage',
          name: 'homePage',
          component: HomePage
        },
        {
          path: 'officialMsg',
          name: 'officialMsg',
          component: OfficialMsg
        },
        {
          path: 'Wiki',
          name: 'wiki',
          component: Wiki
        },
        {
          path: 'about',
          name: 'about',
          component: About
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import { isPC } from '@/utils'
import Home from './views/home/Home.vue'
import HomePage from '@/views/homePage/HomePage'
import OfficialMsg from '@/views/officialMsg/OfficialMsg'
import Wiki from '@/views/wiki/Wiki'
import About from '@/views/about/About'

import WikiFigures from '@/views/wiki/modules/wikiFigures/WikiFigures'
import FigureDetail from '@/views/wiki/modules/figure/FigureDetail'

import MHome from '@/views/mobile/mHome/MHome'
import MWiki from '@/views/mobile/mWiki/MWiki'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: isPC() ? '/homePage' : 'mHome',
      children: [
        {
          path: '/homePage',
          name: 'homePage',
          component: HomePage
        },
        {
          path: '/officialMsg',
          name: 'officialMsg',
          component: OfficialMsg
        },
        {
          path: '/wiki',
          name: 'wiki',
          component: Wiki,
          redirect: 'wiki/wikiFigures',
          children: [
            {
              path: 'wikiFigures',
              name: 'wikiFigures',
              component: WikiFigures
            },
            {
              path: 'figureDetail',
              name: 'figureDetail',
              component: FigureDetail
            }
          ]
        },
        {
          path: '/about',
          name: 'about',
          component: About
        }
      ]
    },
    {
      path: '/mHome',
      name: 'mHome',
      component: MHome
    },
    {
      path: '/mWiki',
      name: 'mWiki',
      component: MWiki
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

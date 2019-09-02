import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import events from '@/components/events'//大事记
import pingtai from '@/components/pingtaiIntroduction'//平台简介
import safety from '@/components/safety'//安全保障
import wealthTeacherList from '@/components/wealthTeacherList'//财富师列表
import largeArea from '@/components/largeArea'//大区首页
import expCenterIndex from '@/components/expCenterIndex'//体验中心
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/largeArea',//大区首页
      name: 'largeArea',
      component: largeArea,
    },
    {
      path: '/expCenterIndex',//体验中心
      name: 'expCenterIndex',
      component: expCenterIndex
    },
    {
      path: '/wealthTeacherList',//财富师列表
      name: 'wealthTeacherList',
      component: wealthTeacherList
    },
    {
      path: '/events',//大事记
      name: 'events',
      component: events,
      meta: {
        title: '大事记'
      }
    },
    {
      path: '/pingtai',//平台简介
      name: 'pingtai',
      component: pingtai,
      meta: {
        title: '平台简介'
      }
    },
    {
      path: '/safety',//安全保障
      name: 'safety',
      component: safety,
      meta: {
        title: '安全保障'
      }
    },
   /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
  ]
})

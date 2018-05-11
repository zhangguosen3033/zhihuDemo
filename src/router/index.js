import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import childrenpage00 from '@/components/page0/childrenpage00'
import childrenpage01 from '@/components/page0/childrenpage01'
import page00 from '@/components/page0/page00'
import page01 from '@/components/page0/page01'
import page02 from '@/components/page0/page02'

Vue.use(Router)
//根据引入的头文件设置路由信息
export default new Router({
  routes: [{
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      path: '/',
      name: 'page00',
      component: page00
    },
    {
      path: '/childrenpage00/:id',
      name: 'childrenpage00',
      component: childrenpage00
    },
    {
      path: '/childrenpage01/:id',
      name: 'childrenpage01',
      component: childrenpage01
    },
    {
      path: '/page00',
      name: 'page00',
      component: page00,
    },
    {
      path: '/page01',
      name: 'page01',
      component: page01
    },
    {
      path: '/page02',
      name: 'page02',
      component: page02
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 导入组件
import Test from '@/view/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 路由参数 :testName
      path: '/test/:testId/name/:testName',
      name: 'HelloWorld',
      component: Test
    }
  ]
})

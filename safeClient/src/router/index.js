import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BackOffice from '@/components/admin/BackOffice'
import Login from '@/components/admin/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'backOffice',
      component: Login
    },
    {
      path: '/admin/loged',
      name: 'backOffice',
      component: BackOffice
    }
  ]
})

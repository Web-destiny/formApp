import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Thanks from "../components/Thanks";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    }
  ]
})

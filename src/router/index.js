import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    // {这些都是需要后台获取的
    //   path:'/',
    //   component:()=> import('@/views/Main.vue'),
    //   children:[
    //     {
    //       path:'/',
    //       name:'home',
    //       component:()=> import('@/views/Home/Home.vue'),
    //     },
    //     {
    //       path:'/video',
    //       name:'video',
    //       component:()=> import('@/views/VideoManage/VideoManage.vue'),
    //     },
    //     {
    //       path:'/user',
    //       name:'user',
    //       component:()=> import('@/views/UserManage/UserManage.vue'),
    //     },
    //     {
    //       path:'/page1',
    //       name:'page1',
    //       component:()=> import('@/views/Other/PageOne.vue'),
    //     },
    //     {
    //       path:'/page2',
    //       name:'page2',
    //       component:()=> import('@/views/Other/PageTwo.vue'),
    //     },
    //   ]

    // },
    {
      path:'/login',
      name:'login',
      component:() => import('@/views/Login/Login.vue')
    }
 
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next) =>{
  if(to.path === '/login') return next()

  var tokenStr =  window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next();
  
})
export default router

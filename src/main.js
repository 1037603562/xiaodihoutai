import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//全局配置
//项目初始化文件
import './assets/scss/reset.scss'

import http from '@/api/config'

import './mock'

//第三方包
//elementUI相关引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App),
  created () {//vue实例化之前执行 即页面刷新时执行
    store.commit('addMenu',router);
  },
}).$mount('#app')

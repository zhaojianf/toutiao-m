import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
import store from './store'
// 引入less
import '@/style/index.less'
// 动态设置rem
import 'amfe-flexible'
// 引入全部组件
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

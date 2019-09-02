// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import utils from '../static/js/utils.js'
import $ from 'jquery'
Vue.config.productionTip = false
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import wx from 'weixin-js-sdk';
let Base64 = require('js-base64').Base64;
Vue.use(MintUI)
Vue.use(utils);//使用方法this.formatDuring(currentTime);
import 'swiper/dist/css/swiper.min.css';
/* eslint-disable no-new */
import BaiduMap from 'vue-baidu-map'
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'QsEstX0CPvqbyNS4pi2KjzTpA8kLuflf'
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

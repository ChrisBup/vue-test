// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// https://www.youtube.com/watch?v=z6hQqgvGI4Y

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import Test from './components/Test'

import './assets/css/style.css'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/test', component: Test}
  ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <nav>
        <ul>
          <li><router-link to="/">Users</router-link></li>
          <li><router-link to="/test">Test</router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>  
  `,
}).$mount('#app')

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _09514a33 = () => interopDefault(import('../pages/accodianEx.vue' /* webpackChunkName: "pages/accodianEx" */))
const _0c40e2fb = () => interopDefault(import('../pages/boardView.vue' /* webpackChunkName: "pages/boardView" */))
const _3c47d010 = () => interopDefault(import('../pages/modalEx.vue' /* webpackChunkName: "pages/modalEx" */))
const _7109471e = () => interopDefault(import('../pages/modalTween.vue' /* webpackChunkName: "pages/modalTween" */))
const _2766b2ae = () => interopDefault(import('../pages/presentPrice.vue' /* webpackChunkName: "pages/presentPrice" */))
const _5e0b0c5f = () => interopDefault(import('../pages/quickIssueTip.vue' /* webpackChunkName: "pages/quickIssueTip" */))
const _023fc100 = () => interopDefault(import('../pages/racingChart.vue' /* webpackChunkName: "pages/racingChart" */))
const _45d00862 = () => interopDefault(import('../pages/racingChart2.vue' /* webpackChunkName: "pages/racingChart2" */))
const _45de1fe3 = () => interopDefault(import('../pages/racingChart3.vue' /* webpackChunkName: "pages/racingChart3" */))
const _e679b09a = () => interopDefault(import('../pages/todayIssueTip.vue' /* webpackChunkName: "pages/todayIssueTip" */))
const _4c8fb071 = () => interopDefault(import('../pages/trading.vue' /* webpackChunkName: "pages/trading" */))
const _166d7cbc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/HKTV/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accodianEx",
    component: _09514a33,
    name: "accodianEx"
  }, {
    path: "/boardView",
    component: _0c40e2fb,
    name: "boardView"
  }, {
    path: "/modalEx",
    component: _3c47d010,
    name: "modalEx"
  }, {
    path: "/modalTween",
    component: _7109471e,
    name: "modalTween"
  }, {
    path: "/presentPrice",
    component: _2766b2ae,
    name: "presentPrice"
  }, {
    path: "/quickIssueTip",
    component: _5e0b0c5f,
    name: "quickIssueTip"
  }, {
    path: "/racingChart",
    component: _023fc100,
    name: "racingChart"
  }, {
    path: "/racingChart2",
    component: _45d00862,
    name: "racingChart2"
  }, {
    path: "/racingChart3",
    component: _45de1fe3,
    name: "racingChart3"
  }, {
    path: "/todayIssueTip",
    component: _e679b09a,
    name: "todayIssueTip"
  }, {
    path: "/trading",
    component: _4c8fb071,
    name: "trading"
  }, {
    path: "/",
    component: _166d7cbc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

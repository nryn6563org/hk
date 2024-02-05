import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _09514a33 = () => interopDefault(import('../pages/accodianEx.vue' /* webpackChunkName: "pages/accodianEx" */))
const _3c47d010 = () => interopDefault(import('../pages/modalEx.vue' /* webpackChunkName: "pages/modalEx" */))
const _7109471e = () => interopDefault(import('../pages/modalTween.vue' /* webpackChunkName: "pages/modalTween" */))
const _65f9de10 = () => interopDefault(import('../pages/sub.vue' /* webpackChunkName: "pages/sub" */))
const _166d7cbc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/%3Crepository-name%3E/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accodianEx",
    component: _09514a33,
    name: "accodianEx"
  }, {
    path: "/modalEx",
    component: _3c47d010,
    name: "modalEx"
  }, {
    path: "/modalTween",
    component: _7109471e,
    name: "modalTween"
  }, {
    path: "/sub",
    component: _65f9de10,
    name: "sub"
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

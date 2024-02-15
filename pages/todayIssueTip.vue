<template>
  <div></div>
</template>
<script>
export default {
  layout: 'SubLayout',

  asyncData({ store }) {
    // 페이지 로딩 시 헤더 타이틀을 변경
    store.commit('setPageTitle', '페이지 타이틀')
    store.commit('setHeaderClass', '녀ㅠ')
    return {}
  }
}
</script>
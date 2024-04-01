<template>
  <div id="wrap">
    <!-- <SubHeader></SubHeader> -->
    <Nuxt />
    <DefalutFooter />
  </div>
</template>

<script>
// import SubHeader from '~/components/SubHeader'
import DefalutFooter from '@/components/DefalutFooter.vue'

export default {
  name: 'SubLayout',
  components: {
    DefalutFooter
  },
  head() {
    const viewportWidth = window.screen.width
    let newContent = ''

    // 예를 들어, 특정 가로 폭 이하에서만 스케일을 조절하고자 한다면
    if (viewportWidth > 600) {
      newContent = 'width=device-width, initial-scale=1.0, user-scalable=no'
    } else if (viewportWidth <= 600) {
      newContent = 'width=360px, user-scalable=no'
    }

    return {
      meta: [
        {
          name: 'viewport',
          content: newContent
        }
      ]
    }
  }
}
</script>

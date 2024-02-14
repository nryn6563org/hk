<template>
  <div id="wrap">
    <SubHeader></SubHeader>
    <Nuxt />
  </div>
</template>

<script>
import SubHeader from '~/components/SubHeader'
export default {
  name: 'SubLayout',
  components: {
    SubHeader
  }
}
</script>

<template>
  <section>
    <div class="sec_tit">
      <strong>AI 신호캐치 수익 현황</strong>
      <span>실시간 AI 분석으로 전 종목의 매매타이밍을 캐치해 드립니다. </span>
    </div>
    <!-- // -->

    <div class="signalCatch">
      <ListSwipe />
      <!-- // -->

      <BannerList />
      <!-- // -->
    </div>
  </section>
  <!-- 수익현황 -->
</template>

<script>
import ListSwipe from '~/components/web/ListSwipe.vue'
import BannerList from '~/components/web/BannerList.vue'

export default {
  components: {
    ListSwipe,
    BannerList
  }
}
</script>

<style scoped>
section{
  @apply pb-[25px] border-b-[1px] border-[#ebebeb]
}
.signalCatch{
  @apply pt-5 w-full flex justify-between
}
</style>

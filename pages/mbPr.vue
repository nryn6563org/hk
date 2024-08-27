<template>
  <div id="wrap">
    <iframe src="https://img.wowtv.co.kr/thinkpool/hkwowtv_ai_catch_header_m.html" frameborder="0" class="w-full h-[185px]"></iframe>
    <!-- header -->
    <div class="h-0"></div>
    <TopIssue />
    <!-- section -->

    <TodayIssue />
    <!-- section -->

    <FavSignal />
    <!-- section -->

    <CatchBnr />
    <!-- section -->

    <SchCatch />
    <!-- section -->

    <section class="p-[20px_20px_40px]">
      <a href="#"><img src="~/assets/img/pr/bnr5.png" alt="정기결제 배너"></a>
    </section>
    <!-- section -->

    <iframe src="https://img.wowtv.co.kr/thinkpool/hkwowtv_ai_catch_footer_m.html" frameborder="0" class="w-full h-[160px]"></iframe>
    <!-- footer -->
  </div>
</template>

<script>
import TopIssue from '~/components/Promotion/TopIssue.vue'
import TodayIssue from '~/components/Promotion/TodayIssue.vue'
import FavSignal from '~/components/Promotion/FavSignal.vue'
import CatchBnr from '~/components/Promotion/CatchBnr.vue'
import SchCatch from '~/components/Promotion/SchCatch.vue'

export default {
  components: {
    TopIssue,
    TodayIssue,
    FavSignal,
    CatchBnr,
    SchCatch
  }
}
</script>

<style scoped>
@import "~/assets/css/pr/pr.css";
</style>
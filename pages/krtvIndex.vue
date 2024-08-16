<template>
  <div id="web">
    <WHeader />

    <div id="webContainer">
      <div id="content" class="main">
        <Catch />
        <SignalList />

        <Alarm />

        <section>
          <div class="sec_tit">
            <strong>AI캐치 신청하기</strong>
            <span>주식창 앱에서 알고리즘 AI 캐치를 신청하세요.</span>
          </div>
          <!-- tit -->

          <div class="aplyCatch">
            <div class="appInstall">
              <div>
                <strong>주식창 앱 설치</strong>
                <img src="~/assets/img/web/app.png" alt="주식창앱" width="104">
                <img src="~/assets/img/web/QR.png" alt="QR코드" width="104">
              </div>

              <div>
                <strong>주식창 사이트</strong>
                <a href="https://sw.wowtv.co.kr/" target="_blank">https://sw.wowtv.co.kr/</a>
              </div>
            </div>
            <!--  -->
            <div class="flow">
              <img src="~/assets/img/web/aply.png" alt="앱설치 순서" width="919">
            </div>
            <!--  -->
          </div>
        </section>
        <!-- 신청하기 -->
      </div>
    </div>
    <!-- container -->
    <WFooter />
  </div>
</template>

<script>
import WHeader from '~/components/web/WHeader.vue'
import WFooter from '~/components/web/WFooter.vue'
import Catch from '~/components/web/Catch.vue'
import SignalList from '~/components/web/SignalList.vue'
import Alarm from '~/components/web/SignalAlarm.vue'

export default {
  components: {
    WHeader,
    WFooter,
    Catch,
    SignalList,
    Alarm
  }
}
</script>

<style scoped>
@import "~/assets/css/web.css";
@import "~/assets/css/web/catch.css";
</style>

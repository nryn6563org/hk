<template>
  <div class="timingAlarm">
    <div class="txt">
      <div class="tit">
        <em>딱! 좋은 종목,</em>
        <span>정확한! 매수 타이밍 알림</span>
      </div>
      <!-- // -->

      <div class="con">
        <span> 세상에서 가장 편한 <br />주식 투자 서비스 </span>
      </div>
      <!-- // -->
    </div>
    <div class="timingList swiper">
      <div class="list swiper-wrapper">
        <div class="swiper-slide">
          <div class="txt">
            <em>11.22</em>
            <span>삼성전자가나다라마바사</span>
          </div>
          <!-- txt -->
          <div class="per">+115.78% 달성</div>
          <!-- per -->
        </div>
        <!-- list 항목 -->

        <div class="swiper-slide">
          <div class="txt">
            <em>11.22</em>
            <span>삼성전자가나다라마바사</span>
          </div>
          <!-- txt -->
          <div class="per">+115.78% 달성</div>
          <!-- per -->
        </div>
        <!-- list 항목 -->

        <div class="swiper-slide">
          <div class="txt">
            <em>11.22</em>
            <span>삼성전자가나다라마바사</span>
          </div>
          <!-- txt -->
          <div class="per">+115.78% 달성</div>
          <!-- per -->
        </div>
        <!-- list 항목 -->

        <div class="swiper-slide">
          <div class="txt">
            <em>11.22</em>
            <span>삼성전자가나다라마바사</span>
          </div>
          <!-- txt -->
          <div class="per">+115.78% 달성</div>
          <!-- per -->
        </div>
        <!-- list 항목 -->

        <div class="swiper-slide">
          <div class="txt">
            <em>11.22</em>
            <span>삼성전자가나다라마바사</span>
          </div>
          <!-- txt -->
          <div class="per">+115.78% 달성</div>
          <!-- per -->
        </div>
        <!-- list 항목 -->

        <div class="swiper-slide">
          <div class="txt">
            <em>11.22</em>
            <span>삼성전자가나다라마바사</span>
          </div>
          <!-- txt -->
          <div class="per">+115.78% 달성</div>
          <!-- per -->
        </div>
        <!-- list 항목 -->

        <div class="swiper-slide">
          <div class="txt">
            <em>11.22</em>
            <span>삼성전자가나다라마바사</span>
          </div>
          <!-- txt -->
          <div class="per">+115.78% 달성</div>
          <!-- per -->
        </div>
        <!-- list 항목 -->

        <div class="swiper-slide">
          <div class="txt">
            <em>11.22</em>
            <span>삼성전자가나다라마바사</span>
          </div>
          <!-- txt -->
          <div class="per">+115.78% 달성</div>
          <!-- per -->
        </div>
        <!-- list 항목 -->
      </div>
    </div>
    <!-- timingList -->

    <button>가입하기 ></button>
  </div>
</template>
<script>
export default {
  mounted() {
    const script = document.createElement('script')
    script.src =
      'https://cdn.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const swiper = new Swiper('.timingList', {
        direction: 'vertical',
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: false
      }).mount()
      //
    }
  }
}
</script>
<style>
@import '~/assets/css/timing.css';
</style>

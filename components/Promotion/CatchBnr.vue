<template>
  <section class="w-catch">
    <div class="sec_tit">
      <strong>왜 AI캐치는 다른가?</strong>
      <span>
        <em>AI의 대표 알고리즘</em>으로 <br>투자고수와 대결한 바로 그 솔루션!!
      </span>
    </div>
    <!-- sec_tit -->

    <div class="bnrLst">
      <div class="swiper lstw">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="top">
              <strong class="pt-6"><em>SBS세기의 대결!</em>  AI vs 인간에서<br>AI가 매매했던 바로 그 알고리즘!!</strong>
              <span class="pt-4">대한민국 대표<br>AI주식매매 알고리즘</span>
            </div>
            <!-- top -->

            <div class="bnr-img">
              <img src="~/assets/img/pr/bnr2.png" alt="배너">
            </div>
            <!-- bnr-img -->
          </div>
          <!-- slide -->

          <div class="swiper-slide">
            <div class="top">
              <strong class="pt-10"><em>검증된 AI</em>분석 기술</strong>
              <span class="pt-7">적중률과 수익률로<br>검증된 AI매매신호 시스템이니까</span>
            </div>
            <!-- top -->

            <div class="bnr-img">
              <img src="~/assets/img/pr/bnr3.png" alt="배너">
            </div>
            <!-- bnr-img -->
          </div>
          <!-- slide -->

          <div class="swiper-slide">
            <div class="top">
              <strong class="pt-10"><em>전종목 신호</em> 포착</strong>
              <span class="pt-7">모든종목에 대해 <br>최적의 매매 타이밍을 알려주니까</span>
            </div>
            <!-- top -->

            <div class="bnr-img">
              <img src="~/assets/img/pr/bnr4.png" alt="배너">
            </div>
            <!-- bnr-img -->
          </div>
          <!-- slide -->
        </div>
        <!-- wrapper -->

        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
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
      const swiperBnrLst = new Swiper('.lstw', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }).mount()
      //
    }
  }
}
</script>

<style>
@import "~/assets/css/pr/catchBnr.css";
</style>
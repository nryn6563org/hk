<template>
  <div class="bnr">
    <div class="swiper Sbnr">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="top pt-[25px]">
            <strong>
              <em>SBS세기의 대결!</em> AI vs 인간에서 <br />
              AI가 매매했던 바로 그 알고리즘!!
            </strong>
            <span>
              대한민국 대표 <br />
              AI주식매매 알고리즘
            </span>
          </div>
          <!--  -->
          <div class="bnrImg">
            <img src="~/assets/img/web/bnr1.png" alt="배너이미지" />
          </div>
        </div>
        <!--  -->

        <div class="swiper-slide">
          <div class="top pt-[39px]">
            <strong> <em>검증된 AI</em>분석 기술 </strong>
            <span>
              적중률과 수익률로 <br />
              검증된 AI매매신호 시스템이니까
            </span>
          </div>
          <!--  -->
          <div class="bnrImg">
            <img src="~/assets/img/web/bnr2.png" alt="배너이미지" />
          </div>
        </div>
        <!--  -->

        <div class="swiper-slide">
          <div class="top pt-[39px]">
            <strong> <em>전종목 신호</em> 포착 </strong>
            <span>
              모든종목에 대해 <br />
              최적의 매매 타이밍을 알려주니까
            </span>
          </div>
          <!--  -->
          <div class="bnrImg">
            <img src="~/assets/img/web/bnr3.png" alt="배너이미지" />
          </div>
        </div>
        <!--  -->
      </div>
      <div class="swiper-pagination"></div>
    </div>
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
      const swiperBnr = new Swiper('.Sbnr', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        hashNavigation: true
      }).mount()
      //
    }
  }
}
</script>

<style>
@import "~/assets/css/web/banner.css";
</style>

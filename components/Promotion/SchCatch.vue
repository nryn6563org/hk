<template>
  <section class="schCatch">
    <div class="sec_tit">
      <strong>주식창에서 <em>AI캐치</em> 찾기</strong>
      <span>
        대한민국 대표 <br><em>AI주식매매 알고리즘</em>
      </span>
    </div>
    <!-- sec_tit -->

    <div class="schLst">
      <div class="swiper s-lstw">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="bullet">1</div>
            <div class="txt">
              플레이스토어에서 ‘주식창’을 검색<br> 후 설치합니다.
            </div>
            <div class="img">
              <img src="~/assets/img/pr/sec0401.png" alt="aiz캐치찾기">
            </div>
          </div>
          <!-- slide -->

          <div class="swiper-slide">
            <div class="bullet">2</div>
            <div class="txt">주식창 앱에서 종목명을 <br>클릭합니다. </div>
            <div class="img">
              <img src="~/assets/img/pr/sec0402.png" alt="aiz캐치찾기">
            </div>
          </div>
          <!-- slide -->

          <div class="swiper-slide">
            <div class="bullet">3</div>
            <div class="txt">종목 페이지에서 AI캐치<br>탭을 클릭합니다. </div>
            <div class="img">
              <img src="~/assets/img/pr/sec0403.png" alt="aiz캐치찾기">
            </div>
          </div>
          <!-- slide -->

          <div class="swiper-slide">
            <div class="bullet">4</div>
            <div class="txt">AI캐치탭에서 ‘딱 좋은 종목 신호받<br>기’ 알림을 선택합니다.</div>
            <div class="img">
              <img src="~/assets/img/pr/sec0404.png" alt="aiz캐치찾기">
            </div>
          </div>
          <!-- slide -->

          <div class="swiper-slide">
            <div class="bullet">5</div>
            <div class="txt">AI캐치탭에서 이슈 캐치 탭을 클릭<br>하여 서비스를 이용하실 <br>수 있습니다. </div>
            <div class="img">
              <img src="~/assets/img/pr/sec0405.png" alt="aiz캐치찾기">
            </div>
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
      const swiperSchCatch = new Swiper('.s-lstw', {
        slidesPerView: 1,
        spaceBetween: 20,
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
@import "~/assets/css/pr/schcatch.css";
</style>
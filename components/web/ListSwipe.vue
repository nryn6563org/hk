<template>
  <div class="signal">
    <div class="swiper Slist">
      <div class="swiper-wrapper">
        <div class="swiper-slide SlistBox">
          <div class="obj">
            <em>281820</em>
            <strong>한국경제TV</strong>
          </div>
          <div class="per">+9.55%</div>
          <div class="price">
            <span class="bullet">매도가</span>
            <strong>49,900원</strong>
            <em>2024.04.09 13:00</em>
          </div>
        </div>
        <!--  -->

        <div class="swiper-slide SlistBox">
          <div class="obj">
            <em>281820</em>
            <strong>한국경제TV</strong>
          </div>
          <div class="per">+9.55%</div>
          <div class="price">
            <span class="bullet">매도가</span>
            <strong>49,900원</strong>
            <em>2024.04.09 13:00</em>
          </div>
        </div>
        <!--  -->

        <div class="swiper-slide SlistBox">
          <div class="obj">
            <em>281820</em>
            <strong>한국경제TV</strong>
          </div>
          <div class="per">+9.55%</div>
          <div class="price">
            <span class="bullet">매도가</span>
            <strong>49,900원</strong>
            <em>2024.04.09 13:00</em>
          </div>
        </div>
        <!--  -->

        <div class="swiper-slide SlistBox">
          <div class="obj">
            <em>281820</em>
            <strong>한국경제TV</strong>
          </div>
          <div class="per">+9.55%</div>
          <div class="price">
            <span class="bullet">매도가</span>
            <strong>49,900원</strong>
            <em>2024.04.09 13:00</em>
          </div>
        </div>
        <!--  -->

        <div class="swiper-slide SlistBox">
          <div class="obj">
            <em>281820</em>
            <strong>한국경제TV</strong>
          </div>
          <div class="per">+9.55%</div>
          <div class="price">
            <span class="bullet">매도가</span>
            <strong>49,900원</strong>
            <em>2024.04.09 13:00</em>
          </div>
        </div>
        <!--  -->

        <div class="swiper-slide SlistBox">
          <div class="obj">
            <em>281820</em>
            <strong>한국경제TV</strong>
          </div>
          <div class="per">+9.55%</div>
          <div class="price">
            <span class="bullet">매도가</span>
            <strong>49,900원</strong>
            <em>2024.04.09 13:00</em>
          </div>
        </div>
        <!--  -->
      </div>
      <!--  -->
    </div>

    <div class="signal-next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <rect
          x="30"
          y="30"
          width="30"
          height="30"
          rx="15"
          transform="rotate(180 30 30)"
          fill="#F5F5F5"
        />
        <path
          d="M12.5002 22.5L19.1163 15.8839C19.6045 15.3957 19.6045 14.6043 19.1163 14.1161L12.5002 7.5"
          stroke="#666666"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="signal-prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <rect width="30" height="30" rx="15" fill="#F5F5F5" />
        <path
          d="M17.4998 7.5L10.8837 14.1161C10.3955 14.6043 10.3955 15.3957 10.8837 15.8839L17.4998 22.5"
          stroke="#666666"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
  <!--  -->
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
      const swiperSignal = new Swiper('.Slist', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        slideToClickedSlide: true,
        loop: true,
        pagination: false,
        navigation: {
          nextEl: '.signal-next',
          prevEl: '.signal-prev'
        },
        hashNavigation: true
      }).mount()
      //
    }
  }
}
</script>

<style>
@import "~/assets/css/web/ListSwipe.css";
</style>

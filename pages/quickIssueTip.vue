<template>
  <div id="container">
    <section class="linear-bg quick-section-01">
      <div class="top">
        <strong>
          퇴근길 30분 투자 <br />
          손쉽게, 종목발굴
        </strong>

        <span>
          퇴근길에 5일이내 5%이상 수익날 종목을 받아 <br />
          내일 투자할 종목을 미리 검토해보세요.
        </span>
      </div>

      <div class="visual">
        <div
          class="tip tip01"
          data-aos="zoom-in"
          data-aos-delay="700"
          data-aos-duration="700"
        >
          매일 최대 5종목
        </div>

        <div
          class="tip tip02"
          data-aos="zoom-in-up"
          data-aos-delay="3000"
          data-aos-duration="700"
        >
          매일 18:00 알림!
        </div>

        <div class="img1" ref="img">
          <img
            src="~/assets/img/quickTipChart.png"
            alt="레이싱차트"
            width="260px"
          />
        </div>

        <div
          class="img2"
          data-aos="fade-right"
          data-aos-delay="1500"
          data-aos-duration="700"
        >
          <img
            src="~/assets/img/quickTipAlm.png"
            alt="이슈캐치알림"
            width="220px"
          />
        </div>

        <div
          class="img3"
          data-aos="zoom-in"
          data-aos-delay="2500"
          data-aos-duration="700"
        >
          <img
            src="~/assets/img/quickTipAlmPop.png"
            alt="주식창알림"
            width="196px"
          />
        </div>
      </div>
    </section>
    <!-- 퇴근길 30분 투자 -->

    <section class="quick-section-02" ref="quickSection02">
      <div class="top">
        <strong> 바쁜 직장인도 <br />손쉽게, 매매가능 </strong>
        <span>
          실시간 대응이 어려울 경우 18시 알림후, <br />
          <em
            >‘예약주문’을 통해 시장가 주문시 시초가 매수, <br />
            또는 목표가(+5%) 매도주문</em
          >을 넣을 수 있습니다.
        </span>
      </div>
      <!-- top -->

      <div class="almList" ref="almList">
        <div>
          <div class="bullet">실시간<br />대응</div>
          <div class="alm_txt">
            <span>장중 실시간</span>
            <span>추천종목 대응전략 알림</span>
          </div>
        </div>
        <!--  -->

        <div>
          <div class="bullet">종목<br />추천</div>
          <div class="alm_txt">
            <span>PM 18:00</span>
            <span>퇴근길 한발빠른 종목 추천</span>
          </div>
        </div>
        <!--  -->

        <div>
          <div class="bullet">시간외<br />거래</div>
          <div class="alm_txt">
            <span>PM 18:10</span>
            <span>시간외 특징주 알림</span>
          </div>
        </div>
        <!--  -->
      </div>
      <!-- 알림리스트 -->

      <div class="visual">
        <div class="img">
          <img
            src="~/assets/img/quickTipOrder.png"
            alt="예약주문 이미지"
            width="280px"
          />
        </div>

        <span>*증권사에 따라 화면 및 메뉴가 다를 수 있습니다.</span>
      </div>
    </section>
    <!-- 손쉽게 매매 가능 -->

    <section class="quick-section-03" ref="quickSection03">
      <div class="top">
        <strong> 5% 상승, 하락시! <br />AI 대응전략 제공</strong>
        <span>
          캐치 후 5%이상 상승, -5%이상 하락시, <br />5일이상 보유기간 초과시
          대응전략 발생됩니다
        </span>
      </div>
      <!-- top -->

      <div class="visual">
        <div class="img1">
          <img
            src="~/assets/img/quickTipMobile.png"
            alt="대응전략 화면예시"
            width="200px"
          />
        </div>

        <div class="img2">
          <img
            src="~/assets/img/quickTipOffcan.png"
            alt="대응전략 화면예시 팝업"
            width="190px"
          />
        </div>

        <div class="img3">
          <img
            src="~/assets/img/quickTipMobilePop.png"
            alt="대응전략 안내"
            width="281px"
          />
        </div>

        <div class="mos">
          <img
            src="~/assets/img/quickTipMouse.png"
            alt="대응전략화면 예시 마우스"
            width="32px"
          />
        </div>

        <div class="mask"></div>
      </div>
    </section>
    <!--  -->

    <section class="quick-section-04">
      <div class="title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clip-path="url(#clip0_1_4111)">
            <path
              d="M23 12.5C23 18.5751 18.0751 23.5 12 23.5C5.92487 23.5 1 18.5751 1 12.5C1 6.42487 5.92487 1.5 12 1.5C18.0751 1.5 23 6.42487 23 12.5Z"
              stroke="#8A4AF2"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M8 15.6587V9.34131C8 7.72327 9.82137 6.77496 11.1469 7.70285L15.6593 10.8615C16.7968 11.6577 16.7968 13.3423 15.6593 14.1385L11.1469 17.2972C9.82137 18.225 8 17.2767 8 15.6587Z"
              stroke="#8A4AF2"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_4111">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        영상으로 TIP확인
      </div>
      <!--  -->
      <div class="videoList">
        <div class="empty">
          <iframe
            width="260"
            height="158"
            src="https://www.youtube.com/embed/yuoQecUYfsA?si=tQfODce9sYEmXFcR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="260"
            height="158"
            src="https://www.youtube.com/embed/yuoQecUYfsA?si=tQfODce9sYEmXFcR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="guide-box">
        <div class="group">
          <strong>알림정보 정리</strong>
          <div class="txt">
            <span>매일18시, 단기급등가능성 높은 종목추천</span>
            <span>매일18:10분, 시간외거래에서 강세를 보인 종목알림</span>
            <span>장중, 한발빠른이슈 종목 대응전략 알림</span>
          </div>
        </div>

        <div class="group">
          <strong>참고해주세요</strong>
          <div class="txt">
            <span>시장변동성이 매우 크거나, 시장상황이 안좋을 경우에는 한발빠른이슈 종목이 발생하지 않을 수 있습니다.</span>
            <span>매일18:10분, 시간외거래에서 강세를 보인 종목알림은 매매알림은 제공하지 않습니다.</span>
            <span>5%이상 상승 또는 하락시 대응전략 알림은 변동성이 높은 종목일 경우 알림발송과 가격이 일치 하지 않을 수 있습니다.</span>
          </div>
        </div>
      </div>

      <!-- <div class="btn-box">
        <button>AI캐치 가입하기</button>
      </div> -->
    </section>
    <!-- 영상 -->
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  layout: 'SubLayout',
  asyncData({ store }) {
    // 페이지 로딩 시 헤더 타이틀을 변경
    store.commit('setPageTitle', '한발빠른이슈 활용TIP')
    store.commit('setHeaderClass', '')
    return {}
  },
  mounted() {
    AOS.init()

    window.addEventListener('scroll', this.handleScroll)
    // section01 animate
    setTimeout(() => {
      this.animateImage()
    }, 1000)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll) // Remove scroll event listener on component destroy
  },
  methods: {
    handleScroll() {
      const section = this.$refs.quickSection02
      const section2 = this.$refs.quickSection03
      const almListDivs = this.$refs.almList.children

      if (section.getBoundingClientRect().top <= 120) {
        Array.from(almListDivs).forEach((div, index) => {
          setTimeout(() => {
            div.classList.add('on')
          }, index * 800) // Adjust the timeout duration as needed
        })
      }

      if (section2.getBoundingClientRect().top <= 80) {
        section2.classList.add('event')
      }
    },
    animateImage() {
      // 이미지에 원하는 애니메이션 클래스 추가
      this.$refs.img.classList.add('overlay')
    }
  }
}
</script>
<style scoped>
@import "~/assets/css/quickTip.css";
</style>

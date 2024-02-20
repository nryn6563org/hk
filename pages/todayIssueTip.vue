<template>
  <div id="container">
    <section class="linear-bg today-section-01">
      <div class="top">
        <strong>
          지금! 주목 받는 이슈는? <br />
          AI가 실시간 캐치!
        </strong>

        <span>
          주목받는 이슈의 강도와 주요 종목을 즉시 확인 가능, <br />시장의 흐름에
          빠르게 대응할 수 있습니다.
        </span>
      </div>

      <div class="visual">
        <div
          class="tip"
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-duration="300"
        >
          PLAY 버튼을 누르면 <br />
          장중에 <em>이슈들이 어떻게 움직였는지</em> <br />
          다시 확인해 볼 수 있습니다.
        </div>

        <div class="img" ref="img">
          <img
            src="~/assets/img/todayTipChart.png"
            alt="레이싱차트"
            width="268px"
          />
        </div>
      </div>
    </section>
    <!-- 주목받는이슈 -->

    <section class="today-section-02">
      <div class="top">
        <strong> 이슈가 뜨는 이유? <br />AI가 핵심 정보도 함께 포착! </strong>
        <span>
          이슈가 뜨는 이유를 확인하고 <br />그 이슈에 올라탈 지, 관망할 지
          결정할 수 있습니다.
        </span>
      </div>
      <!-- top -->

      <div class="visual">
        <div class="tip" data-aos="zoom-in" data-aos-delay="1000">
          <em>이슈명을 터치</em>하면
          <em
            >이슈와 관련된 <br />
            기사</em
          >를 통해 이슈가 뜨는 이유를 <br />
          바로 확인할 수 있습니다.
        </div>
        <!-- tip -->

        <div class="img">
          <img
            src="~/assets/img/todayTipAi.png"
            alt="ai 핵심정보 포착"
            width="266px"
          />
        </div>
        <!-- img -->
      </div>
    </section>
    <!-- 이슈이유 -->

    <section class="today-section-03">
      <div class="top">
        <strong> 이슈 관련주는? <br />관련주와 주도주도 똭~! </strong>
        <span>
          실시간으로 포착된 이슈에 대해서 관련 종목과 <br />주도종목들
          <em>바로바로 확인</em>해 투자의 기회를 잡아보세요
        </span>
      </div>
      <!-- top -->

      <div class="visual">
        <div class="img">
          <img
            src="~/assets/img/ondevice.png"
            alt="바로바로 확인"
            width="266px"
          />
        </div>
      </div>
    </section>
    <!-- 이슈관련주 -->

    <section class="today-section-04" ref="todaySection04">
      <div class="top">
        <strong>바쁠 때는? <br />이슈와 주도주 미리미리 알림!</strong>
        <span>
          알림을 통해 놓칠수 있는 이슈와 <br />
          주도주를 확인해보세요. <br />
          바쁜 투자자를 위해
          <em
            >정보를 놓치지 않게 <br />
            AI가 알림을 보내드립니다.</em
          >
        </span>
      </div>
      <!-- top -->

      <div class="almList" ref="almList">
        <div>
          <div class="bullet">장전</div>
          <div class="alm_txt">
            <span> 장중 실시간 </span>
            <span>이슈와 예상 주도주 알림</span>
          </div>
        </div>
        <!--  -->

        <div>
          <div class="bullet">장중</div>
          <div class="alm_txt">
            <span> PM 11:50 </span>
            <span>실시간 이슈와 주도주 알림</span>
          </div>
        </div>
        <!--  -->
      </div>
      <!-- 알림리스트 -->

      <div class="visual">
        <div
          class="img02"
          data-aos="zoom-in"
          data-aos-delay="1500"
          data-aos-duration="700"
        >
          <img
            src="~/assets/img/todayTipAlmPop.png"
            alt="이슈캐치알림 팝업 이미지"
            width="207px"
          />
        </div>
      </div>
    </section>
    <!-- 미리미리 알림 -->

    <section class="today-section-05">
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
    store.commit('setPageTitle', '오늘의 이슈 활용TIP')
    store.commit('setHeaderClass', '')
    return {}
  },
  mounted() {
    AOS.init()

    window.addEventListener('scroll', this.handleScroll)
    // section01 animate
    setTimeout(() => {
      this.animateImage()
    }, 500)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll) // Remove scroll event listener on component destroy
  },
  methods: {
    handleScroll() {
      const section = this.$refs.todaySection04
      const almListDivs = this.$refs.almList.children

      if (section.getBoundingClientRect().top <= 120) {
        Array.from(almListDivs).forEach((div, index) => {
          setTimeout(() => {
            div.classList.add('on')
          }, index * 800) // Adjust the timeout duration as needed
        })
      }
    },
    animateImage() {
      // 이미지에 원하는 애니메이션 클래스 추가
      this.$refs.img.classList.add('down')
    }
  }
}
</script>
<style scoped>
@import "~/assets/css/todayTip.css";
</style>

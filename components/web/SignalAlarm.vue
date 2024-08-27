<template>
  <section>
    <div class="sec_tit">
      <strong>AI 종목 신호 알림</strong>
      <span>
        AI가 선별 - 감지한 5가지 종목군과 정확한 매수 타이밍이 포착된 종목을
        간편하게 받아보세요.
      </span>
    </div>
    <!-- // -->

    <div class="alarm">
      <div class="swiper alarmList">
        <div class="swiper-wrapper">
          <div class="swiper-slide alarmBox">
            <div class="bullet">1</div>
            <div class="title"><em>백발백중</em> AI 적중률 상위 종목</div>
            <!-- <div class="alarmChk">
              <span><em>백발백중</em> AI 적중률 상위 종목</span>
              <button
                :class="{ active: isActive }"
                @click="toggleActive"
              ></button>
            </div> -->
            <!-- 결제후 -->

            <div class="alarmChk">
              <span><em>백발백중</em> AI 적중률 상위 종목</span>
              <button @click="openModal('webAlarm')"></button>
            </div>
            <!-- 결제전 -->

            <div class="listw">
              <div class="list">
                <span class="obj">삼성전자가나다라마바사1234</span>
                <span class="info">#적중률 : 98%</span>
                <span class="bullet">****</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#적중률 : 98%</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#적중률 : 98%</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#적중률 : 98%</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#적중률 : 98%</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
            </div>
            <button>종목 더보기</button>
          </div>
          <!--  -->
          <div class="swiper-slide alarmBox">
            <div class="bullet">2</div>
            <div class="title">심층 분석 <em>목표가 상향</em> 종목</div>
            <div class="alarmChk">
              <span>심층 분석 <em>목표가 상향</em> 종목</span>
              <button
                :class="{ active: isActive }"
                @click="toggleActive"
              ></button>
            </div>
            <div class="listw">
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#6/12 목표가 상향</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#6/12 목표가 상향</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#6/12 목표가 상향</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#6/12 목표가 상향</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#6/12 목표가 상향</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
            </div>
            <button>종목 더보기</button>
          </div>
          <!--  -->
          <div class="swiper-slide alarmBox">
            <div class="bullet">3</div>
            <div class="title"><em>수급 포착</em> 주요 기관 순매수 상위</div>
            <div class="alarmChk">
              <span><em>수급 포착</em> 주요 기관 순매수 상위</span>
              <button
                :class="{ active: isActive }"
                @click="toggleActive"
              ></button>
            </div>
            <div class="listw">
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#사모펀드</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#사모펀드</span>
                <span class="bullet bu2">오늘매도</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#사모펀드</span>
                <span class="bullet bu3">관망</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#사모펀드</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">사모펀드</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
            </div>
            <button>종목 더보기</button>
          </div>
          <!--  -->
          <div class="swiper-slide alarmBox">
            <div class="bullet">4</div>
            <div class="title">BIG 수익 기대 <em>변동성 상위</em> 종목</div>
            <div class="alarmChk">
              <span>BIG 수익 기대 <em>변동성 상위</em> 종목</span>
              <button
                :class="{ active: isActive }"
                @click="toggleActive"
              ></button>
            </div>
            <div class="listw">
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#전일비1.4% 상승</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#전일비1.4% 상승</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#전일비1.4% 상승</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#전일비1.4% 상승</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#전일비1.4% 상승</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
            </div>
            <button>종목 더보기</button>
          </div>
          <!--  -->
          <div class="swiper-slide alarmBox">
            <div class="bullet">5</div>
            <div class="title"><em>저가 선매수</em> 거래량 폭발 종목</div>
            <div class="alarmChk">
              <span><em>저가 선매수</em> 거래량 폭발 종목</span>
              <button
                :class="{ active: isActive }"
                @click="toggleActive"
              ></button>
            </div>
            <div class="listw">
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#최저대비 622%</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#최저대비 622%</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#최저대비 622%</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#최저대비 622%</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
              <div class="list">
                <span class="obj">삼성전자가나다라마바사</span>
                <span class="info">#최저대비 622%</span>
                <span class="bullet bu1">오늘매수</span>
              </div>
              <!--  -->
            </div>
            <button>종목 더보기</button>
          </div>
          <!--  -->
        </div>
        <!--  -->
      </div>

      <div class="alarm-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <rect
              x="50"
              y="50"
              width="50"
              height="50"
              transform="rotate(180 50 50)"
              fill="white"
              fill-opacity="0.2"
            />
            <rect
              x="49.5"
              y="49.5"
              width="49"
              height="49"
              transform="rotate(180 49.5 49.5)"
              stroke="#999999"
              stroke-opacity="0.3"
            />
            <path
              d="M20.8332 37.5L31.86 26.4731C32.6736 25.6595 32.6736 24.3405 31.86 23.5269L20.8332 12.5"
              stroke="#111111"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="alarm-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <rect width="50" height="50" fill="white" fill-opacity="0.2" />
            <rect
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              stroke="#999999"
              stroke-opacity="0.3"
            />
            <path
              d="M29.1668 12.5L18.14 23.5269C17.3264 24.3405 17.3264 25.6595 18.14 26.4731L29.1668 37.5"
              stroke="#111111"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
    </div>

    <Modal
      class="web_modal"
      :modal-id="'webAlarm'"
      :show-modal="modals.webAlarm"
      :close-modal="() => closeModal('webAlarm')"
    >
      <template #header>
        <button
          type="button"
          class="modal-close"
          @click="closeModal('webAlarm')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
              stroke="#666666"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </template>
      <template #body>
        <div class="webModal">
          <div class="top">
            <strong>AI종목 신호 알림</strong>
            <span>
              주식창앱에서 <em>딱! 좋은 종목을 실시간 <br>감시해서 매수신호 </em>신청이 가능합니다.
            </span>
          </div>
          <div class="bnr">
            <img
              src="~/assets/img/web/modalBnr.png"
              alt="1668-3965 50%할인받기 정기결제"
              width="306"
            />
          </div>
        </div>
      </template>
      <template #footer>
        <button>
          <span>주식창 앱에서</span>
          <em>AI종목 신호 알림 확인하기</em>
        </button>
      </template>
    </Modal>
  </section>
  <!-- 신호알림 -->
</template>

<script>
import Modal from '~/components/ModalWrap'
export default {
  components: {
    Modal
  },
  data() {
    return {
      isActive: false,
      modals: {
        webAlarm: false
      }
    }
  },
  mounted() {
    const script = document.createElement('script')
    script.src =
      'https://cdn.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const swiperAlarm = new Swiper('.alarmList', {
        slidesPerView: 3,
        spaceBetween: 20,
        slideToClickedSlide: false,
        navigation: {
          nextEl: '.alarm-next',
          prevEl: '.alarm-prev'
        },
        hashNavigation: true
      }).mount()
      //
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
    openModal(modalId) {
      this.$set(this.modals, modalId, true)
    },
    closeModal(modalId) {
      this.$set(this.modals, modalId, false)
    }
  }
}
</script>

<style scoped>
@import "~/assets/css/web/alarm.css";

section {
  @apply pb-[25px] border-b-[1px] border-[#ebebeb];
}
</style>

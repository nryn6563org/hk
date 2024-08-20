<template>
  <section class="favSignalAlarm">
    <div class="sec_tit">
      <strong>딱! 좋은 종목 신호받기</strong>
      <span>
        AI가 5가지 종목군을 <em>선별하고</em> 감시해서, <em>정확한 매수 타이밍</em>이 포착된 종목을 PUSH로 알려드립니다.
        종목도, 타이밍도 고민할 필요 없는 세상에서 <em class="font-medium">가장 간편한 AI 매매신호 서비스</em>입니다.
      </span>
    </div>
    <!-- sec_tit -->

    <div class="AlmLstBox">
      <div class="swiper almlst">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="bullet">1</div>
            <!-- bullet -->

            <div class="tit">
              <span><em>백발백중</em> AI 적중률 상위 종목</span>
            </div>
            <!-- tit -->

            <div class="alarm">
              <span><em>백발백중</em> AI 적중률 상위 종목 신호 알림</span>
              <button @click="openModal('prSignal')"></button>
            </div>
            <!-- alarm -->

            <div class="lst-w">
              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->
            </div>
            <!-- lst-w -->

            <button>종목 더 보기</button>
          </div>
          <!-- 백발백중 -->

          <div class="swiper-slide">
            <div class="bullet">2</div>
            <!-- bullet -->

            <div class="tit">
              <span>심층 분석 <em>목표가 상향</em> 종목</span>
            </div>
            <!-- tit -->

            <div class="alarm">
              <span>심층 분석 <em>목표가 상향</em> 종목</span>
              <button :class="{active : activeBtn2}" @click="toggleBtn('almBtn02')"></button>
            </div>
            <!-- alarm -->

            <div class="lst-w">
              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->
            </div>
            <!-- lst-w -->
            <button>종목 더 보기</button>
          </div>
          <!-- 목표가 상향 -->

          <div class="swiper-slide">
            <div class="bullet">3</div>
            <!-- bullet -->

            <div class="tit">
              <span><em>수급 포착</em> 주요 기관 순매수 상위</span>
            </div>
            <!-- tit -->

            <div class="alarm">
              <span><em>수급 포착</em> 주요 기관 순매수 상위</span>
              <button :class="{active : activeBtn3}" @click="toggleBtn('almBtn03')"></button>
            </div>
            <!-- alarm -->

            <div class="lst-w">
              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->
            </div>
            <!-- lst-w -->

            <button>종목 더 보기</button>
          </div>
          <!-- 수급포착 -->

          <div class="swiper-slide">
            <div class="bullet">4</div>
            <!-- bullet -->

            <div class="tit">
              <span>BIG 수익 기대 <em>변동성 상위</em> 종목</span>
            </div>
            <!-- tit -->

            <div class="alarm">
              <span>BIG 수익 기대 <em>변동성 상위</em> 종목</span>
              <button :class="{active : activeBtn4}" @click="toggleBtn('almBtn04')"></button>
            </div>
            <!-- alarm -->

            <div class="lst-w">
              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->
            </div>
            <!-- lst-w -->

            <button>종목 더 보기</button>
          </div>
          <!-- 변동성 상위 -->

          <div class="swiper-slide">
            <div class="bullet">5</div>
            <!-- bullet -->

            <div class="tit">
              <span><em>저가 선매수</em> 거래량 폭발 종목</span>
            </div>
            <!-- tit -->

            <div class="alarm">
              <span><em>저가 선매수</em> 거래량 폭발 종목</span>
              <button :class="{active : activeBtn5}" @click="toggleBtn('almBtn05')"></button>
            </div>
            <!--  -->

            <div class="lst-w">
              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->

              <div class="lst">
                <span class="obj">삼성전자가나다라바사</span>
                <!-- 종목명 -->
                <span class="info">#적중률:98%</span>
                <!-- 종목 -->
                <span class="blt">****</span>
                <!-- 블릿 -->
              </div>
              <!-- lst -->
              </div>
            <!-- list-w -->
            <button>종목 더 보기</button>
          </div>
          <!-- 저가선매수 -->
        </div>
        <!-- wrapper -->

         <div class="swiper-pagination"></div>
         <!-- pagination -->
      </div>
      <!-- swiper -->
    </div>
    <!-- AlmLstBox -->
    <Modal
          class="prModal"
          :modal-id="'prSignal'"
          :show-modal="modals.prSignal"
          :close-modal="() => closeModal('prSignal')"
      >
        <template #header>
          <button type="button" class="modal-close" @click="closeModal('prSignal')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </template>
        <template #body>
          <div class="top">
            <strong>AI종목 신호 알림</strong>
            <span>주식창앱에서 <em>딱! 좋은 종목을 실시간<br>감시해서 매수신호</em>신청이 가능합니다.</span>
          </div>
          <div class="img">
            <img src="~/assets/img/pr/bnr1.png" alt="정기결제">
          </div>
        </template>
        <template #footer>
          <button>
            <span>주식창 앱에서</span>
            <strong>AI종목 신호 알림 확인하기</strong>
          </button>
        </template>
      </Modal>
  </section>
</template>
<script>
import Modal from '~/components/ModalWrap'
export default {
  components: {
    Modal
  },
  data() {
    return {
      activeBtn1: false,
      activeBtn2: false,
      activeBtn3: false,
      activeBtn4: false,
      activeBtn5: false,
      modals: {
        prSignal: false
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
      const swiperFsignal = new Swiper('.almlst', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 3300,
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
  },
  methods: {
    toggleBtn(btn) {
      if (btn === 'almbtn01') {
        this.activeBtn1 = !this.activeBtn1
      } else if (btn === 'almbtn02') {
        this.activeBtn2 = !this.activeBtn2
      } else if (btn === 'almbtn03') {
        this.activeBtn3 = !this.activeBtn3
      } else if (btn === 'almbtn04') {
        this.activeBtn4 = !this.activeBtn4
      } else if (btn === 'almbtn05') {
        this.activeBtn5 = !this.activeBtn5
      }
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
@import "~/assets/css/pr/signal.css";
.favSignalAlarm{
  @apply bg-[#f4f4f4]
}
</style>
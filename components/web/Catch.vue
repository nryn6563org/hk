<template>
  <section>
    <div class="sec_tit">
      <strong>업종별 AI캐치</strong>
      <span>시장의 흐름을 한 눈에 파악하고 이슈를 체크하세요.</span>
    </div>
    <!-- tit -->

    <div class="web_TodayIssue">
      <div class="racing">
        <div class="top">
          <div class="tit">
            <strong>오늘의 핫이슈!</strong>
            <!-- 제목 -->

            <span>
              <em>03.15</em>
              <em>AM 11:22</em>
            </span>
            <!-- 시간 -->
          </div>
          <!-- 타이틀 -->

          <div class="control">
            <div class="cht_line_ex">
              <span class="up">상승</span>
              <span class="dn">하락</span>
            </div>
            <!-- 범례 -->
            <button class="playBtn" @click="toggleDate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.3658 6.65134L13.3723 6.65542L13.379 6.6593C14.4292 7.27154 14.4292 8.69653 13.379 9.30877L13.3723 9.31265L13.3658 9.31673L4.93688 14.5847C3.81561 15.2593 2.5 14.4725 2.5 13.2541V2.78714C2.5 1.51473 3.80421 0.76605 4.94531 1.38865L13.3658 6.65134Z"
                  stroke="white"
                />
              </svg>

              <span>Play</span>
            </button>
            <!-- 컨트롤 -->
          </div>
          <!--  -->

          <div v-if="showDate" class="dateCh">
            <div class="tit">
              <strong>날짜선택</strong>
              <button @click="toggleDate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.5 17.5L10 10M10 10L2.5 2.5M10 10L17.5 2.5M10 10L2.5 17.5"
                    stroke="#111111"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="dateList">
              <button
                :class="{ chking: chkingDate === 'date001' }"
                @click="activeBtn('date001')"
              >
                2024.04.01
              </button>
              <button
                :class="{ chking: chkingDate === 'date002' }"
                @click="activeBtn('date002')"
              >
                2024.03.01
              </button>
              <button
                :class="{ chking: chkingDate === 'date003' }"
                @click="activeBtn('date003')"
              >
                2024.02.01
              </button>
              <button
                :class="{ chking: chkingDate === 'date004' }"
                @click="activeBtn('date004')"
              >
                2024.01.01
              </button>
              <button
                :class="{ chking: chkingDate === 'date005' }"
                @click="activeBtn('date005')"
              >
                2023.12.01
              </button>
            </div>
          </div>
        </div>
        <!-- 차트 top -->

        <div class="chart_w">
          <div class="chart">
            <img
              src="~/assets/img/web/racing.png"
              alt=" 레이싱 차트"
              width="772"
            />

            <!--
                  text : noto sans kr , 15px , medium, white , spacing: -0.525px
                  bar color : #E82A39, #EF7481, #EF7481, #EB9494, #6590EA, #BFBFBF, #8DA7EA
                  bar in text : noto snas kr, white , 13px, medium, spacing: -0.325px
                  -->
          </div>
          <span class="txt">자료제공 (주)씽크풀</span>
        </div>
        <!-- 차트 -->
      </div>
      <!-- racing chart -->

      <div class="issue">
        <div class="top">
          <strong>7월 9일 이슈</strong>
        </div>
        <!-- top -->

        <div class="issueContent">
          <div class="cont">
            <div class="swiper issueList">
              <div class="swiper-wrapper">
                <span
                  :class="{ active: activeTab === 'tab1' }"
                  class="swiper-slide"
                  @click="showTab('tab1')"
                >
                  원전
                </span>
                <span
                  :class="{ active: activeTab === 'tab2' }"
                  class="swiper-slide"
                  @click="showTab('tab2')"
                >
                  화장품
                </span>
                <span
                  :class="{ active: activeTab === 'tab3' }"
                  class="swiper-slide"
                  @click="showTab('tab3')"
                >
                  아이폰
                </span>
                <span
                  :class="{ active: activeTab === 'tab4' }"
                  class="swiper-slide"
                  @click="showTab('tab4')"
                >
                  갤럭시
                </span>
                <span
                  :class="{ active: activeTab === 'tab5' }"
                  class="swiper-slide"
                  @click="showTab('tab5')"
                >
                  암호화폐
                </span>
                <span
                  :class="{ active: activeTab === 'tab6' }"
                  class="swiper-slide"
                  @click="showTab('tab6')"
                >
                  은행
                </span>

                <span
                  :class="{ active: activeTab === 'tab6' }"
                  class="swiper-slide"
                  @click="showTab('tab6')"
                >
                  은행
                </span>

                <span
                  :class="{ active: activeTab === 'tab6' }"
                  class="swiper-slide"
                  @click="showTab('tab6')"
                >
                  은행
                </span>

                <span
                  :class="{ active: activeTab === 'tab6' }"
                  class="swiper-slide"
                  @click="showTab('tab6')"
                >
                  은행
                </span>
              </div>
              <!--  -->
              <div class="swiper-pagination"></div>
            </div>
            <!-- tab -->

            <div class="tabContent">
              <div v-if="activeTab === 'tab1'" class="tabCont">
                <div class="obj">
                  "대출 막차 타자"...39개월 만에 최대폭 에 최대폭↑ 1
                </div>
                <!-- obj -->
                <div class="txtContent">
                  지난달 5대 은행의 가계대출이 3년 3개월 만에 가장 큰 폭으로
                  늘었다. 주택 거래가 늘어나는 와중에 대출 규제 막차 수요까지
                  몰린 영향으로 풀이된다. 1일 금융권에 따르면 5대
                  은행(KB국민·신한·하나·우리·NH농협)의 가계대출 잔액은 7월 말
                  기준 715조7천383억원으로 6월 말(708조5천723억원)과 비교해 한
                  달 사이 7조1천660억원 늘었다. 이로써 넉 달 연속 증가세인데다
                  2021년 4월(+9조2천266억원) 이후 3년 3개월 만에 월간 증가 폭이
                  가장 컸다.
                </div>
                <!-- txtContent -->
              </div>
              <!-- // -->
              <div v-if="activeTab === 'tab2'" class="tabCont">
                <div class="obj">
                  "대출 막차 타자"...39개월 만에 최대폭 에 최대폭↑ 2
                </div>
                <!-- obj -->
                <div class="txtContent">
                  지난달 5대 은행의 가계대출이 3년 3개월 만에 가장 큰 폭으로
                  늘었다. 주택 거래가 늘어나는 와중에 대출 규제 막차 수요까지
                  몰린 영향으로 풀이된다. 1일 금융권에 따르면 5대
                  은행(KB국민·신한·하나·우리·NH농협)의 가계대출 잔액은 7월 말
                  기준 715조7천383억원으로 6월 말(708조5천723억원)과 비교해 한
                  달 사이 7조1천660억원 늘었다. 이로써 넉 달 연속 증가세인데다
                  2021년 4월(+9조2천266억원) 이후 3년 3개월 만에 월간 증가 폭이
                  가장 컸다.
                </div>
                <!-- txtContent -->
              </div>
              <!-- // -->
              <div v-if="activeTab === 'tab3'" class="tabCont">
                <div class="obj">
                  "대출 막차 타자"...39개월 만에 최대폭 에 최대폭↑ 3
                </div>
                <!-- obj -->
                <div class="txtContent">
                  지난달 5대 은행의 가계대출이 3년 3개월 만에 가장 큰 폭으로
                  늘었다. 주택 거래가 늘어나는 와중에 대출 규제 막차 수요까지
                  몰린 영향으로 풀이된다. 1일 금융권에 따르면 5대
                  은행(KB국민·신한·하나·우리·NH농협)의 가계대출 잔액은 7월 말
                  기준 715조7천383억원으로 6월 말(708조5천723억원)과 비교해 한
                  달 사이 7조1천660억원 늘었다. 이로써 넉 달 연속 증가세인데다
                  2021년 4월(+9조2천266억원) 이후 3년 3개월 만에 월간 증가 폭이
                  가장 컸다.
                </div>
                <!-- txtContent -->
              </div>
              <!-- // -->
              <div v-if="activeTab === 'tab4'" class="tabCont">
                <div class="obj">
                  "대출 막차 타자"...39개월 만에 최대폭 에 최대폭↑ 4
                </div>
                <!-- obj -->
                <div class="txtContent">
                  지난달 5대 은행의 가계대출이 3년 3개월 만에 가장 큰 폭으로
                  늘었다. 주택 거래가 늘어나는 와중에 대출 규제 막차 수요까지
                  몰린 영향으로 풀이된다. 1일 금융권에 따르면 5대
                  은행(KB국민·신한·하나·우리·NH농협)의 가계대출 잔액은 7월 말
                  기준 715조7천383억원으로 6월 말(708조5천723억원)과 비교해 한
                  달 사이 7조1천660억원 늘었다. 이로써 넉 달 연속 증가세인데다
                  2021년 4월(+9조2천266억원) 이후 3년 3개월 만에 월간 증가 폭이
                  가장 컸다.
                </div>
                <!-- txtContent -->
              </div>
              <!-- // -->
              <div v-if="activeTab === 'tab5'" class="tabCont">
                <div class="obj">
                  "대출 막차 타자"...39개월 만에 최대폭 에 최대폭↑ 5
                </div>
                <!-- obj -->
                <div class="txtContent">
                  지난달 5대 은행의 가계대출이 3년 3개월 만에 가장 큰 폭으로
                  늘었다. 주택 거래가 늘어나는 와중에 대출 규제 막차 수요까지
                  몰린 영향으로 풀이된다. 1일 금융권에 따르면 5대
                  은행(KB국민·신한·하나·우리·NH농협)의 가계대출 잔액은 7월 말
                  기준 715조7천383억원으로 6월 말(708조5천723억원)과 비교해 한
                  달 사이 7조1천660억원 늘었다. 이로써 넉 달 연속 증가세인데다
                  2021년 4월(+9조2천266억원) 이후 3년 3개월 만에 월간 증가 폭이
                  가장 컸다.
                </div>
                <!-- txtContent -->
              </div>
              <!-- // -->
              <div v-if="activeTab === 'tab6'" class="tabCont">
                <div class="obj">
                  "대출 막차 타자"...39개월 만에 최대폭 에 최대폭↑ 6
                </div>
                <!-- obj -->
                <div class="txtContent">
                  지난달 5대 은행의 가계대출이 3년 3개월 만에 가장 큰 폭으로
                  늘었다. 주택 거래가 늘어나는 와중에 대출 규제 막차 수요까지
                  몰린 영향으로 풀이된다. 1일 금융권에 따르면 5대
                  은행(KB국민·신한·하나·우리·NH농협)의 가계대출 잔액은 7월 말
                  기준 715조7천383억원으로 6월 말(708조5천723억원)과 비교해 한
                  달 사이 7조1천660억원 늘었다. 이로써 넉 달 연속 증가세인데다
                  2021년 4월(+9조2천266억원) 이후 3년 3개월 만에 월간 증가 폭이
                  가장 컸다.
                </div>
                <!-- txtContent -->
              </div>
              <!-- // -->
            </div>
          </div>
          <!-- cont -->

          <button @click="openModal('issueModal')">
            <img
              src="~/assets/img/web/issue_bullet.png"
              alt="주도"
              width="31"
            />
            <span><em>원전</em> 주도주</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.0002 18L15.293 12.7071C15.6836 12.3166 15.6836 11.6834 15.293 11.2929L10.0001 6"
                stroke="#5159F7"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- today issue -->
    </div>
    <!--  -->

    <Modal
      class="web_modal"
      :modal-id="'issueModal'"
      :show-modal="modals.issueModal"
      :close-modal="() => closeModal('issueModal')"
    >
      <template #header>
        <button
          type="button"
          class="modal-close"
          @click="closeModal('issueModal')"
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
            <strong>실시간 이슈와 주도주 확인하기</strong>
            <span
              >주식창앱에서<br />오늘의 이슈 키워드별 주도주 확인이
              가능합니다.</span
            >
            <em>AI캐치 서비스 찾기는 화면 하단을 참고해주세요</em>
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
          <em>실시간 이슈와 주도주 확인하기</em>
        </button>
      </template>
    </Modal>
  </section>
  <!-- Ai 캐치 -->
</template>
<script>
import Modal from '~/components/ModalWrap'

export default {
  components: {
    Modal
  },
  data() {
    return {
      activeTab: 'tab1',
      chkingDate: 'date001',
      showDate: false,
      modals: {
        issueModal: false
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
      const swiper = new Swiper('.issueList', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        slideToClickedSlide: true,
        hashNavigation: true
      }).mount()
      //
    }
  },
  methods: {
    showTab(tab) {
      this.activeTab = tab
    },
    toggleDate() {
      this.showDate = !this.showDate
    },
    activeBtn(date) {
      this.chkingDate = date
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

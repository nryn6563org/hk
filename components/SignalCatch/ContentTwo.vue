<template>
  <section class="content_two">
    <div class="newSignalTop">
      <TradingSignal2></TradingSignal2>
      <SchBox2 class="search-top"></SchBox2>
    </div>
    <!-- 상단검색 -->

    <ItemSignalAlarm></ItemSignalAlarm>

    <div class="item_info_catch">
      <div class="item_info">
        <div class="top">
          <div class="item">
            <span>오픈엣지테크놀로지</span>
          </div>
          <!-- 종목명 -->

          <div class="info">
            <span>394280</span>
            <span>KOSDAQ</span>
            <span>소프트웨어123</span>
          </div>
          <!-- 종목정보 -->
        </div>

        <div class="price up">
          <strong>1,201,000</strong>
          <span>0.48%</span>
        </div>
      </div>
      <!-- 종목정보 -->
    </div>
    <!-- 종목특이사항캐치 -->

    <div class="signal_alarm_banner">
      <div class="nbnr" @click="openModal('timingJoin')">
        <img src="~/assets/img/ctwBnrBullet.gif" alt="블릿" width="35" />
        <div>
          <span><em>종목명종목명종목명종목명</em> 신호캐치받기</span>
          <em>하단 [AI캐치 가입하기] 클릭!!</em>
        </div>
      </div>
      <!-- SignalList -->
    </div>

    <Modal
      class="alarm_modal"
      :modal-id="'timingJoin'"
      :show-modal="modals.timingJoin"
      :close-modal="() => closeModal('timingJoin')"
    >
      <template #header>
        <button
          type="button"
          class="modal-close"
          @click="closeModal('timingJoin')"
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
              stroke="#111111"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </template>
      <template #body>
        <div class="txt">
          <span>
            내 종목 매매타이밍 알림은 <br />AI캐치 가입 후 이용가능합니다.
          </span>

          <em>하단의 AI캐치 가입하기 버튼을 클릭해주세요.</em>
        </div>
      </template>
      <template #footer>
        <button type="button" @click="closeModal('timingJoin')">확인</button>
      </template>
    </Modal>
    <!--  매매타이밍  -->
    <!-- 신호알림배너 -->

    <div class="signal_catch_w">
      <div class="top">
        <SettingAlarm2></SettingAlarm2>
        <Modal
          id="alarm_modal"
          :modal-id="'alarm'"
          :show-modal="modals.alarm"
          :close-modal="() => closeModal('alarm')"
        >
          <template #header>
            <button
              type="button"
              class="modal-close"
              @click="closeModal('alarm')"
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
                  stroke="#111111"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </template>
          <template #body>
            <!-- 바디 내용 -->

            <div class="txt">
              <span>
                알림받기는 최대 50개까지 <br />
                등록가능합니다.
              </span>
              <em>알림설정에서 종목 삭제 후 등록해주세요.</em>
            </div>
          </template>
          <template #footer>
            <!-- 푸터 내용 -->
            <button type="button" @click="closeModal('alarm')">확인</button>
          </template>
        </Modal>
        <!-- modal -->

        <!-- 모달 컴포넌트 사용 -->
        <Modal
          id="alarm_modal"
          :modal-id="'alarm2'"
          :show-modal="modals.alarm2"
          :close-modal="() => closeModal('alarm2')"
        >
          <template #header>
            <button
              type="button"
              class="modal-close"
              @click="closeModal('alarm2')"
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
                  stroke="#111111"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </template>
          <template #body>
            <!-- 바디 내용 -->

            <div class="txt">
              <span> 알림종목에 등록 되었습니다. </span>
            </div>
          </template>
          <template #footer>
            <!-- 푸터 내용 -->
            <button type="button" @click="closeModal('alarm')">확인</button>
          </template>
        </Modal>
        <!-- modal -->

        <!-- 모달 컴포넌트 사용 -->
        <Modal
          id="alarm_modal"
          :modal-id="'alarm3'"
          :show-modal="modals.alarm3"
          :close-modal="() => closeModal('alarm3')"
        >
          <template #header>
            <button
              type="button"
              class="modal-close"
              @click="closeModal('alarm2')"
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
                  stroke="#111111"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </template>
          <template #body>
            <!-- 바디 내용 -->

            <div class="txt">
              <span> 알림종목에 삭제 되었습니다. </span>
            </div>
          </template>
          <template #footer>
            <!-- 푸터 내용 -->
            <button type="button" @click="closeModal('alarm')">확인</button>
          </template>
        </Modal>
        <!-- modal -->

        <div class="card">
          <div class="signal sig01">
            <span>오늘<br />매수</span>
          </div>
          <!-- <div class="signal sig02">
            <span>오늘<br />매도</span>
          </div>
          <div class="signal sig03">
            <span>관망중</span>
          </div>
          <div class="signal sig04">
            <span>보유중</span>
          </div>
          <div class="signal sig05">
            <span>신호<br />캐치</span>
          </div> -->

          <!-- 신호 01~05 -->

          <div class="signal-info">
            <div>
              <span>수익률 :</span>
              <em class="up">+23.3%</em>
            </div>
            <div>
              <span>매수가 :</span>
              <em>443,000원</em>
            </div>
            <div>
              <span>신호발생일 :</span>
              <em>2023.11.03</em>
            </div>
            <!--            <div class="txt">-->
            <!--              아직 발생된<br />-->
            <!--              매매신호가 없습니다.-->
            <!--            </div>-->
          </div>
          <!-- 신호 내용 퍼센트(색상) 나머지(흰색) -->
        </div>
        <!-- 신호카드 -->
      </div>
      <!-- 상단 -->

      <CatchTab></CatchTab>
      <CatchTab2></CatchTab2>
      <!-- 최근3&12개월 -->
    </div>
    <!-- 신호캐치 -->

    <div class="item_card">
      <ItemCard></ItemCard>
    </div>
    <!-- 특이사항&장마감요약 -->

    <TimingAlarm></TimingAlarm>

    <SchBox></SchBox>
    <!-- 검색 -->

    <div class="ainews">
      <strong>AI속보</strong>

      <div class="list">
        <div class="n_news">
          <div class="obj">
            <em class="bullet_ai"
              ><img src="~/assets/img/bullet_ai.png" alt="ai" class="w-full"
            /></em>
            <span class="con"
              >특징주, 삼성전자-HBM(고대역폭메모리) 테마 상승세에 0.83% ↑</span
            >
          </div>
          <!-- 속보내용 -->

          <div class="info">
            <span>09:58</span>
            <span>라씨로</span>
          </div>
          <!-- 속보정보 -->
        </div>

        <div>
          <div class="obj">
            <em class="bullet_ai"
              ><img src="~/assets/img/bullet_ai.png" alt="ai" class="w-full"
            /></em>
            <span class="con"
              >특징주, 삼성전자-HBM(고대역폭메모리) 테마 상승세에 0.83% ↑</span
            >
          </div>
          <!-- 속보내용 -->

          <div class="info">
            <span>09:58</span>
            <span>라씨로</span>
          </div>
          <!-- 속보정보 -->
        </div>

        <div class="n_news">
          <div class="obj">
            <span class="con"
              >특징주, 삼성전자-HBM(고대역폭메모리) 테마 상승세에 0.83% ↑</span
            >
            <em class="bullet_new">NEW</em>
          </div>
          <!-- 속보내용 -->

          <div class="info">
            <span>09:58</span>
            <span>라씨로</span>
          </div>
          <!-- 속보정보 -->
        </div>

        <div class="n_news">
          <div class="obj">
            <span class="con"
              >특징주, 삼성전자-HBM(고대역폭메모리) 테마 상승세에 0.83% ↑</span
            >
            <em class="bullet_new">NEW</em>
          </div>
          <!-- 속보내용 -->

          <div class="info">
            <span>09:58</span>
            <span>라씨로</span>
          </div>
          <!-- 속보정보 -->
        </div>

        <div>
          <div class="obj">
            <em class="bullet_ai"
              ><img src="~/assets/img/bullet_ai.png" alt="ai"
            /></em>
            <span class="con"
              >특징주, 삼성전자-HBM(고대역폭메모리) 테마 상승세에 0.83% ↑</span
            >
          </div>
          <!-- 속보내용 -->

          <div class="info">
            <span>09:58</span>
            <span>라씨로</span>
          </div>
          <!-- 속보정보 -->
        </div>
      </div>
      <!-- 속보리스트 -->
      <div class="more">
        <button>
          더보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M5 7.5L9 11.5L13 7.5"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- ai속보 -->
  </section>
</template>

<script>
import ItemCard from '~/components/SignalCatch/ItemCard'
import CatchTab from '~/components/SignalCatch/CatchTab'
import CatchTab2 from '~/components/SignalCatch/CatchTabNotJoin'
import Modal from '~/components/ModalWrap'
import SchBox from '~/components/SignalCatch/SearchWrap'
import SchBox2 from '~/components/SignalCatch/NewSearch'
import SettingAlarm2 from '~/components/SignalCatch/SettingAlarm2'
import TradingSignal2 from '~/components/SignalCatch/TradingSignal2'
import ItemSignalAlarm from '~/components/SignalCatch/ItemSignalAlarm'
import TimingAlarm from '~/components/SignalCatch/TimingAlarm'

export default {
  components: {
    ItemCard,
    CatchTab,
    Modal,
    SchBox,
    SchBox2,
    // SettingAlarm,
    SettingAlarm2,
    CatchTab2,
    TradingSignal2,
    ItemSignalAlarm,
    TimingAlarm
  },
  data() {
    return {
      alarmOn: false,
      popoverType: null,
      showModal: false,
      modals: {
        alarm: false,
        timingJoin: false
      }
    }
  },
  methods: {
    toggleAlarm() {
      this.alarmOn = !this.alarmOn
      // 여기에 필요한 추가 로직을 추가할 수 있습니다.
      if (this.alarmOn) {
        this.showPopover('register')
        setTimeout(() => {
          this.hidePopover()
        }, 5000)
      } else {
        this.showPopover('delete')
        setTimeout(() => {
          this.hidePopover()
        }, 5000)
      }
    },

    togglePopover(type) {
      this.popoverType = this.popoverType === type ? null : type
      if (this.popoverType) {
        setTimeout(() => {
          this.hidePopover()
        }, 5000)
      }
    },

    showPopover(type) {
      this.popoverType = type
    },

    hidePopover() {
      this.popoverType = null
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
@import "~/assets/css/signal.css";
@import "~/assets/css/modal.css";
</style>

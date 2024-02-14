<template>
  <div id="tab03" class="tabContent">
    <div class="catchAlarm_w">
      <strong><em>일자별</em> 이슈캐치 알림</strong>
      <!--  -->

      <div class="banner">
        <button @click="openModal('altime')">
          <em>‘이슈캐치’</em> 언제 무엇을 알려주나요??
        </button>

        <Modal
          class="alarmTime"
          :modal-id="'altime'"
          :show-modal="modals.altime"
          :close-modal="() => closeModal('altime')"
        >
          <template #header>
            <strong>이슈캐치 알림시간</strong>
            <button @click="closeModal('altime')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19 19L10 10M10 10L1 1M10 10L19.0001 1M10 10L1 19.0001"
                  stroke="#111111"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </template>
          <template #body>
            <div class="timeList">
              <div class="list">
                <em>08:50</em>
                <span>개장전 이슈 주도주 알림</span>
              </div>

              <div class="list">
                <em>11:50</em>
                <span>장중 실시간 이슈 & 주도주 알림</span>
              </div>

              <div class="list">
                <em>장중</em>
                <span>추천종목 대응전략 알림</span>
              </div>

              <div class="list">
                <em>18:00</em>
                <span>퇴근길 한발빠른 종목 추천</span>
              </div>

              <div class="list">
                <em>18:10</em>
                <span>시간외 특징주 알림</span>
              </div>
            </div>
          </template>
          <template #footer>
            <!-- 푸터 내용 -->
            <button type="button">확인</button>
          </template>
        </Modal>
        <!-- modal -->
      </div>
      <!-- 이슈활용 안내 -->

      <div class="dayList">
        <div class="list">
          <strong>2023.12.20</strong>

          <div>
            <a href="#">
              <div>
                <span class="time">18:10</span>
                <!-- 시간 -->
                <span class="con">
                  [이슈캐치]STO, 그린벨트, 로봇, 생체인식생체인식생체인식
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M1 1L6 6L1 11"
                  stroke="#D0D0D0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- 일자별알림 -->
        <div class="list">
          <strong>2023.12.19</strong>

          <div>
            <a href="#">
              <div>
                <span class="time">18:10</span>
                <!-- 시간 -->
                <span class="con">
                  [이슈캐치]STO, 그린벨트, 로봇, 생체인식생체인식생체인식
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M1 1L6 6L1 11"
                  stroke="#D0D0D0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- 일자별알림 -->
        <div class="list">
          <strong>2023.12.18</strong>

          <div>
            <a href="#">
              <div>
                <span class="time">18:10</span>
                <!-- 시간 -->
                <span class="con">
                  [이슈캐치]STO, 그린벨트, 로봇, 생체인식생체인식생체인식
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M1 1L6 6L1 11"
                  stroke="#D0D0D0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>

          <div>
            <a href="#">
              <div>
                <span class="time">18:10</span>
                <!-- 시간 -->
                <span class="con">
                  [이슈캐치]STO, 그린벨트, 로봇, 생체인식생체인식생체인식
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M1 1L6 6L1 11"
                  stroke="#D0D0D0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>

          <div>
            <a href="#">
              <div>
                <span class="time">18:10</span>
                <!-- 시간 -->
                <span class="con">
                  [이슈캐치]STO, 그린벨트, 로봇, 생체인식생체인식생체인식
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M1 1L6 6L1 11"
                  stroke="#D0D0D0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- 일자별알림 -->

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
    </div>
  </div>
</template>

<script>
import Modal from '~/components/ModalWrap'

export default {
  components: {
    Modal
  },
  data() {
    return {
      modals: {
        catchJoin: false
      }
    }
  },
  methods: {
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
@import "~/assets/css/catchAlarm.css";
</style>

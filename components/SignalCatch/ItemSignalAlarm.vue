<template>
  <div id="itemSignalAlarm">
    <div class="top">
      <div class="tit">
        <img
          src="~/assets/img/bullet_item_alarm.png"
          alt="타이틀블릿"
          width="21"
        />
        <span>딱! <em>좋은 종목만</em></span>
        <em>신호 받기</em>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M9 8.75V12.5M9 16.25C5.27208 16.25 2.25 13.2279 2.25 9.5C2.25 5.77208 5.27208 2.75 9 2.75C12.7279 2.75 15.75 5.77208 15.75 9.5C15.75 13.2279 12.7279 16.25 9 16.25ZM9.03735 6.5V6.575L8.96265 6.57515V6.5H9.03735Z"
              stroke="#737373"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <!-- //tit -->

      <div class="almList">
        <button>MY 알림내역</button>
      </div>
      <!-- alarm List -->
    </div>

    <div class="alarm_list_box">
      <div v-for="(item, index) in alarmItems" :key="index">
        <div class="tit" @click="openModal(index)">
          <span>
            <em>{{ item.titleEm }}</em> {{ item.title }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M5.5 5.5L11 11L5.5 16.5"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.917 5.5L17.417 11L11.917 16.5"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <!-- tit -->

        <div class="btn">
          <button :class="{ on: item.isActive }" @click="toggleAlarm(index)">
            <span>알림활성화</span>
          </button>
        </div>
        <!-- btn -->

        <Transition
          name="bubble-fade"
          enter-active-class="animate__fadeIn"
          leave-active-class="animate__fadeOut"
        >
          <div
            v-if="item.showBubble"
            class="txt-bubble inbox almOn animate__animated"
            v-show="item.isActive"
          >
            '{{ item.titleEm }} {{ item.title }}'<br />
            <em>알림이 켜졌습니다.</em>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="29"
              viewBox="0 0 39 29"
              fill="none"
            >
              <g filter="url(#filter0_d_973_22890)">
                <path d="M31 16L31 3L8 3L31 16Z" fill="white" />
              </g>
              <defs>
                <filter
                  id="filter0_d_973_22890"
                  x="0"
                  y="0"
                  width="39"
                  height="29"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_973_22890"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_973_22890"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </Transition>

        <Transition
          name="bubble-fade2"
          enter-active-class="animate__fadeIn"
          leave-active-class="animate__fadeOut"
        >
          <div
            v-if="item.showBubble"
            class="txt-bubble inbox almOff animate__animated"
            v-show="!item.isActive"
          >
            '{{ item.titleEm }} {{ item.title }}'<br />
            <em>알림이 꺼졌습니다.</em>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="29"
              viewBox="0 0 39 29"
              fill="none"
            >
              <g filter="url(#filter0_d_973_22890)">
                <path d="M31 16L31 3L8 3L31 16Z" fill="white" />
              </g>
              <defs>
                <filter
                  id="filter0_d_973_22890"
                  x="0"
                  y="0"
                  width="39"
                  height="29"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_973_22890"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_973_22890"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </Transition>

        <!-- Modal for each item -->
        <Modal
          v-if="modals[index]"
          :key="index"
          :modal-id="'modal-' + index"
          :show-modal="modals[index]"
          :close-modal="() => closeModal(index)"
          class=""
        >
          <template #header>
            <h1>'{{ item.titleEm }} {{ item.title }}'</h1>
            <button
              type="button"
              class="modal-close"
              @click="closeModal(index)"
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
            <div v-if="modals[0]">1</div>
            <!-- 백발백중 -->
            <div v-else-if="modals[1]">2</div>
            <!-- 목표가 상향 -->
            <div v-else-if="modals[2]">3</div>
            <!-- 변동성 상위 -->
            <div v-else-if="modals[3]">4</div>
            <!-- 수급포착 -->
            <div v-else-if="modals[4]">5</div>
            <!-- 거래량 상승 -->
          </template>
          <template #footer>
            <!-- Modal footer content here -->
            <button @click="closeModal(index)">Close</button>
          </template>
        </Modal>
        <!-- End modal -->
      </div>
      <!--  -->

      <transition name="fade" leave-active-class="animate__fadeOut">
        <div v-if="showOutbox" class="txt-bubble outbox animate__animated">
          <em>‘딱! 좋은 종목만 신호받기’</em> 에서 원하시는 유형의 알림을
          신청하시면 감시종목의 <em>매매알림을 받을 수 있습니다. </em>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="29"
            viewBox="0 0 39 29"
            fill="none"
          >
            <g filter="url(#filter0_d_973_22890)">
              <path d="M31 16L31 3L8 3L31 16Z" fill="white" />
            </g>
            <defs>
              <filter
                id="filter0_d_973_22890"
                x="0"
                y="0"
                width="39"
                height="29"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_973_22890"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_973_22890"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </transition>
    </div>

    <!-- End of itemSignalAlarm -->
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
      alarmItems: [
        {
          titleEm: '백발백중',
          title: 'AI 적중률 상위 종목',
          isActive: false,
          showBubble: false
        },
        {
          titleEm: '심층 분석',
          title: '목표가 상향 종목',
          isActive: false,
          showBubble: false
        },
        {
          titleEm: '수급 포착',
          title: '주요 기관 순매수 상위',
          isActive: false,
          showBubble: false
        },
        {
          titleEm: 'Big',
          title: '수익 기대 변동성 상위 종목',
          isActive: false,
          showBubble: false
        },
        {
          titleEm: '저가 선매수',
          title: '거래량 폭발 종목',
          isActive: false,
          showBubble: false
        }
      ],
      showOutbox: true,
      modals: {}
    }
  },
  mounted() {
    setTimeout(() => {
      this.showOutbox = false
    }, 5000)
  },
  methods: {
    toggleAlarm(index) {
      this.alarmItems[index].isActive = !this.alarmItems[index].isActive
      this.alarmItems[index].showBubble = true
      setTimeout(() => {
        this.alarmItems[index].showBubble = false
      }, 3000)
    },
    openModal(index) {
      // Set modal state to true for the selected item
      this.$set(this.modals, index, true)
    },
    closeModal(index) {
      // Set modal state to false for the selected item
      this.$set(this.modals, index, false)
    }
  }
}
</script>

<style scoped>
@import "~/assets/css/itemSignalAlarm.css";

/* 활성화된 버튼 스타일 */
button.on {
  background-color: #00aaff;
  color: white;
}

/* 텍스트 버블 기본 스타일 */
.txt-bubble {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.txt-bubble[hidden] {
  opacity: 0;
}
</style>
<template>
  <div class="signalAlm">
    <span>이종목 <em>매매신호 알림</em></span>

    <div>
      <button
        :class="{active: alarmOn }"
        @click="toggleAlarm"
        class="almToggle"
      >
        매매신호 알림 설정
      </button>

      <button class="setting" @click="openModal('settingAlarm')">
        알림설정
      </button>
    </div>

    <Modal
      class="item-sch"
      :modal-id="'settingAlarm'"
      :show-modal="modals.settingAlarm"
      :close-modal="() => closeModal('settingAlarm')"
    >
      <template #header>
        <strong>알림설정</strong>
        <button
          type="button"
          class="modal-close"
          @click="closeModal('settingAlarm')"
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
        <div class="sch-modal-wrap">
          <div class="sch-bar">
            <input type="text" placeholder="종목명/종목코드" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_280_4371)">
                  <path
                    d="M22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L22.2929 23.7071ZM18.1176 10.0588C18.1176 14.5096 14.5096 18.1176 10.0588 18.1176V20.1176C15.6142 20.1176 20.1176 15.6142 20.1176 10.0588H18.1176ZM10.0588 18.1176C5.60806 18.1176 2 14.5096 2 10.0588H0C0 15.6142 4.50349 20.1176 10.0588 20.1176V18.1176ZM2 10.0588C2 5.60806 5.60806 2 10.0588 2V0C4.50349 0 0 4.50349 0 10.0588H2ZM10.0588 2C14.5096 2 18.1176 5.60806 18.1176 10.0588H20.1176C20.1176 4.50349 15.6142 0 10.0588 0V2ZM15.8223 17.2365L22.2929 23.7071L23.7071 22.2929L17.2365 15.8223L15.8223 17.2365Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_280_4371">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <!-- 검색바 -->

          <div class="setting-list">
            <div class="btn-group">
              <button class="btn btn-primary">저장</button>
              <button class="btn btn-default">선택삭제</button>
            </div>
            <!-- button -->

            <div class="list">
              <div class="txt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M2.16699 8.50002C2.16699 5.00222 5.00252 2.16669 8.50032 2.16669C11.9981 2.16669 14.8337 5.00222 14.8337 8.50002C14.8337 11.9978 11.9981 14.8334 8.50032 14.8334C5.00252 14.8334 2.16699 11.9978 2.16699 8.50002Z"
                    stroke="#999999"
                    stroke-width="1.5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.5 12.3958C8.2066 12.3958 7.96875 12.158 7.96875 11.8646L7.96875 8.3229C7.96875 8.0295 8.2066 7.79165 8.5 7.79165C8.7934 7.79165 9.03125 8.0295 9.03125 8.3229L9.03125 11.8646C9.03125 12.158 8.7934 12.3958 8.5 12.3958Z"
                    fill="#999999"
                  />
                  <path
                    d="M8.5 5.1354C8.0599 5.1354 7.70312 5.49217 7.70312 5.93227C7.70312 6.37237 8.0599 6.72915 8.5 6.72915C8.9401 6.72915 9.29687 6.37237 9.29687 5.93227C9.29687 5.49217 8.9401 5.1354 8.5 5.1354Z"
                    fill="#999999"
                  />
                </svg>
                <span>등록 종목의 실시간 AI매매신호를 알려드립니다.</span>
              </div>
              <!-- txt -->

              <div class="item-group">
                <div class="item-header">
                  <div>
                    <span> 종목명 (<em>15</em>/50) </span>
                  </div>
                  <div>
                    <span>삭제</span>
                    <div class="chkbox">
                      <input
                        id="allCheck"
                        v-model="allChecked"
                        @change="handleAllCheck"
                        type="checkbox"
                        name=""
                      />
                      <label for="allCheck" :class="{ chkon: allChecked }">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          class="notChecked"
                        >
                          <rect
                            x="0.75"
                            y="0.75"
                            width="20.5"
                            height="20.5"
                            fill="white"
                            stroke="#DDDDDD"
                            stroke-width="1.5"
                          />
                          <path
                            d="M6 11L10 15L17 8"
                            stroke="#D8D8D8"
                            stroke-width="1.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          class="checked"
                        >
                          <rect width="22" height="22" fill="#3F54C3" />
                          <path
                            d="M6 11L10 15L17 8"
                            stroke="white"
                            stroke-width="1.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>
                <!-- header -->

                <div class="item-body">
                  <div v-for="item in items" :key="item.id" class="item">
                    <div class="item-info">
                      <div class="obj">{{ item.name }}</div>
                      <div class="info">
                        <span>{{ item.price }}</span>
                        <span
                          v-if="item.change"
                          :class="{
                            up: item.change.includes('+'),
                            dn: item.change.includes('-'),
                          }"
                          >{{ item.change }}</span
                        >
                      </div>
                    </div>
                    <!--  -->
                    <div class="item-dlt">
                      <button
                        class="btn btn-sm btn-default"
                        @click="removeItem(item.id)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 16.5L11 11M11 11L5.5 5.5M11 11L16.5 5.5M11 11L5.5 16.5"
                            stroke="#999999"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        삭제
                      </button>
                      <div class="chkbox">
                        <input
                          :id="'chk' + item.id"
                          v-model="item.checked"
                          type="checkbox"
                          class="chk"
                          @change="handleItemCheck"
                        />
                        <label
                          :for="'chk' + item.id"
                          :class="{ chkon: item.checked }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            class="notChecked"
                          >
                            <rect
                              x="0.75"
                              y="0.75"
                              width="20.5"
                              height="20.5"
                              fill="white"
                              stroke="#DDDDDD"
                              stroke-width="1.5"
                            />
                            <path
                              d="M6 11L10 15L17 8"
                              stroke="#D8D8D8"
                              stroke-width="1.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            class="checked"
                          >
                            <rect width="22" height="22" fill="#3F54C3" />
                            <path
                              d="M6 11L10 15L17 8"
                              stroke="white"
                              stroke-width="1.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>
                    <!--  -->
                  </div>
                  <!-- item -->
                </div>
                <!-- body -->
              </div>
              <!-- group  -->
            </div>
            <!-- list -->

            <div class="btn-group">
              <button class="btn btn-primary">저장</button>
              <button class="btn btn-default">선택삭제</button>
            </div>
            <!-- button -->
          </div>
          <!-- 설정리스트 -->
        </div>
      </template>
    </Modal>
    <!-- modal -->
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
      showModal: false,
      alarmOn: false,
      allChecked: false,
      modals: {
        settingAlarm: false
      },
      items: [
        {
          id: 1,
          name: '스튜디오산타',
          price: '331,000',
          change: '+0.6%',
          checked: false
        },
        {
          id: 2,
          name: '스튜디오산타2',
          price: '331,000',
          change: '-0.6%',
          checked: false
        },
        {
          id: 3,
          name: '스튜디오산타',
          price: '331,000',
          change: '+0.6%',
          checked: false
        },
        {
          id: 4,
          name: '스튜디오산타2',
          price: '331,000',
          change: '-0.6%',
          checked: false
        },
        {
          id: 5,
          name: '스튜디오산타',
          price: '331,000',
          change: '+0.6%',
          checked: false
        },
        {
          id: 6,
          name: '스튜디오산타2',
          price: '331,000',
          change: '-0.6%',
          checked: false
        }
        // Add more items as needed
      ]
    }
  },
  methods: {
    openModal(modalId) {
      this.$set(this.modals, modalId, true)
    },
    closeModal(modalId) {
      this.$set(this.modals, modalId, false)
    },
    handleAllCheck() {
      // allCheck 체크 상태에 따라 모든 항목의 체크 상태 업데이트
      this.items.forEach((item) => {
        item.checked = this.allChecked
      })
    },
    handleItemCheck() {
      // 하나의 항목 체크 상태에 따라 allCheck 체크 상태 업데이트
      this.allChecked = this.items.every(item => item.checked)
    },
    toggleAlarm() {
      this.alarmOn = !this.alarmOn
      // 여기에 필요한 추가 로직을 추가할 수 있습니다.
    }
  }
}
</script>

<style scoped>
@import "~/assets/css/modal.css";
@import "~/assets/css/btn.css";
@import "~/assets/css/settingAlm.css";
</style>

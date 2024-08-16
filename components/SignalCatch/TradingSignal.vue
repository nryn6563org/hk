<template>
  <div class="trading-signal">
    <span class="title">
      신호캐치 <br>매매신호
    </span>
    <div class="signal">
      <button class="up" @click="openModal('signalJoin')">
        <span>오늘매수</span><em>17</em>
      </button>
      <!--   매수버튼   -->
      <button class="dn" @click="openModal('signalJoin')">
        <span>오늘수익</span><em>128</em>
      </button>
      <!--   매도버튼   -->
    </div>

    <Modal
        class="alarm_modal"
        :modal-id="'signalJoin'"
        :show-modal="modals.signalJoin"
        :close-modal="() => closeModal('signalJoin')"
    >
      <template #header>
        <button type="button" class="modal-close" @click="closeModal('signalJoin')">
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
            AI가 캐치한 매매신호 종목은 <br>AI캐치 가입 후 이용가능합니다.
          </span>

          <em>하단의 AI캐치 가입하기 버튼을 클릭해주세요.</em>
        </div>
      </template>
      <template #footer>
        <button type="button" @click="closeModal('signalJoin')">확인</button>
      </template>
    </Modal>
    <!--  매매신호  -->
  </div>
  <!-- tradingSignal -->
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
      modals: {
        signalJoin: false,
        timingJoin: false
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
@import "~/assets/css/modal.css";
@import "~/assets/css/tradingSignal.css";
</style>
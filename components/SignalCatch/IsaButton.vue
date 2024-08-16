<template>
  <div class="btn">
    <button @click="openModal('njAlmBtn')">
      <span>알림활성화</span>
    </button>

    <Modal
      class="alarm_modal"
      :modal-id="'njAlmBtn'"
      :show-modal="modals.njAlmBtn"
      :close-modal="() => closeModal('njAlmBtn')"
    >
      <template #header>
        <button
          type="button"
          class="modal-close"
          @click="closeModal('njAlmBtn')"
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
        <div class="title">
          <strong>알림신청은 <br> AI캐치 가입 후 이용가능합니다.</strong>
        </div>
        <div class="txt ta_c">
          <span
            >하단의 AI캐치 가입하기 버튼을 클릭해주세요.
          </span>
        </div>
      </template>
      <template #footer>
        <button type="button" @click="closeModal('njAlmBtn')">확인</button>
      </template>
    </Modal>
    <!-- 신호받기 -->
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
      modals: {
        njAlmBtn: false
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
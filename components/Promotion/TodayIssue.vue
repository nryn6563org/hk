<template>
  <section class="todayIsu">
    <div class="top">
      <span>이슈와 관련 소식을 함께 확인해보세요</span>
      <strong><em>12월 19일</em> 이슈</strong>
    </div>
    <div class="issueTab">
      <div class="swiper isuTab">
        <div class="swiper-wrapper">
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab01' }"
            @click="showTab('tab01')"
          >
            STO
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab02' }"
            @click="showTab('tab02')"
          >
            원전
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab03' }"
            @click="showTab('tab03')"
          >
            암호화폐
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab04' }"
            @click="showTab('tab04')"
          >
            반도체
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab05' }"
            @click="showTab('tab05')"
          >
            아이폰
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab06' }"
            @click="showTab('tab06')"
          >
            갤럭시
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab01' }"
            @click="showTab('tab01')"
          >
            STO
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab02' }"
            @click="showTab('tab02')"
          >
            원전
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab03' }"
            @click="showTab('tab03')"
          >
            암호화폐
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab04' }"
            @click="showTab('tab04')"
          >
            반도체
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab05' }"
            @click="showTab('tab05')"
          >
            아이폰
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab06' }"
            @click="showTab('tab06')"
          >
            갤럭시
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab01' }"
            @click="showTab('tab01')"
          >
            STO
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab02' }"
            @click="showTab('tab02')"
          >
            원전
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab03' }"
            @click="showTab('tab03')"
          >
            암호화폐
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab04' }"
            @click="showTab('tab04')"
          >
            반도체
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab05' }"
            @click="showTab('tab05')"
          >
            아이폰
          </button>
          <!-- slide -->
          <button
            class="swiper-slide"
            :class="{ active: activeTab === 'tab06' }"
            @click="showTab('tab06')"
          >
            갤럭시
          </button>
          <!-- slide -->
        </div>
        <!-- wrapper -->
      </div>
      <!-- swiper -->
    </div>
    <!-- tab -->

    <div class="issueContent">
      <div v-if="activeTab === 'tab01'" class="isuCont">
        <strong class="tit"
          >1마이크론, 뉴욕 반도체 공장 설립에 1천억달러 투자 계획이 다
          있구나</strong
        >
        <span class="txt">
          미국 메모리 반도체 제조사인 마이크론 테크놀로지(NAS:MU)가 뉴욕에
          반도체 공장을 짓기 위해 최대 1천억 달러를 투자할 예정이라고 밝혔다.
          4일(현지시간) 뉴욕타임스에 따르면 마이크론은 이날 뉴욕주에 새로운
          컴퓨터 반도체 공장을 건설하는 데 앞으로 20년 이상 최대 1천억 달러를
          투자할 계획이라고 말했다. 미국에서 반도체 법이 통과한 이후 기업들이
          속속 미국내 투자를 강화하고 있다고 한다.
        </span>
      </div>
      <!-- cont -->
      <div v-if="activeTab === 'tab02'" class="isuCont">
        <strong class="tit"
          >2마이크론, 뉴욕 반도체 공장 설립에 1천억달러 투자 계획이 다
          있구나</strong
        >
        <span class="txt">
          미국 메모리 반도체 제조사인 마이크론 테크놀로지(NAS:MU)가 뉴욕에
          반도체 공장을 짓기 위해 최대 1천억 달러를 투자할 예정이라고 밝혔다.
          4일(현지시간) 뉴욕타임스에 따르면 마이크론은 이날 뉴욕주에 새로운
          컴퓨터 반도체 공장을 건설하는 데 앞으로 20년 이상 최대 1천억 달러를
          투자할 계획이라고 말했다. 미국에서 반도체 법이 통과한 이후 기업들이
          속속 미국내 투자를 강화하고 있다고 한다.
        </span>
      </div>
      <!-- cont -->
      <div v-if="activeTab === 'tab03'" class="isuCont">
        <strong class="tit"
          >3마이크론, 뉴욕 반도체 공장 설립에 1천억달러 투자 계획이 다
          있구나</strong
        >
        <span class="txt">
          미국 메모리 반도체 제조사인 마이크론 테크놀로지(NAS:MU)가 뉴욕에
          반도체 공장을 짓기 위해 최대 1천억 달러를 투자할 예정이라고 밝혔다.
          4일(현지시간) 뉴욕타임스에 따르면 마이크론은 이날 뉴욕주에 새로운
          컴퓨터 반도체 공장을 건설하는 데 앞으로 20년 이상 최대 1천억 달러를
          투자할 계획이라고 말했다. 미국에서 반도체 법이 통과한 이후 기업들이
          속속 미국내 투자를 강화하고 있다고 한다.
        </span>
      </div>
      <!-- cont -->
      <div v-if="activeTab === 'tab04'" class="isuCont">
        <strong class="tit"
          >4마이크론, 뉴욕 반도체 공장 설립에 1천억달러 투자 계획이 다
          있구나</strong
        >
        <span class="txt">
          미국 메모리 반도체 제조사인 마이크론 테크놀로지(NAS:MU)가 뉴욕에
          반도체 공장을 짓기 위해 최대 1천억 달러를 투자할 예정이라고 밝혔다.
          4일(현지시간) 뉴욕타임스에 따르면 마이크론은 이날 뉴욕주에 새로운
          컴퓨터 반도체 공장을 건설하는 데 앞으로 20년 이상 최대 1천억 달러를
          투자할 계획이라고 말했다. 미국에서 반도체 법이 통과한 이후 기업들이
          속속 미국내 투자를 강화하고 있다고 한다.
        </span>
      </div>
      <!-- cont -->
      <div v-if="activeTab === 'tab05'" class="isuCont">
        <strong class="tit"
          >5마이크론, 뉴욕 반도체 공장 설립에 1천억달러 투자 계획이 다
          있구나</strong
        >
        <span class="txt">
          미국 메모리 반도체 제조사인 마이크론 테크놀로지(NAS:MU)가 뉴욕에
          반도체 공장을 짓기 위해 최대 1천억 달러를 투자할 예정이라고 밝혔다.
          4일(현지시간) 뉴욕타임스에 따르면 마이크론은 이날 뉴욕주에 새로운
          컴퓨터 반도체 공장을 건설하는 데 앞으로 20년 이상 최대 1천억 달러를
          투자할 계획이라고 말했다. 미국에서 반도체 법이 통과한 이후 기업들이
          속속 미국내 투자를 강화하고 있다고 한다.
        </span>
      </div>
      <!-- cont -->
      <div v-if="activeTab === 'tab06'" class="isuCont">
        <strong class="tit"
          >6마이크론, 뉴욕 반도체 공장 설립에 1천억달러 투자 계획이 다
          있구나</strong
        >
        <span class="txt">
          미국 메모리 반도체 제조사인 마이크론 테크놀로지(NAS:MU)가 뉴욕에
          반도체 공장을 짓기 위해 최대 1천억 달러를 투자할 예정이라고 밝혔다.
          4일(현지시간) 뉴욕타임스에 따르면 마이크론은 이날 뉴욕주에 새로운
          컴퓨터 반도체 공장을 건설하는 데 앞으로 20년 이상 최대 1천억 달러를
          투자할 계획이라고 말했다. 미국에서 반도체 법이 통과한 이후 기업들이
          속속 미국내 투자를 강화하고 있다고 한다.
        </span>
      </div>
      <!-- cont -->
    </div>
    <!-- content -->

    <button @click="openModal('prIssue')">
      <img src="~/assets/img/web/issue_bullet.png" alt="주도" width="31" />
      <span><em>원전</em> 주도주</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="12" fill="#E2E6FF" />
        <path d="M10 7L15 12L10 17" stroke="#564DF4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <Modal
          class="prModal"
          :modal-id="'prIssue'"
          :show-modal="modals.prIssue"
          :close-modal="() => closeModal('prIssue')"
      >
        <template #header>
          <button type="button" class="modal-close" @click="closeModal('prIssue')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </template>
        <template #body>
          <div class="top">
            <strong>실시간 이슈와 주도주 확인하기</strong>
            <span>주식창앱에서 <br>오늘의 이슈 키워드별 주도주 확인이 가능합니다.</span>
            <span class="!text-[#4D0FFF]">AI캐치 서비스 찾기는 화면 하단을 참고해주세요</span>
          </div>
          <div class="img">
            <img src="~/assets/img/pr/bnr1.png" alt="정기결제">
          </div>
        </template>
        <template #footer>
          <button>
            <span>주식창 앱에서</span>
            <strong>실시간 이슈와 주도주 확인하기</strong>
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
      activeTab: 'tab01',
      modals: {
        prIssue: false
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
      const swiperIsuTab = new Swiper('.isuTab', {
        slidesPerView: 'auto',
        spaceBetween: 4,
        slideToClickedSlide: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }).mount()
      //
    }
  },
  methods: {
    showTab(tab) {
      this.activeTab = tab
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
@import "~/assets/css/pr/todayisu.css";
</style>

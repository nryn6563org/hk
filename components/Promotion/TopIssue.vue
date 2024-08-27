<template>
  <section class="topissue">
      <div class="sec_tit">
        <strong>종별 AI캐치</strong>
        <span>
          오늘 시장에서 주목하는 이슈를 알려드립니다. <br>
          누구나 <em>시장의 흐름을 한눈에 파악</em>할 수 있습니다.
        </span>
      </div>
      <!-- title -->
      <div class="quick_catch">
        <div class="chart-w">
          <div class="top">
            <span>오늘의 핫이슈</span>
            <button class="relv"><em>이슈</em><span>관련주 보기</span></button>
            <button @click="toggleOffcanvas">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.3658 6.65138L13.3723 6.65546L13.379 6.65933C14.4292 7.27158 14.4292 8.69656 13.379 9.3088L13.3723 9.31268L13.3658 9.31676L4.93688 14.5847C3.81561 15.2593 2.5 14.4725 2.5 13.2542V2.78718C2.5 1.51477 3.80421 0.766084 4.94531 1.38868L13.3658 6.65138Z"
                  stroke="white"
                />
              </svg>
              PLAY
            </button>
          </div>
          <!-- top -->

          <div class="chartbox">
            <img src="~/assets/img/quick_catch.png" alt="" />
          </div>
          <!-- chartbox -->
        </div>

        <div
          id="chartPlay"
          :class="{ 'offcanvas-open': isOffcanvasOpen }"
          class="offcanvas-wrap"
        >
          <div class="offcanvas-bottom">
            <!-- Offcanvas Content -->
            <div class="offcanvas-content">
              <div class="offcanvas-header">
                <strong>날짜선택</strong>

                <button class="close-button" @click="closeOffcanvas">
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
              </div>
              <!-- 오프캔버스 헤더 -->
              <div class="offcanvas-body">
                <div class="ch-date">
                  <button class="active">
                    <span>2024.01.31 (오늘)</span>
                    <em>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                      >
                        <path
                          d="M1.5 4.99995L8.23183 11L16.5 1"
                          stroke="#2151D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </em>
                  </button>
                  <button>
                    <span>2024.01.30</span>
                    <em>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                      >
                        <path
                          d="M1.5 4.99995L8.23183 11L16.5 1"
                          stroke="#2151D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </em>
                  </button>
                  <button>
                    <span>2024.01.29</span>
                    <em>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                      >
                        <path
                          d="M1.5 4.99995L8.23183 11L16.5 1"
                          stroke="#2151D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </em>
                  </button>
                  <button>
                    <span>2024.01.28</span>
                    <em>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                      >
                        <path
                          d="M1.5 4.99995L8.23183 11L16.5 1"
                          stroke="#2151D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </em>
                  </button>
                  <button>
                    <span>2024.01.27</span>
                    <em>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                      >
                        <path
                          d="M1.5 4.99995L8.23183 11L16.5 1"
                          stroke="#2151D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </em>
                  </button>
                  <button>
                    <span>2024.01.26</span>
                    <em>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                      >
                        <path
                          d="M1.5 4.99995L8.23183 11L16.5 1"
                          stroke="#2151D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </em>
                  </button>
                  <button>
                    <span>2024.01.25</span>
                    <em>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                      >
                        <path
                          d="M1.5 4.99995L8.23183 11L16.5 1"
                          stroke="#2151D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </em>
                  </button>
                  <button>
                    <span>2024.01.24</span>
                    <em>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                      >
                        <path
                          d="M1.5 4.99995L8.23183 11L16.5 1"
                          stroke="#2151D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </em>
                  </button>
                  <button>
                    <span>2024.01.23</span>
                    <em>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                      >
                        <path
                          d="M1.5 4.99995L8.23183 11L16.5 1"
                          stroke="#2151D1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </em>
                  </button>
                </div>
              </div>
              <!-- 오프캔버스 내용 -->
            </div>
          </div>
          <div class="offcanvas-overlay" @click="closeOffcanvas"></div>
        </div>
        <!-- 리스트 상세 내용 -->
      </div>
      <!-- 한발빠른 이슈 캐치 -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOffcanvasOpen: false
    }
  },
  methods: {
    toggleOffcanvas() {
      this.isOffcanvasOpen = !this.isOffcanvasOpen
    },
    closeOffcanvas() {
      this.isOffcanvasOpen = false
    }
  }
}
</script>

<style scoped>
@import "~/assets/css/todayIssue.css";
@import "~/assets/css/offcanvas.css";
.topissue{
  @apply bg-[#333340] pt-5
}
.topissue .sec_tit{
  @apply flex flex-col w-full gap-4 items-center pb-5
}
.topissue .sec_tit strong{
  @apply text-[20px] text-white font-bold leading-7
}
.topissue .sec_tit span{
  @apply text-[14px] text-white leading-5 text-center
}
.topissue .sec_tit span em{
  @apply text-[#ffd859] not-italic
}
.quick_catch{
  @apply !pb-5
}
</style>
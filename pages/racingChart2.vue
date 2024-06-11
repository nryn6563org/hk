<template>
  <div id="racingChartW">
    <div class="racing">
      <div class="top v2">
        <div>
          <strong>오늘의 이슈 & 섹터</strong>
          <span>
            <em>06. 05</em>
            <em>오후 03:30</em>
          </span>
        </div>
      <!-- // -->
      </div>
      <!-- //top -->

      <div class="chart">
        <img src="~/assets/img/DemoRacing.png" alt="" width="100%">

        <div class="chartBullet">
          <div class="bullet-txt">
            <span class="up">상승</span>
            <span class="dn">하락</span>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
              <path d="M34.6443 17.8631L34.6639 17.8754L34.6838 17.887C37.2821 19.4017 37.2821 22.9154 34.6838 24.43L34.6639 24.4417L34.6443 24.4539L12.7305 38.1498C9.94826 39.8221 6.69922 37.8717 6.69922 34.8608V7.6466C6.69922 4.50256 9.91448 2.6372 12.7561 4.18328L34.6443 17.8631Z" stroke="white" stroke-width="3" />
            </svg>
            <span>
            Play
          </span>
          </button>
        </div>
        <!-- // -->

        <div class="chart-bullet-txt">
          자료제공 : 주식창, 씽크풀
        </div>
        <!-- // -->
      </div>
      <!-- // -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentWidth: 1980, // Width of the content
      contentHeight: 1080, // Height of the content
      showDropdown: false
    }
  },
  mounted() {
    this.adjustZoom()
    window.addEventListener('resize', this.adjustZoom)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.adjustZoom)
  },
  methods: {
    adjustZoom() {
      const fixedContent = document.getElementById('racingChartW')
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      // Calculate scale factors
      const scaleX = Math.min(windowWidth, this.contentWidth) / this.contentWidth
      const scaleY = Math.min(windowHeight, this.contentHeight) / this.contentHeight

      // Use the smaller scale to ensure the content fits within the viewport and maximum size
      const scale = Math.min(scaleX, scaleY)

      // Apply the scale transform
      fixedContent.style.transform = 'translate(-50%, -50%) scale(' + scale + ')'

      // Adjust image dimensions to maintain aspect ratio
      const chartImg = this.$refs.chartImg
      if (chartImg) {
        chartImg.style.width = Math.min(this.contentWidth, 1980) * scale + 'px'
        chartImg.style.height = Math.min(this.contentHeight, 1080) * scale + 'px'
      }
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown // Toggle dropdown visibility
    },
    closeDropdown() {
      this.showDropdown = false
    }
  }
}
</script>

<style scoped>
@import '~/assets/css/racing.css';
.chart-bullet-txt{
  @apply text-[33px] text-[#d6d6d6] font-medium leading-[44px] right-[60px] !important
}
</style>

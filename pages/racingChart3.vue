<template>
  <div id="racingChartW">
    <div class="racing">
      <div class="top">
        <div>
          <span>AI 이슈 캐치</span>
        </div>
        <div>
          <div class="bullet-txt">
            <span class="up">상승</span>
            <span class="dn">하락</span>
          </div>
        </div>
      </div>

      <div class="chart">
        <img src="~/assets/img/racingDemo3.png" alt="" width="100%">
      </div>

      <div class="chart-bullet-txt">
          자료제공 (주)씽크풀
      </div>
      <!--  -->
    </div>
    <!--  -->
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

.racing{
  @apply bg-[url('~/assets/img/bgRacing.png')] bg-no-repeat gap-0 border-transparent p-[105px_240px]
}
.racing > .top {
    @apply px-[45px] h-[80px]
}
.racing > .top > div:first-child{
    @apply w-[calc(100%-228px)] justify-center pl-[228px]
}
.racing > .top > div:first-child span{
  @apply text-[38px] font-bold
}
.racing > .top > div > .bullet-txt{
  @apply w-[228px] pr-0
}
.racing > .top > div > .bullet-txt span{
  @apply gap-[15px] text-[30px] text-white
}
.racing > .chart{
  @apply mt-10
}
.racing > .chart-bullet-txt{
    @apply text-[#d6d6d6] text-[26px] flex w-full justify-end font-bold leading-[33px] pr-5 mt-[30px]
}
</style>

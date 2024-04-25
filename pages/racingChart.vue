<template>
  <div id="racingChartW">
    <div class="racing">
      <div class="top">
        <span>오늘의 핫이슈! </span>
        <button @click="toggleDropdown">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path d="M34.6443 17.8631L34.6639 17.8754L34.6838 17.887C37.2821 19.4017 37.2821 22.9154 34.6838 24.43L34.6639 24.4417L34.6443 24.4539L12.7305 38.1498C9.94826 39.8221 6.69922 37.8717 6.69922 34.8608V7.6466C6.69922 4.50256 9.91448 2.6372 12.7561 4.18328L34.6443 17.8631Z" stroke="white" stroke-width="3" />
          </svg>
          <span>
            Play
          </span>
        </button>
      </div>
      <div v-if="showDropdown" class="dropdownBox">
        <div class="top">
          <strong>날짜선택</strong>
          <button @click="closeDropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M30.7928 32.207C31.1833 32.5976 31.8165 32.5976 32.207 32.207C32.5976 31.8165 32.5976 31.1833 32.207 30.7928L30.7928 32.207ZM5.20711 3.79289C4.81658 3.40237 4.18342 3.40237 3.79289 3.79289C3.40237 4.18342 3.40237 4.81658 3.79289 5.20711L5.20711 3.79289ZM32.2072 5.20711C32.5977 4.81658 32.5977 4.18342 32.2072 3.79289C31.8167 3.40237 31.1835 3.40237 30.793 3.79289L32.2072 5.20711ZM3.79289 30.793C3.40237 31.1835 3.40237 31.8167 3.79289 32.2072C4.18342 32.5977 4.81658 32.5977 5.20711 32.2072L3.79289 30.793ZM32.207 30.7928L18.7071 17.2929L17.2929 18.7071L30.7928 32.207L32.207 30.7928ZM18.7071 17.2929L5.20711 3.79289L3.79289 5.20711L17.2929 18.7071L18.7071 17.2929ZM30.793 3.79289L17.2929 17.2929L18.7071 18.7071L32.2072 5.20711L30.793 3.79289ZM17.2929 17.2929L3.79289 30.793L5.20711 32.2072L18.7071 18.7071L17.2929 17.2929Z" fill="#111111"/>
            </svg>
          </button>
        </div>
        <div class="dateList">
          <button class="active">
            <span>2024.01.01</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
              <path d="M1 7.79994L12.6685 18L27 1" stroke="#2151D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button>
            <span>2024.01.01</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
              <path d="M1 7.79994L12.6685 18L27 1" stroke="#2151D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button>
            <span>2024.01.01</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
              <path d="M1 7.79994L12.6685 18L27 1" stroke="#2151D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button>
            <span>2024.01.01</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
              <path d="M1 7.79994L12.6685 18L27 1" stroke="#2151D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button>
            <span>2024.01.01</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
              <path d="M1 7.79994L12.6685 18L27 1" stroke="#2151D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button>
            <span>2024.01.01</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
              <path d="M1 7.79994L12.6685 18L27 1" stroke="#2151D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button>
            <span>2024.01.01</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
              <path d="M1 7.79994L12.6685 18L27 1" stroke="#2151D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button>
            <span>2024.01.01</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
              <path d="M1 7.79994L12.6685 18L27 1" stroke="#2151D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="chart">
        <img src="~/assets/img/DemoRacing.png" alt="">
      </div>
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
</style>

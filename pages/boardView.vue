<template>
  <div id="container">
    <div class="boardView">
      <div class="viewTop">
        <div class="title">
          [AI속보] 코로나19(렘데시비스),코로나가19(모더나),LNG 매수세 포착
        </div>
        <!-- 타이틀 -->

        <div class="date">
          <span>2024.01.01</span>
          <span>10:34</span>
        </div>
        <!-- 시간 -->

        <div class="btn-group">
          <button @click="adjTextSize('decrease')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 8V9.62963H8.6875V19H10.3125V12.4815V9.62963H15V8H4Z"
                fill="black"
              />
              <path
                d="M20 14.2002H17.8L16.2 14.2003L13 14.2002V15.8002H16.2L17.8 15.7999L20 15.8002V14.2002Z"
                fill="black"
              />
            </svg>
          </button>
          <button @click="adjTextSize('increase')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 5V6.55556H8.6875V19H10.3125V12.7778V6.55556H16V5H3Z"
                fill="black"
              />
              <path
                d="M21 14.2H17.8V11H16.2V14.2H13V15.8H16.2V19H17.8V15.8H21V14.2Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <!-- 텍스트 크기 버튼 -->
      </div>
      <!-- view 헤더 -->

      <div class="viewContent" ref="viewContent">
        오늘 시장에서 이슈가 예상되는 키워드와 관련종목을 알려드립니다. <br><br>

        (상승이슈) <br><br>

        ◆ 그린벨트 (△8.82%)<br>
        尹, 그린벨트 52년 만에 확 푼다…"지방소멸과 안 맞아" <br>
        -젠큐릭스 (개장전 +19.8%)<br>
        -EDGC (개장전 +13.0%)<br><br>

        ◆ 로봇 (△7.82%)<br>
        尹, 그린벨트 52년 만에 확 푼다…"지방소멸과 안 맞아" <br>
        -젠큐릭스 (개장전 +19.8%)<br>
        -EDGC (개장전 +13.0%)<br><br>

        ◆ 그린벨트 (△7.82%)<br>
        尹, 그린벨트 52년 만에 확 푼다…"지방소멸과 안 맞아" <br>
        -젠큐릭스 (개장전 +19.8%)<br>
        -EDGC (개장전 +13.0%)<br><br>

        ◆ 로봇 (△5.82%)<br>
        尹, 그린벨트 52년 만에 확 푼다…"지방소멸과 안 맞아" <br>
        -젠큐릭스 (개장전 +19.8%)<br>
        -EDGC (개장전 +13.0%)<br><br>

        (하락이슈)<br><br>

        ◆ STO (▼9.82%)<br>
        서울옥션블루, STO 증권신고서 제출… 기초자산은 '앤디워홀' <br>
        -젠큐릭스 (개장전 -23.0%)<br>
        -EDGC (개장전 -17.0%)<br>
        -EDGC (등락률 -3.0%)<br><br>

        그외 이슈 키워드 : 가스, 생체인식, 반도체, 2차전지 , 유가 등<br>
      </div>
      <!-- view 컨텐츠 -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'SubLayout',
  asyncData({ store }) {
    // 페이지 로딩 시 헤더 타이틀을 변경
    store.commit('setPageTitle', '페이지 타이틀')
    store.commit('setHeaderClass', 'sub')
    return {}
  },
  methods: {
    adjTextSize(action) {
      const viewContent = this.$refs.viewContent

      if (viewContent) {
        let currentFontSize = window.getComputedStyle(viewContent).fontSize
        currentFontSize = parseFloat(currentFontSize)

        if (action === 'increase') {
          if (currentFontSize < 22) {
            viewContent.style.fontSize = `${currentFontSize * 1.2}px`
            viewContent.style.lineHeight = `${currentFontSize * 1.6}px`
          } else if (currentFontSize >= 22) {
            viewContent.style.fontSize = '14px'
            viewContent.style.lineHeight = '20px'
          }
        } else if (action === 'decrease') {
          if (currentFontSize > 10) {
            viewContent.style.fontSize = `${currentFontSize * 0.8}px`
            viewContent.style.lineHeight = `${currentFontSize}px`
          } else if (currentFontSize <= 10) {
            viewContent.style.fontSize = '14px'
            viewContent.style.lineHeight = '20px'
          }
        }
      }
    }
  }
}
</script>

<style scoped>
@import "~/assets/css/boardView.css";
</style>

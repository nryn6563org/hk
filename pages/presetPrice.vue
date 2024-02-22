<template>
  <div id="container">
    <div class="signal_catch_w">
      <div class="top">
        <div class="card">
          <div class="signal sig01">
            <span>오늘<br />매수</span>
          </div>
          <div class="signal-info">
            <div class="txt">
              아직 발생된<br />
              매매신호가 없습니다.
            </div>
          </div>
        </div>
      </div>
      <!-- top -->

      <CatchTab></CatchTab>
      <!-- catchtab -->

      <div class="notJoinPrice">
        <div>
          <div class="txtbox">
            <span>
              신호캐치는 <br>
              <em>매일 3종목 무료</em>로 이용할 수 있습니다.
            </span>
            <span>
              매매타이밍을 <br>
              지금확인하시겠습니까?
            </span>
            <button class="sq">
              <span>매매신호 확인하기</span>
              <em>(이용가능 횟수 2/3회)</em>
            </button>
          </div>
          <div class="demoImg">
            <img src="~/assets/img/demoChart2.png" alt="데모차트" width="100%">
          </div>
        </div>
        <!-- // -->
        <div>
          <div class="txtbox">
            <span>
              오늘 무료 이용 가능 횟수를<br><em>모두 사용</em> 했습니다.
            </span>
            <span>
              더 많은 종목을 확인하시려면 <br>
              <em>상품 상세보기</em>를 클릭해주세요
            </span>
            <button>
              <span>AI캐치 서비스 상세보기</span>
            </button>
          </div>
          <div class="demoImg">
            <img src="~/assets/img/demoChart2.png" alt="데모차트" width="100%">
          </div>
        </div>
        <!-- // -->
      </div>
      <!-- notJoinPrice -->
    </div>
    <!--  -->

    <div class="signal_alarm_banner">
      <div class="banner">
        <div class="visual">
          <strong>내 종목 언제 매도해야 하나요?</strong>
          <span
            ><em>검증된 AI</em>가 <br />
            <em>정확한 매매타점</em>에
            <br />
            <em>앱알림</em>을 보내드립니다.
          </span>
        </div>
        <div class="list">
          <SignalList></SignalList>
        </div>
      </div>
    </div>
    <!-- signal_alarm_banner -->

    <div class="sigCatchSmry">
      <div class="signal">
        <strong
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.00001 19.6458C9.73295 20.4762 10.8053 21 12 21C13.1947 21 14.2671 20.4762 15 19.6458M16 2C18.387 3.18623 20.1726 5.40103 20.777 8.06448M7.77698 2C5.39 3.18623 3.60437 5.40103 3 8.06448M17.9974 13.1809V10.0001C17.9974 6.67781 15.3223 4.00009 12 4.00009C8.67772 4.00009 5.96637 6.56365 5.96637 10.0001V13.1594C5.96637 13.6425 5.89106 14.1225 5.74335 14.5809L5.00488 16.8724C4.98466 16.9352 5.02982 17 5.09376 17H18.8632C18.9308 17 18.9788 16.9341 18.958 16.8697L18.2146 14.5627C18.0707 14.1162 17.9974 13.65 17.9974 13.1809Z"
              stroke="#8B68EF"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </svg>
          신호캐치 한 줄 요약</strong
        >
        <div class="list">
          <span class="on">전종목 매매신호 조회!</span>
          <span class="on">실시간 매매타이밍 알림! <em>(최대50종목)</em></span>
          <span class="on">잘 팔아야 수익, 진짜 매도 잘 하는 AI!</span>
        </div>
      </div>
    </div>
    <!-- sigCatchSmry -->

    <div class="presentPriceBtn">
      <button>AI캐치 서비스 상세보기</button>
    </div>
    <!-- btn -->
  </div>
</template>
<script>
import CatchTab from '~/components/SignalCatch/CatchTab'
import SignalList from '~/components/SignalCatch/SignalList'
export default {
  components: {
    CatchTab,
    SignalList
  },
  layout: 'defaultLayout'
}
</script>
<style scoped>
@import '~/assets/css/main.css';
@import '~/assets/css/signal.css';

.signal_alarm_banner {
  @apply pt-0;
}
.signal_catch_w{
  @apply mb-0
}
</style>

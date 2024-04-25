<template>
  <section id="trading_w">
    <div class="trading_tab">
      <button :class="{active: activeTab === 'buy'}" @click="changeTab('buy')">오늘매수</button>
      <button :class="{active: activeTab === 'sell'}" @click="changeTab('sell')">오늘수익</button>
    </div>
    <!-- tab -->
    <div class="trading_tabContent">
      <div v-show="activeTab === 'buy'" class="buyContent">
        <div class="emptyTrading">
          <div class="top">
            <div class="title"><strong>오늘 <em class="up">매수신호</em>가 포착된 <br>종목이 없습니다.</strong></div>
            <div class="visual">
              <img src="~/assets/img/tradingSpiner.gif" alt="분석중" width="94">
              <img src="~/assets/img/tradingVisualBg.png" alt="그림자" width="100px">
              <span>매수타이밍 분석중...</span>
            </div>
          </div>
          <div class="monthTopList">
            <strong>최근 1개월 수익률 TOP 종목</strong>
            <table>
              <colgroup>
                <col width="135">
                <col width="92">
                <col width="*">
              </colgroup>
              <thead>
              <tr>
                <th scope="col">종목명</th>
                <th scope="col">매도일</th>
                <th scope="col">수익률</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--    종목없음    -->

        <div class="signalItemList">
          <div class="title">
            <strong>현재 <em class="up">매수신호</em>가 발생된 종목입니다.</strong>
            <span>(총 27종목)</span>
          </div>
          <!--   타이틀     -->

          <div class="signalGen">
            <span class="up">신호발생 15:00</span>
            <div class="genList">
              <div>
                <div class="obj"><span>한국경제TV</span><em>256630</em></div>
                <span class="price">69,000원</span></div>
              <div>
                <div class="obj"><span>카카오가나다</span><em>256630</em></div>
                <span class="price">1,269,000원</span></div>
              <div>
                <div class="obj"><span>삼성전자가나다라라</span><em>256630</em></div>
                <span class="price">69,000원</span></div>
            </div>
          </div>
          <!--  신호발생    -->

          <div class="signalGen">
            <span class="up">신호발생 15:00</span>
            <div class="genList">
              <div>
                <div class="obj"><span>한국경제TV</span><em>256630</em></div>
                <span class="price">69,000원</span></div>
              <div>
                <div class="obj"><span>카카오가나다</span><em>256630</em></div>
                <span class="price">1,269,000원</span></div>
              <div>
                <div class="obj"><span>삼성전자가나다라라</span><em>256630</em></div>
                <span class="price">69,000원</span></div>
            </div>
          </div>
          <!--  신호발생    -->

          <div class="signalGen">
            <span class="up">신호발생 15:00</span>
            <div class="genList">
              <div>
                <div class="obj"><span>한국경제TV</span><em>256630</em></div>
                <span class="price">69,000원</span></div>
              <div>
                <div class="obj"><span>카카오가나다</span><em>256630</em></div>
                <span class="price">1,269,000원</span></div>
              <div>
                <div class="obj"><span>삼성전자가나다라라</span><em>256630</em></div>
                <span class="price">69,000원</span></div>
            </div>
          </div>
          <!--  신호발생    -->

          <div class="signalGen">
            <span class="up">신호발생 15:00</span>
            <div class="genList">
              <div>
                <div class="obj"><span>한국경제TV</span><em>256630</em></div>
                <span class="price">69,000원</span></div>
              <div>
                <div class="obj"><span>카카오가나다</span><em>256630</em></div>
                <span class="price">1,269,000원</span></div>
              <div>
                <div class="obj"><span>삼성전자가나다라라</span><em>256630</em></div>
                <span class="price">69,000원</span></div>
            </div>
          </div>
          <!--  신호발생    -->
        </div>
      </div>
      <!--  매수  -->

      <div v-show="activeTab === 'sell'" class="sellContent">
        <div class="emptyTrading">
          <div class="top">
            <div class="title"><strong>오늘 <em class="dn">수익신호</em>가 포착된 <br>종목이 없습니다.</strong></div>
            <div class="visual">
              <img src="~/assets/img/tradingSpiner.gif" alt="분석중" width="94">
              <img src="~/assets/img/tradingVisualBg.png" alt="그림자" width="100px">
              <span>오늘수익 타이밍 분석중...</span>
            </div>
          </div>
          <div class="monthTopList">
            <strong>최근 1개월 수익률 TOP 종목</strong>
            <table>
              <colgroup>
                <col width="135">
                <col width="92">
                <col width="*">
              </colgroup>
              <thead>
              <tr>
                <th scope="col">종목명</th>
                <th scope="col">매도일</th>
                <th scope="col">수익률</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              <tr>
                <td><span>삼성전자전자</span></td>
                <td><span>24.01.01</span></td>
                <td><span class="up">+000.00%</span></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--    종목없음    -->

        <div class="signalItemList">
          <div class="title">
            <strong><em class="dn">오늘수익</em>이 발생된 종목입니다.</strong>
            <span>(총 27종목)</span>
          </div>
          <!--   타이틀     -->

          <div class="signalGen">
            <span class="up">신호발생 15:00</span>
            <div class="genList">
              <div>
                <div class="obj"><span>한국경제TV</span><em>256630</em></div>
                <span class="price up">69,000원</span></div>
              <div>
                <div class="obj"><span>카카오가나다</span><em>256630</em></div>
                <span class="price up">1,269,000원</span></div>
              <div>
                <div class="obj"><span>삼성전자가나다라라</span><em>256630</em></div>
                <span class="price up">69,000원</span></div>
            </div>
          </div>
          <!--  신호발생    -->

          <div class="signalGen">
            <span class="up">신호발생 15:00</span>
            <div class="genList">
              <div>
                <div class="obj"><span>한국경제TV</span><em>256630</em></div>
                <span class="price up">69,000원</span></div>
              <div>
                <div class="obj"><span>카카오가나다</span><em>256630</em></div>
                <span class="price up">1,269,000원</span></div>
              <div>
                <div class="obj"><span>삼성전자가나다라라</span><em>256630</em></div>
                <span class="price up">69,000원</span></div>
            </div>
          </div>
          <!--  신호발생    -->

          <div class="signalGen">
            <span class="up">신호발생 15:00</span>
            <div class="genList">
              <div>
                <div class="obj"><span>한국경제TV</span><em>256630</em></div>
                <span class="price up">69,000원</span></div>
              <div>
                <div class="obj"><span>카카오가나다</span><em>256630</em></div>
                <span class="price up">1,269,000원</span></div>
              <div>
                <div class="obj"><span>삼성전자가나다라라</span><em>256630</em></div>
                <span class="price up">69,000원</span></div>
            </div>
          </div>
          <!--  신호발생    -->

          <div class="signalGen">
            <span class="up">신호발생 15:00</span>
            <div class="genList">
              <div>
                <div class="obj"><span>한국경제TV</span><em>256630</em></div>
                <span class="price  up">69,000원</span></div>
              <div>
                <div class="obj"><span>카카오가나다</span><em>256630</em></div>
                <span class="price up">1,269,000원</span></div>
              <div>
                <div class="obj"><span>삼성전자가나다라라</span><em>256630</em></div>
                <span class="price up">69,000원</span></div>
            </div>
          </div>
          <!--  신호발생    -->
        </div>
      </div>
      <!--  매도  -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'buy'
    }
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style scoped>
@import "~/assets/css/tradingWrap.css";
</style>
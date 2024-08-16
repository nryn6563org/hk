<template>
  <div id="itemSignalAlarm">
    <SignalAlarmTop />

    <div class="alarm_list_box">
      <div v-for="(item, index) in alarmItems" :key="index">
        <div class="tit" @click="openModal(index)">
          <span v-html="item.title"> </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M5.5 5.5L11 11L5.5 16.5"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.917 5.5L17.417 11L11.917 16.5"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <!-- tit -->

        <div class="btn">
          <button :class="{ on: item.isActive }" @click="toggleAlarm(index)">
            <span>알림활성화</span>
          </button>
        </div>

        <IsaButton></IsaButton>
        <!-- 비가입버튼 -->
        <!-- btn -->

        <Transition
          name="bubble-fade"
          enter-active-class="animate__fadeIn"
          leave-active-class="animate__fadeOut"
        >
          <div
            v-if="item.showBubble"
            class="txt-bubble inbox almOn animate__animated"
            v-show="item.isActive"
          >
            '<span v-html="item.title"></span>' <br />
            <em>알림이 켜졌습니다.</em>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="29"
              viewBox="0 0 39 29"
              fill="none"
            >
              <g filter="url(#filter0_d_973_22890)">
                <path d="M31 16L31 3L8 3L31 16Z" fill="white" />
              </g>
              <defs>
                <filter
                  id="filter0_d_973_22890"
                  x="0"
                  y="0"
                  width="39"
                  height="29"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_973_22890"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_973_22890"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </Transition>

        <Transition
          name="bubble-fade2"
          enter-active-class="animate__fadeIn"
          leave-active-class="animate__fadeOut"
        >
          <div
            v-if="item.showBubble"
            class="txt-bubble inbox almOff animate__animated"
            v-show="!item.isActive"
          >
            '<span v-html="item.title"></span>' <br />
            <em>알림이 꺼졌습니다.</em>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="29"
              viewBox="0 0 39 29"
              fill="none"
            >
              <g filter="url(#filter0_d_973_22890)">
                <path d="M31 16L31 3L8 3L31 16Z" fill="white" />
              </g>
              <defs>
                <filter
                  id="filter0_d_973_22890"
                  x="0"
                  y="0"
                  width="39"
                  height="29"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_973_22890"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_973_22890"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </Transition>

        <!-- Modal for each item -->
        <Modal
          v-if="modals[index]"
          :key="index"
          :modal-id="'modal-' + index"
          :show-modal="modals[index]"
          :close-modal="() => closeModal(index)"
          class="isa_modal"
        >
          <template #header>
            <h1 v-html="item.title"></h1>
            <button
              type="button"
              class="modal-close"
              @click="closeModal(index)"
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
            <div v-if="modals[0]">
              <div class="top-txt">
                AI 적중률 상위 종목을 <br />감시해서 매수/매도신호를
                알려드립니다.
              </div>
              <!-- top-txt -->

              <div class="stg-alarm-item">
                <div class="tit">
                  <span><em>백발백중 AI</em> 적중률 상위  종목 신호 알림</span>
                </div>
                <div class="btn">
                  <button :class="{active: isModalActive}" @click="tglModalBtn">알림활성화</button>
                </div>
              </div>
              <!--  -->

              <div class="s_rcv">
                <img src="~/assets/img/ctwBnrBullet.gif" alt="블릿" width="35">
                <div>
                  <span><em>백발백중 종목만</em> 신호 받기</span>
                  <em>하단 [AI캐치 가입하기] 클릭!!</em>
                </div>
              </div>
              <!-- // -->

              <div class="basic-txt">
                <div>
                  <span>감시 종목 선정기준: <br>최근 1년간 매매적중률이 <em>80%</em>이상인 종목을 감시합니다.</span>
                </div>
                <div>
                  <span>감시 종목 업데이트 주기 : 매일 장개시전</span>
                </div>
                <div>
                  <span>최근 매수 알림 빈도 : 87회, 06.10(월)~06.14(금)</span>
                </div>
              </div>
              <!-- basic -->

              <div class="best-per">
                <div class="tp">
                  <div class="tit">
                    <img src="~/assets/img/bu_best.png" alt="베스트" width="25">
                    <em>BEST</em> 수익률
                  </div>
                  <div class="date">2024.06.18 기준</div>
                </div>
                <!-- top -->

                <div class="box">
                  <div>
                    <span class="obj">한국경제TV가나다라</span>
                    <span class="per"><em>+130.78%</em> 수익</span>
                  </div>

                  <div>
                    <span class="obj">한국경제TV가나다라</span>
                    <span class="per"><em>+130.78%</em> 수익</span>
                  </div>

                  <div>
                    <span class="obj">한국경제TV가나다라</span>
                    <span class="per"><em>+130.78%</em> 수익</span>
                  </div>
                </div>
                <!-- box -->
              </div>

              <div class="alm-item-list">
                <div class="top">
                  <div class="date">2024.6.13 업데이트</div>
                  <select name="" id="">
                    <option value="">최신매수순</option>
                    <option value="">최신매도순</option>
                    <option value="">전일비</option>
                  </select>
                </div>
                <!-- top -->

                <div class="list">
                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#적중률 : <em>98%</em></span>
                    </div>
                    <div class="bullet bu01">오늘매수</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#적중률 : <em>98%</em></span>
                    </div>
                    <div class="bullet bu02">오늘매도</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#적중률 : <em>98%</em></span>
                    </div>
                    <div class="bullet bu03">관망</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#적중률 : <em>98%</em></span>
                    </div>
                    <div class="bullet bu04">보유</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#적중률 : <em>98%</em></span>
                    </div>
                    <div class="bullet bu02">오늘매도</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#적중률 : <em>98%</em></span>
                    </div>
                    <div class="bullet bu05">****</div>
                  </div>
                </div>
                <!-- list -->
              </div>
              <!-- alm-item-list -->
            </div>
            <!-- 백발백중 -->

            <div v-else-if="modals[1]">
              <div class="top-txt">
                증권사 목표가가 상향된 종목을 <br>감시해서  매수/매도신호를 알려드립니다.
              </div>
              <!-- top-txt -->

              <div class="stg-alarm-item">
                <div class="tit">
                  <span>심층 분석 <em>목표가 상향</em> 종목 신호 알림</span>
                </div>
                <div class="btn">
                  <button :class="{active: isModalActive}" @click="tglModalBtn">알림활성화</button>
                </div>
              </div>
              <!--  -->

              <div class="s_rcv">
                <img src="~/assets/img/ctwBnrBullet.gif" alt="블릿" width="35">
                <div>
                  <span><em>목표가 상향 종목만</em> 신호 받기</span>
                  <em>하단 [AI캐치 가입하기] 클릭!!</em>
                </div>
              </div>
              <!-- // -->

              <div class="basic-txt">
                <div>
                  <span>감시 종목 선정기준: <br><em>최근 10일 이내</em>에 증권사에서 <em>목표가를 상향</em>한 종목 전체</span>
                </div>
                <div>
                  <span>감시 종목 업데이트 주기 : 매일 장개시전</span>
                </div>
                <div>
                  <span>최근 매수 알림 빈도 : 87회, 06.10(월)~06.14(금)</span>
                </div>
              </div>
              <!-- basic -->

              <div class="alm-item-list">
                <div class="top">
                  <div class="date">2024.6.13 업데이트</div>
                  <select name="" id="">
                    <option value="">최신매수순</option>
                    <option value="">최신매도순</option>
                    <option value="">전일비</option>
                  </select>
                </div>
                <!-- top -->

                <div class="list">
                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#6/12 목표가 상향</span>
                    </div>
                    <div class="bullet bu01">오늘매수</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#6/12 목표가 상향</span>
                    </div>
                    <div class="bullet bu02">오늘매도</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#6/12 목표가 상향</span>
                    </div>
                    <div class="bullet bu03">관망</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#6/12 목표가 상향</span>
                    </div>
                    <div class="bullet bu04">보유</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#6/12 목표가 상향</span>
                    </div>
                    <div class="bullet bu02">오늘매도</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#6/12 목표가 상향</span>
                    </div>
                    <div class="bullet bu03">관망</div>
                  </div>
                </div>
                <!-- list -->
              </div>
              <!-- alm-item-list -->
            </div>
            <!-- 목표가 상향 -->

            <div v-else-if="modals[2]">
              <div class="top-txt">
                변동성 상위 종목을 <br>감시해서 매수/매도신호를 알려 드립니다.
              </div>
              <!-- top-txt -->

              <div class="stg-alarm-item">
                <div class="tit">
                  <span>BIG 수익 <em>변동성 상위</em> 종목 신호 알림</span>
                </div>
                <div class="btn">
                  <button :class="{active: isModalActive}" @click="tglModalBtn">알림활성화</button>
                </div>
              </div>
              <!--  -->

              <div class="s_rcv">
                <img src="~/assets/img/ctwBnrBullet.gif" alt="블릿" width="35">
                <div>
                  <span><em>변동성 상위 종목만</em> 신호 받기</span>
                  <em>하단 [AI캐치 가입하기] 클릭!!</em>
                </div>
              </div>
              <!-- // -->

              <div class="basic-txt">
                <div>
                  <span>감시 종목 선정기준: <br><em>최근 20일 최고가</em>를 갱신한 종목</span>
                </div>
                <div>
                  <span>감시 종목 업데이트 주기 : 매일 장개시전</span>
                </div>
                <div>
                  <span>최근 매수 알림 빈도 : 87회, 06.10(월)~06.14(금)</span>
                </div>
              </div>
              <!-- basic -->

              <div class="alm-item-list">
                <div class="top">
                  <div class="date">2024.6.13 업데이트</div>
                  <select name="" id="">
                    <option value="">최신매수순</option>
                    <option value="">최신매도순</option>
                    <option value="">전일비</option>
                  </select>
                </div>
                <!-- top -->

                <div class="list">
                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#전일비 10%상승</span>
                    </div>
                    <div class="bullet bu01">오늘매수</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#전일비 10%상승</span>
                    </div>
                    <div class="bullet bu02">오늘매도</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#전일비 10%상승</span>
                    </div>
                    <div class="bullet bu03">관망</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#전일비 10%상승</span>
                    </div>
                    <div class="bullet bu04">보유</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#전일비 10%상승</span>
                    </div>
                    <div class="bullet bu02">오늘매도</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#전일비 10%상승</span>
                    </div>
                    <div class="bullet bu03">관망</div>
                  </div>
                </div>
                <!-- list -->
              </div>
              <!-- alm-item-list -->
            </div>
            <!-- 변동성 상위 -->

            <div v-else-if="modals[3]">
              <div class="top-txt">
                주요기관의 순매수 상위 종목을<br>감시해서 매수/매도신호를 알려드립니다.
              </div>
              <!-- top-txt -->

              <div class="stg-alarm-item">
                <div class="tit">
                  <span><em>수급 포착</em> 주요 기관 순매수 상위 신호 알림</span>
                </div>
                <div class="btn">
                  <button :class="{active: isModalActive}" @click="tglModalBtn">알림활성화</button>
                </div>
              </div>
              <!--  -->

              <div class="s_rcv">
                <img src="~/assets/img/ctwBnrBullet.gif" alt="블릿" width="35">
                <div>
                  <span><em>수급포착 종목만</em> 신호 받기</span>
                  <em>하단 [AI캐치 가입하기] 클릭!!</em>
                </div>
              </div>
              <!-- // -->

              <div class="basic-txt">
                <div>
                  <span>감시 종목 선정기준: <br><em>사모펀드, 연기금, 투자신탁</em> 각각 순매수 상위 50 종목</span>
                </div>
                <div>
                  <span>감시 종목 업데이트 주기 : 매일 장개시전</span>
                </div>
                <div>
                  <span>최근 매수 알림 빈도 : 87회, 06.10(월)~06.14(금)</span>
                </div>
              </div>
              <!-- basic -->

              <div class="alm-item-list">
                <div class="top">
                  <div class="date">2024.6.13 업데이트</div>
                  <select name="" id="">
                    <option value="">최신매수순</option>
                    <option value="">최신매도순</option>
                    <option value="">투자신탁 순매수</option>
                    <option value="">연기금 순매수</option>
                    <option value="">사모펀드 순매수</option>
                  </select>
                </div>
                <!-- top -->

                <div class="list">
                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#사모펀드</span>
                    </div>
                    <div class="bullet bu01">오늘매수</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#사모펀드</span>
                    </div>
                    <div class="bullet bu02">오늘매도</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#사모펀드</span>
                    </div>
                    <div class="bullet bu03">관망</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#사모펀드</span>
                    </div>
                    <div class="bullet bu04">보유</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#사모펀드</span>
                    </div>
                    <div class="bullet bu02">오늘매도</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#사모펀드</span>
                    </div>
                    <div class="bullet bu03">관망</div>
                  </div>
                </div>
                <!-- list -->
              </div>
              <!-- alm-item-list -->
            </div>
            <!-- 수급포착 -->
            <div v-else-if="modals[4]">
              <div class="top-txt">
                거래량 상승 종목을 <br>감시해서 매수/매도를 알려드립니다.
              </div>
              <!-- top-txt -->

              <div class="stg-alarm-item">
                <div class="tit">
                  <span><em>저가 선매수</em> 거래량 폭발 종목 신호알림</span>
                </div>
                <div class="btn">
                  <button :class="{active: isModalActive}" @click="tglModalBtn">알림활성화</button>
                </div>
              </div>
              <!--  -->

              <div class="s_rcv">
                <img src="~/assets/img/ctwBnrBullet.gif" alt="블릿" width="35">
                <div>
                  <span><em>거래량 폭발 종목만</em> 신호 받기</span>
                  <em>하단 [AI캐치 가입하기] 클릭!!</em>
                </div>
              </div>
              <!-- // -->

              <div class="basic-txt">
                <div>
                  <span>감시 종목 선정기준: <br>최근 <em>20일 최고 거래량 돌파</em> 종목</span>
                </div>
                <div>
                  <span>감시 종목 업데이트 주기 : 매일 장개시전</span>
                </div>
                <div>
                  <span>최근 매수 알림 빈도 : 87회, 06.10(월)~06.14(금)</span>
                </div>
              </div>
              <!-- basic -->

              <div class="alm-item-list">
                <div class="top">
                  <div class="date">2024.6.13 업데이트</div>
                  <select name="" id="">
                    <option value="">최신매수순</option>
                    <option value="">최신매도순</option>
                    <option value="">거래량 강도</option>
                  </select>
                </div>
                <!-- top -->

                <div class="list">
                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#최저대비 300%</span>
                    </div>
                    <div class="bullet bu01">오늘매수</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#최저대비 300%</span>
                    </div>
                    <div class="bullet bu02">오늘매도</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#최저대비 300%</span>
                    </div>
                    <div class="bullet bu03">관망</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#최저대비 300%</span>
                    </div>
                    <div class="bullet bu04">보유</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#최저대비 300%</span>
                    </div>
                    <div class="bullet bu02">오늘매도</div>
                  </div>

                  <div>
                    <div class="txt">
                      <span>삼성전자가나다라</span>
                      <span>#최저대비 300%</span>
                    </div>
                    <div class="bullet bu03">관망</div>
                  </div>
                </div>
                <!-- list -->
              </div>
              <!-- alm-item-list -->
              </div>
            <!-- 거래량 상승 -->
          </template>
          <template #footer>
          </template>
        </Modal>
        <!-- End modal -->
      </div>
      <!--  -->

      <transition name="fade" leave-active-class="animate__fadeOut">
        <div v-if="showOutbox" class="txt-bubble outbox animate__animated">
          <em>‘딱! 좋은 종목만 신호받기’</em> 에서 원하시는 유형의 알림을
          신청하시면 감시종목의 <em>매매알림을 받을 수 있습니다. </em>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="29"
            viewBox="0 0 39 29"
            fill="none"
          >
            <g filter="url(#filter0_d_973_22890)">
              <path d="M31 16L31 3L8 3L31 16Z" fill="white" />
            </g>
            <defs>
              <filter
                id="filter0_d_973_22890"
                x="0"
                y="0"
                width="39"
                height="29"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_973_22890"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_973_22890"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </transition>
    </div>

    <!-- End of itemSignalAlarm -->
  </div>
</template>

<script>
import Modal from '~/components/ModalWrap'
import SignalAlarmTop from '~/components/SignalCatch/SignalAlarmTop'
import IsaButton from '~/components/SignalCatch/IsaButton'

export default {
  components: {
    Modal,
    IsaButton,
    SignalAlarmTop
  },
  data() {
    return {
      alarmItems: [
        {
          title: '<em>백발백중</em> AI 적중률 상위 종목',
          isActive: false,
          showBubble: false
        },
        {
          title: '심층 분석 <em>목표가 상향</ 종목',
          isActive: false,
          showBubble: false
        },
        {
          title: '<em>수급 포착</em> 주요 기관 순매수 상위',
          isActive: false,
          showBubble: false
        },
        {
          title: '<em>Big</em> 수익 기대 <em>변동성 상위</em> 종목',
          isActive: false,
          showBubble: false
        },
        {
          title: '<em>저가 선매수</em> 거래량 폭발 종목',
          isActive: false,
          showBubble: false
        }
      ],
      showOutbox: true,
      modals: {},
      isModalActive: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.showOutbox = false
    }, 5000)
  },
  methods: {
    toggleAlarm(index) {
      this.alarmItems[index].isActive = !this.alarmItems[index].isActive
      this.alarmItems[index].showBubble = true
      setTimeout(() => {
        this.alarmItems[index].showBubble = false
      }, 3000)
    },
    openModal(index) {
      // Set modal state to true for the selected item
      this.$set(this.modals, index, true)
    },
    closeModal(index) {
      // Set modal state to false for the selected item
      this.$set(this.modals, index, false)
    },
    tglModalBtn() {
      this.isModalActive = !this.isModalActive
    }
  }
}
</script>

<style scoped>
@import "~/assets/css/itemSignalAlarm.css";

/* 활성화된 버튼 스타일 */
button.on {
  background-color: #00aaff;
  color: white;
}

/* 텍스트 버블 기본 스타일 */
.txt-bubble {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.txt-bubble[hidden] {
  opacity: 0;
}
</style>

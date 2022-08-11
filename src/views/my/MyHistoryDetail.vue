<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="bottom-padding">
          <div class="program-item program-item-history border-bottom-0">
            <router-link to="/my-history-detail">
              <div class="program-thumb">
                <img :src="resourceManager.getIMG('/@thumbnail.png')" />
              </div>
              <div class="program-info">
                <div class="program-date">
                  <span>2022-05-13</span>
                  <span class="text-primary">결제완료</span>
                </div>
                <div class="program-title">
                  프로그램제목프로그램제목프로그램멕스스물두자
                </div>
                <div class="program-code">주문코드 : MXG0BK7D4A</div>
                <div class="program-price">9,900원</div>
              </div>
            </router-link>
          </div>
          <div class="payment-info">
            <div class="box">
              <h2 class="m-b-10">결제정보</h2>
              <dl>
                <dt>상품 가격</dt>
                <dd>9,900원</dd>
              </dl>
              <div
                class="d-flex justify-content-between align-items-center m-b-10"
              >
                <h2>결제금액</h2>
                <div>9,900원</div>
              </div>
              <dl>
                <dt>결제방법</dt>
                <dd>Play 스토어 / 인앱결제</dd>
              </dl>
            </div>
          </div>
          <div class="payment-guide">
            <strong>프로그램 환불 요청하기</strong>
            <!-- case1. google play -->
            <p class="text-desc">
              Google Play를 통해 프로그램을 구매한 경우 <br />
              <router-link
                to="https://support.google.com/googleplay/workflow/9813244?p=refundAWF&visit_id=637792620759889745-1678796919&rd=1"
                class="text-primary text-underline"
                >Play 스토어를 통해 환불을 요청</router-link
              >해야합니다. <br />
              링크 접속 > 주문내역 > 취소할 내역 선택 > 환불요청 <br />
              <span class="text-danger"
                >48시간이 지나지 않았다면 Google Play를 통해 환불을 요청할 수
                있습니다. 자세한 내용은
                <router-link
                  to="https://support.google.com/googleplay/answer/2479637?hl=ko#zippy=%2C%EC%98%B5%EC%85%98-%EC%95%B1-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%97%90%EA%B2%8C-%EC%A7%80%EC%9B%90-%EC%9A%94%EC%B2%AD%2C%EC%95%B1-%EA%B2%8C%EC%9E%84-%EC%9D%B8%EC%95%B1-%EA%B5%AC%EB%A7%A4%EC%A0%95%EA%B8%B0-%EA%B2%B0%EC%A0%9C-%ED%8F%AC%ED%95%A8
"
                  class="text-primary text-underline"
                  >Google Play 환불정책</router-link
                >을 확인해주세요.</span
              >
            </p>
            <!-- case2. apple store -->
            <p class="text-desc">
              Apple 스토어에서 구매한 경우 <br />
              <router-link
                to="https://support.apple.com/en-us/HT202039"
                class="text-primary text-underline"
                >Apple 지원팀에 문의</router-link
              >해주세요.<br />
              앱스토어 > 계정 > 구입내역 > 취소할 내역 선택 > 환불요청 <br />
              <span class="text-danger"
                >7일 이내 구매를 취소할 수 있으나, 디지털 콘텐츠의 경우
                전자상거래법에 따라 그 권리가 제한될 수 있습니다. 자세한 내용은
                <router-link
                  to="https://www.apple.com/legal/internet-services/itunes/kr/terms.html"
                  class="text-primary text-underline"
                >
                  Apple 미디어 서비스 이용 약관</router-link
                >을 확인해주세요.</span
              >
            </p>
            <ul class="dot-list m-t-30">
              <li>
                구매 후 7일 이내 프로그램을 이용하지 않았을 경우, 주문 취소가
                가능합니다.
              </li>
              <li>
                프로그램을 이용했을 경우, 주문 취소가 불가합니다. <br />(ex.
                컨텐츠 상세 조회, 오디오 Play)
              </li>
            </ul>
          </div>
          <div class="invalid-feedback d-block m-t-10">2022-05-13 환불완료</div>
          <div class="valid-feedback d-block m-t-10">
            2022-05-13 프로그램 이용 시작
          </div>
          <div class="refund-reason">
            <h2>취소 사유</h2>
            <div class="box">
              취소사유작성시노출취소사유작성시노출취소사유작성시노출취소사유작성시노출취소사유작성시노출
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HistoryDetail",
  components: {},

  setup() {}
};
</script>

<style lang="scss" scoped>
.payment-info {
  margin-top: -10px;
  font-size: 15px;
  h2 {
    font-size: 15px;
    letter-spacing: -0.9px;
    margin-bottom: 0;
  }
  dl {
    font-size: 13px;
    color: $gray;
    border-bottom: 1px solid $border-color;
    margin-bottom: 10px;
    padding-bottom: 10px;
    dt {
      clear: left;
      float: left;
    }
    dd {
      text-align: right;
    }
    &:last-of-type {
      border-bottom: 0;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
}

.payment-guide {
  margin-top: 30px;
  > strong {
    font-size: 15px;
    font-weight: 400;
    display: block;
    margin-bottom: 10px;
  }
  .desc {
    font-size: 13px;
  }
}

.refund-reason {
  margin-top: 30px;
  font-size: 13px;
  h2 {
    font-weight: 400;
    font-size: 15px;
    display: block;
    margin-bottom: 10px;
  }
}
</style>

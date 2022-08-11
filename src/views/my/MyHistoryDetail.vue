<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="bottom-padding">
          <div class="program-item program-item-history border-bottom-0">
            <a href="history_detail.html">
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
            </a>
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
              <a href="" class="text-primary text-underline"
                >Play 스토어를 통해 환불을 요청</a
              >해야합니다. <br />
              링크 접속 > 주문내역 > 취소할 내역 선택 > 환불요청 <br />
              <span class="text-danger"
                >48시간이 지나지 않았다면 Google Play를 통해 환불을 요청할 수
                있습니다. 자세한 내용은
                <a href="" class="text-primary text-underline"
                  >Google Play 환불정책</a
                >을 확인해주세요.</span
              >
            </p>
            <!-- case2. apple store -->
            <p class="text-desc">
              Google Play를 통해 프로그램을 구매한 경우 <br />
              <a href="" class="text-primary text-underline"
                >Play 스토어를 통해 환불을 요청</a
              >해야합니다. <br />
              링크 접속 > 주문내역 > 취소할 내역 선택 > 환불요청 <br />
              <span class="text-danger"
                >48시간이 지나지 않았다면 Google Play를 통해 환불을 요청할 수
                있습니다. 자세한 내용은
                <a href="" class="text-primary text-underline"
                  >Google Play 환불정책</a
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

<style lang="scss" scoped></style>

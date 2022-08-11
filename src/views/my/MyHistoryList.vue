<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <ol>
          <li class="program-item program-item-history">
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
          </li>
          <li class="program-item program-item-history">
            <a href="history_detail.html">
              <div class="program-thumb">
                <img :src="resourceManager.getIMG('/@thumbnail.png')" />
              </div>
              <div class="program-info">
                <div class="program-date">
                  <span>2022-05-13</span>
                  <span class="text-danger">취소완료</span>
                </div>
                <div class="program-title">
                  프로그램제목프로그램제목프로그램멕스스물두자프로그램제목프로그램제목프로그램멕스스물두자
                </div>
                <div class="program-code">주문코드 : MXG0BK7D4A</div>
                <div class="program-price">9,900원</div>
              </div>
            </a>
            <div class="invalid-feedback d-block">2022-05-13 환불완료</div>
          </li>
          <li class="program-item program-item-history">
            <a href="history_detail.html">
              <div class="program-thumb">
                <img :src="resourceManager.getIMG('/@thumbnail.png')" />
              </div>
              <div class="program-info">
                <div class="program-date">
                  <span>2022-05-13</span>
                  <span class="text-primary">수업중</span>
                </div>
                <div class="program-title">
                  프로그램제목프로그램제목프로그램멕스스물두자
                </div>
                <div class="program-code">주문코드 : MXG0BK7D4A</div>
                <div class="program-price">9,900원</div>
              </div>
            </a>
            <div class="valid-feedback d-block">
              2022-05-13 프로그램 이용 시작
            </div>
          </li>
        </ol>
        <button type="button" class="btn-more">
          <i class="icon-more"></i><span>더보기</span>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HistoryList",
  components: {},

  setup() {}
};
</script>

<style lang="scss" scoped></style>

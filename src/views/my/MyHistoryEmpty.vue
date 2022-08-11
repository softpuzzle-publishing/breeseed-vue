<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="history-empty">
          <i class="icon-list-empty"></i>
          <p>구매 내역이 없습니다.</p>
        </div>
      </div>
      <div class="program-recommand">
        <h2>마음챙김 프로그램</h2>
        <div class="program-item">
          <router-link to="" class="program-thumb lock">
            <!-- 구독전 .lock 추가 -->
            <img :src="resourceManager.getIMG('/@thumbnail.png')" />
            <span class="badge bg-danger">Premium</span>
            <!-- <span class="badge bg-primary">구독중</span> -->
          </router-link>
          <div class="program-title">
            프로그램제목프로그램제목프로그램멕스스물두자
          </div>
          <div class="program-type">35일 프로그램</div>
          <div class="program-desc">
            프로그램간략설명프로그램간략설명프로그램간략설명프로그램간략설명프로그램간략설명프로그램간략설명오십자내외
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HistoryEmpty",
  components: {},

  setup() {}
};
</script>

<style lang="scss" scoped>
.history-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  min-height: 140px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 30px;
  p {
    font-size: 15px;
    color: #aaa;
    margin-top: 4px;
  }
}

.program-recommand {
  color: #fff;
  background: $primary;
  margin: 0 -30px;
  padding: 40px 30px 30px;
  padding-bottom: calc(constant(safe-area-inset-bottom) + 30px);
  padding-bottom: calc(env(safe-area-inset-bottom) + 30px);
  h2 {
    font-size: 18px;
    letter-spacing: -0.72px;
    margin-bottom: 20px;
  }
  .program-item {
    .program-title,
    .program-type,
    .program-desc {
      color: #fff;
    }
  }
}
</style>

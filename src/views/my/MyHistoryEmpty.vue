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
          <a href="#none" class="program-thumb lock">
            <!-- 구독전 .lock 추가 -->
            <img :src="resourceManager.getIMG('/@thumbnail.png')" />
            <span class="badge bg-danger">Premium</span>
            <!-- <span class="badge bg-primary">구독중</span> -->
          </a>
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

<style lang="scss" scoped></style>

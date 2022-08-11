<template>
  <section class="theme">
    <div class="theme-number">테마01</div>
    <div class="theme-title">
      테마타이틀테마타이틀테마타이틀 테마타이틀테마타이틀테마타이틀
    </div>
    <div class="theme-day" id="contents1">
      <strong>Day 1</strong>
      <p>데이교육설명문구데이교육설명문구데이교육설명문구</p>
    </div>
    <div class="program-item">
      <router-link to="" class="program-thumb watched">
        <!-- 청취 완료 .watched 추가 -->
        <img :src="resourceManager.getIMG('/@thumbnail.png')" />
        <span class="badge bg-primary">필수</span>
      </router-link>
      <div class="program-title">
        프로그램제목프로그램제목프로그램멕스스물두자
      </div>
      <div class="program-type">오디오 ㅣ 10분</div>
      <div class="program-desc">
        데이원컨텐츠간략설명데이원컨텐츠간략설명
      </div>
    </div>
    <div class="program-item">
      <router-link to="" class="program-thumb">
        <img :src="resourceManager.getIMG('/@thumbnail.png')" />
        <span class="badge bg-dark border border-2 border-primary">보너스</span>
      </router-link>
      <div class="program-title">
        프로그램제목프로그램제목프로그램멕스스물두자
      </div>
      <div class="program-type">오디오 ㅣ 10분</div>
      <div class="program-desc">
        데이원컨텐츠간략설명데이원컨텐츠간략설명
      </div>
    </div>
    <div class="program-item">
      <router-link to="" class="program-thumb lock">
        <!-- 구독전 .lock 추가 -->
        <img :src="resourceManager.getIMG('/@thumbnail.png')" />
        <span class="badge bg-primary">필수</span>
      </router-link>
      <div class="program-title">
        오늘 당신의 하루는 어땠나요. 지금 기록해 볼까요?
      </div>
      <div class="program-type">과제</div>
    </div>
    <div class="program-item">
      <router-link to="" class="program-thumb">
        <img :src="resourceManager.getIMG('/@thumbnail.png')" />
        <span class="badge bg-dark border border-2 border-primary">보너스</span>
      </router-link>
      <div class="program-title">데이원체화하기타이틀데이원체화하기타</div>
      <div class="program-type">체화하기</div>
      <div class="program-desc">
        데이원컨텐츠간략설명데이원컨텐츠간략설명
      </div>
    </div>

    <div class="theme-day" id="contents2">
      <strong>Day 2</strong>
      <p>데이교육설명문구데이교육설명문구데이교육설명문구</p>
    </div>
    <div class="program-item">
      <router-link to="" class="program-thumb watched">
        <!-- 청취 완료 .watched 추가 -->
        <img :src="resourceManager.getIMG('/@thumbnail.png')" />
        <span class="badge bg-primary">필수</span>
      </router-link>
      <div class="program-title">
        프로그램제목프로그램제목프로그램멕스스물두자
      </div>
      <div class="program-type">오디오 ㅣ 10분</div>
      <div class="program-desc">
        데이원컨텐츠간략설명데이원컨텐츠간략설명
      </div>
    </div>
    <div class="program-item">
      <router-link to="" class="program-thumb">
        <img :src="resourceManager.getIMG('/@thumbnail.png')" />
        <span class="badge bg-dark border border-2 border-primary">보너스</span>
      </router-link>
      <div class="program-title">
        프로그램제목프로그램제목프로그램멕스스물두자
      </div>
      <div class="program-type">오디오 ㅣ 10분</div>
      <div class="program-desc">
        데이원컨텐츠간략설명데이원컨텐츠간략설명
      </div>
    </div>
    <div class="program-item">
      <router-link to="" class="program-thumb lock">
        <!-- 구독전 .lock 추가 -->
        <img :src="resourceManager.getIMG('/@thumbnail.png')" />
        <span class="badge bg-primary">필수</span>
      </router-link>
      <div class="program-title">
        오늘 당신의 하루는 어땠나요. 지금 기록해 볼까요?
      </div>
      <div class="program-type">과제</div>
    </div>
    <div class="program-item">
      <router-link to="" class="program-thumb">
        <img :src="resourceManager.getIMG('/@thumbnail.png')" />
        <span class="badge bg-dark border border-2 border-primary">보너스</span>
      </router-link>
      <div class="program-title">데이원체화하기타이틀데이원체화하기타</div>
      <div class="program-type">체화하기</div>
      <div class="program-desc">
        데이원컨텐츠간략설명데이원컨텐츠간략설명
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProgramTheme",

  mounted() {}
};
</script>

<style lang="scss" scoped>
.theme {
  margin-bottom: 30px;
  & + .theme {
    margin-top: 60px;
  }
  .program-thumb {
    margin-bottom: 5px;
    padding-top: 33.33333%;
  }
  .program-type,
  .program-desc {
    margin-top: 2px;
  }
}
.theme-number {
  font-size: 15px;
  letter-spacing: -0.8px;
  margin-bottom: 4px;
}
.theme-title {
  font-size: 18px;
  color: $primary;
  margin-bottom: 30px;
}

.theme-day {
  display: flex;
  margin-bottom: 20px;
  scroll-margin-top: 60px;
  margin-top: 60px;
  strong {
    font-size: 18px;
    color: $primary;
    font-weight: 400;
    flex: 0 0 auto;
    margin-right: 20px;
  }
  p {
    font-size: 15px;
    color: $gray;
    letter-spacing: -0.9px;
    flex-grow: 1;
  }
  .theme-title + & {
    margin-top: 0;
  }
}
</style>

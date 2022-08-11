<template>
  <main id="main">
    <div class="program" id="programWrap">
      <aside id="aside">
        <div class="sidebar">
          <div class="go-stage-map">
            <button
              type="button"
              class="btn-stage-map"
              aria-label="씨앗 여정맵 보기"
            ></button>
          </div>
          <div class="scroll-area">
            <h2>
              <div>테마<span class="num">01</span></div>
            </h2>
            <ol class="theme-order">
              <!-- active: 선택됨 / ing: 현재 진도-->
              <li class="active ing"><a href="#contents1">1</a></li>
              <li><a href="#contents2">2</a></li>
              <li><a href="#contents3">3</a></li>
              <li><a href="#contents4">4</a></li>
              <li><a href="#contents5">5</a></li>
              <li><a href="#contents6">6</a></li>
              <li><a href="#contents7">7</a></li>
            </ol>
          </div>
        </div>
      </aside>
      <a href="#none" class="btn-grow-seed" aria-label="씨앗 키우기"></a>
      <div class="voice-choice">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="voice"
            id="voiceMail"
            checked
          />
          <label class="form-check-label" for="voiceMail">
            남자 보이스
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="voice"
            id="voiceFeail"
          />
          <label class="form-check-label" for="voiceFeail">
            여자 보이스
          </label>
        </div>
      </div>
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
          <a href="#none" class="program-thumb watched">
            <!-- 청취 완료 .watched 추가 -->
            <img :src="resourceManager.getIMG('/@thumbnail.png')" />
            <span class="badge bg-primary">필수</span>
          </a>
          <div class="program-title">
            프로그램제목프로그램제목프로그램멕스스물두자
          </div>
          <div class="program-type">오디오 ㅣ 10분</div>
          <div class="program-desc">
            데이원컨텐츠간략설명데이원컨텐츠간략설명
          </div>
        </div>
        <div class="program-item">
          <a href="#none" class="program-thumb">
            <img :src="resourceManager.getIMG('/@thumbnail.png')" />
            <span class="badge bg-dark border border-2 border-primary"
              >보너스</span
            >
          </a>
          <div class="program-title">
            프로그램제목프로그램제목프로그램멕스스물두자
          </div>
          <div class="program-type">오디오 ㅣ 10분</div>
          <div class="program-desc">
            데이원컨텐츠간략설명데이원컨텐츠간략설명
          </div>
        </div>
        <div class="program-item">
          <a href="#none" class="program-thumb lock">
            <!-- 구독전 .lock 추가 -->
            <img :src="resourceManager.getIMG('/@thumbnail.png')" />
            <span class="badge bg-primary">필수</span>
          </a>
          <div class="program-title">
            오늘 당신의 하루는 어땠나요. 지금 기록해 볼까요?
          </div>
          <div class="program-type">과제</div>
        </div>
        <div class="program-item">
          <a href="#none" class="program-thumb">
            <img :src="resourceManager.getIMG('/@thumbnail.png')" />
            <span class="badge bg-dark border border-2 border-primary"
              >보너스</span
            >
          </a>
          <div class="program-title">데이원체화하기타이틀데이원체화하기타</div>
          <div class="program-type">체화하기</div>
          <div class="program-desc">
            데이원컨텐츠간략설명데이원컨텐츠간략설명
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "Program",
  components: {},

  mounted() {
    //로드 후 .show 추가
    document.querySelector("#programWrap").classList.add("show");

    //사이드바 navi
    document.querySelectorAll(".theme-order a").forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document
          .querySelector(".theme-order .active")
          .classList.remove("active");
        this.parentElement.classList.add("active");
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  },
  setup() {}
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="intro">
    <div class="skip">
      <router-link to="/first" class="text-underline">건너뛰기</router-link>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="intro-item intro-item-1">
            <strong>
              여러분의 마음은 <br />
              “안녕” 하신 가요?
            </strong>
            <p>
              쉴 틈 없이 바쁜 일상, 불확실한 미래, <br />
              Covid-19 시대를 관통하고 있는 우리들. <br />
              크고 작은 스트레스로부터 <br />
              숨을 곳 없이 매일을 버티듯 살아가고 있지는 않나요? <br /><br />

              나름의 방식으로 잠깐 숨통을 틔우기도 하지만, <br />
              머지않아 다시 스트레스 속에서 허덕이는 <br />
              자신을 발견하신 적은 없으신 가요?
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="intro-item intro-item-2">
            <strong>
              삶의 파도를 멈출 수는 없지만, <br />
              파도 위를 서핑하는 법은 <br />
              배울 수 있습니다”
            </strong>
            <em>
              “You can’t stop the waves, <br />
              but you can learn to surf”
            </em>
            <p>
              마음챙김 명상은 수많은 임상적 검증을 통해 스트레스 관리의 새로운
              대안으로 주목받고 있습니다. <br />
              저희는 이러한 과학적 근거 기반의 <br />
              마음챙김 명상 프로그램의 시작인<br />
              MBSR(Mindfulness Based Stress Reduction)<br />
              프로그램 등의 주요한 치유 기전을<br />
              마음챙김 명상 프로그램에 녹여냈습니다. <br /><br />

              이제 ‘BreeSeed’과 함께, <br />
              삶에서 만날 파도들을 <br />
              지혜롭게 넘어갈 방법을 배워보아요.
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="intro-item intro-item-3">
            <strong>
              “꽃은 달려가지 않아요, <br />
              깊이 뿌리내릴 뿐.”
            </strong>
            <p>
              혹시 앞만 보고 바쁘게 달리기만 하지 않으셨나요? <br /><br />

              ‘BreeSeed’에서 제공하는 <br />
              마음챙김 명상 프로그램을 통해<br />
              당신의 마음에 치유와 회복의 씨앗을 심고,<br />
              물 주고, 햇빛도 비춰 주세요.<br />
              어느새 마음의 정원에<br />
              단단히 뿌리내린 치유의 꽃이 조금씩,<br />
              하지만 단단하게 자라날 거예요.
            </p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="start">
      <router-link to="/first" class="btn btn-light w-100 text-primary"
        >시작하기</router-link
      >
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

export default {
  name: "Intro",
  components: {},
  mounted() {
    const introSwiper = new Swiper(".intro .swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      },
      on: {
        beforeTransitionStart: function() {
          document
            .querySelector(".intro")
            .setAttribute("data-active-index", introSwiper.realIndex);
        }
      }
    });
  },
  setup() {}
};
</script>

<style lang="scss">
.intro {
  height: 100%;
  position: relative;
  .swiper-container,
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-slide {
    color: #fff;
    overflow: hidden;
  }
  .swiper-pagination {
    bottom: 95px;
    .swiper-pagination-bullet {
      width: 13px;
      height: 13px;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.39);
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      border-color: #fff;
      background: #fff;
    }
  }
  .intro-item {
    height: 100%;
    text-align: center;
    background: #3b7d47;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 120px;
    strong {
      font-size: 24px;
      line-height: 1.5;
      letter-spacing: -0.8px;
      font-weight: 400;
    }
    em {
      font-size: 18px;
    }
    p {
      font-size: 15px;
      letter-spacing: -0.6px;
      margin-top: 20px;
      text-align: center;
      line-height: 1.4;
    }
  }
  .intro-item-1 {
    background-image: url("#{$IMG_PATH}/bg-intro-1.svg");
  }
  .intro-item-2 {
    background-image: url("#{$IMG_PATH}/bg-intro-2.svg");
  }
  .intro-item-3 {
    background-image: url("#{$IMG_PATH}/bg-intro-3.svg");
  }
  .skip {
    position: absolute;
    left: 50%;
    bottom: 30px;
    z-index: 99;
    transform: translateX(-50%);
    bottom: 30px;
    bottom: calc(constant(safe-area-inset-bottom) + 30px);
    bottom: calc(env(safe-area-inset-bottom) + 30px);
    a {
      color: #fff;
      font-size: 18px;
    }
  }
  .start {
    position: absolute;
    left: 30px;
    right: 30px;
    bottom: 15px;
    z-index: 99;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s 0.1s;
    bottom: calc(constant(safe-area-inset-bottom) + 15px);
    bottom: calc(env(safe-area-inset-bottom) + 15px);
  }
  &[data-active-index="2"] {
    .start {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>

<template>
  <main id="main">
    <div class="home">
      <div class="back-area">
        <div class="bg"></div>
        <div class="group">
          <h1 class="logo"><b>B</b>reeseed</h1>
          <p class="special">
            <span class="text-light">Breeseed</span>는 왜 특별할까요?
          </p>
        </div>
      </div>
      <div class="around">
        <!-- 추천 컨텐츠 -->
        <section>
          <h2 class="text-heading">
            <div class="text-primary">닉네임닉네임</div>
            을 위한 추천 컨텐츠
          </h2>
          <p class="text-desc">
            바쁜 삶에 지친 마음의 근육을 단단하게 만드는 명상입니다. 저와함께
            행복의 씨앗을 심으러 가실까요?
          </p>
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
        </section>
        <!-- 5 Day 명상 -->
        <section>
          <h2 class="text-heading">5 Day 명상</h2>
          <p class="text-desc">
            명상이 어렵게만 느껴지시나요? <br />처음 시작하는 분들을 위한 5Days
            명상을 준비했어요!
          </p>
          <div class="program-item">
            <router-link to="" class="program-thumb day5">
              <img :src="resourceManager.getIMG('/@thumbnail.png')" />
            </router-link>
            <div class="program-desc">
              파이브데이프로그램설명파이브데이 프로그램설명파이브데이프로그램설
              명파이브데이프로그램설명파이브데이프 로그램슬
            </div>
          </div>
        </section>
        <!-- 토픽명상 -->
        <section>
          <div class="d-flex justify-content-between align-items-center m-b-10">
            <h2 class="text-heading mb-0">토픽 명상</h2>
            <router-link to="" class="more"
              >더보기 <i class="icon-arrow-right"></i
            ></router-link>
          </div>
          <p class="text-desc">
            명상이 어렵게만 느껴지시나요? <br />처음 시작하는 분들을 위한 5Days
            명상을 준비했어요!
          </p>
          <div class="gallery-slider">
            <div class="slide">
              <div class="program-item">
                <router-link to="" class="program-thumb">
                  <img :src="resourceManager.getIMG('/@thumbnail.png')" />
                </router-link>
                <div class="program-title">
                  토픽명상타이틀토픽명 두줄까지 노출돼요 두줄까지만 노출돼요!!
                </div>
                <div class="program-type">10분</div>
                <div class="program-desc">
                  토픽명상간략설명토픽명상간략설명토픽명상간략설명
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="program-item">
                <router-link to="#none" class="program-thumb">
                  <img :src="resourceManager.getIMG('/@thumbnail.png')" />
                </router-link>
                <div class="program-title">토픽명상타이틀토픽명</div>
                <div class="program-type">10분</div>
                <div class="program-desc">
                  토픽명상간략설명토픽명상간략설명토픽명상간략설명
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="program-item">
                <router-link to="#none" class="program-thumb">
                  <img :src="resourceManager.getIMG('/@thumbnail.png')" />
                </router-link>
                <div class="program-title">토픽명상타이틀토픽명</div>
                <div class="program-type">10분</div>
                <div class="program-desc">
                  토픽명상간략설명토픽명상간략설명토픽명상간략설명
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="program-item">
                <router-link to="" class="program-thumb">
                  <img :src="resourceManager.getIMG('/@thumbnail.png')" />
                </router-link>
                <div class="program-title">토픽명상타이틀토픽명</div>
                <div class="program-type">10분</div>
                <div class="program-desc">
                  토픽명상간략설명토픽명상간략설명토픽명상간략설명
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="program-item">
                <router-link to="" class="program-thumb">
                  <img :src="resourceManager.getIMG('/@thumbnail.png')" />
                </router-link>
                <div class="program-title">토픽명상타이틀토픽명</div>
                <div class="program-type">10분</div>
                <div class="program-desc">
                  토픽명상간략설명토픽명상간략설명토픽명상간략설명
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Home",
  components: {},
  mounted() {
    const $background = document.querySelector(".back-area");
    let opacity;

    let interaction = () => {
      if (window.pageYOffset > 30) {
        opacity = 1 - window.pageYOffset / 190;
      } else {
        opacity = 1;
      }
      gsap.to($background, 0, {
        opacity: opacity
      });
    };

    document.addEventListener("scroll", interaction, false);
  },
  setup() {}
};
</script>

<style lang="scss" scoped>
.home {
  margin: -30px -30px 0;
  padding-bottom: 60px;
}

.back-area {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
  padding: 50px 30px 0;
  height: 300px;
  .bg {
    background: $primary url("#{$IMG_PATH}/bg-around.svg") no-repeat 50% 0;
    background-size: 100% auto;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 300px;
  }
  .group {
    position: absolute;
    bottom: 126px;
    left: 30px;
    right: 30px;
  }
  .logo {
    color: #fff;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .special {
    background: $secondary;
    color: #56b36b;
    border-radius: 15px;
    padding: 1rem;
    text-align: center;
    font-size: 18px;
    letter-spacing: -0.72px;
  }
}

.around {
  position: relative;
  background: #fff;
  border-radius: 20px 20px 0 0;
  padding: 30px;
  margin-top: 190px;
  &::before {
    content: "";
    width: 45px;
    height: 58px;
    background: url("#{$IMG_PATH}/icon-plant.svg") no-repeat 0 0;
    position: absolute;
    left: 40px;
    top: -58px;
  }
  > section + section {
    margin-top: 50px;
  }
  section {
    .text-heading {
      margin-bottom: 10px;
    }
    .text-desc {
      margin-bottom: 20px;
    }
  }
}
</style>

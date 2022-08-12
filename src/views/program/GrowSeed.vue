<template>
  <main id="main">
    <div class="bottom-padding">
      <a
        href="#none"
        class="btn-grow-seed-about"
        aria-label="씨앗 키우기란?"
      ></a>
      <div class="text-heading m-b-10">
        <span class="text-primary">라이프이즈원펀치</span> 님의 <br />안정의
        씨앗이 심어졌어요.
      </div>
      <p class="text-desc">
        Breeze와 함께 안정의 씨앗이 어떤 꽃이 될 지 기대해 볼까요? <br />씨앗을
        키우기 위해서는 명상 리워드가 필요합니다.
      </p>
      <div class="overall-progress">
        <div class="info">
          <div class="all">전체진도율</div>
          <div class="percent"><span>66</span>%</div>
        </div>
        <div class="progress-area">
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 0%"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <i class="marker"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="grow-theme">
        <GrowSeedTheme />
      </div>
    </div>
  </main>
</template>

<script>
import GrowSeedTheme from "@/views/program/GrowSeedTheme";

export default {
  name: "GrowSeed",
  components: {
    GrowSeedTheme
  },

  mounted() {
    //진도율
    setTimeout(function() {
      document.querySelector(".progress-bar").style.width = "66%";
      document.querySelector(".progress-bar").setAttribute("aria-valuenow", 66);
    }, 300);
  },
  setup() {}
};
</script>

<style lang="scss" scoped>
.btn-grow-seed-about {
  display: inline-block;
  background: url("#{$IMG_PATH}/icon-question.svg") no-repeat 0 0;
  width: 30px;
  height: 30px;
  position: fixed;
  right: 30px;
  top: 10px;
  z-index: $Z_INDEX_GROW_SEED;
}

.overall-progress {
  display: flex;
  align-items: flex-end;
  margin-top: 45px;
  margin-bottom: 30px;
  padding-right: 15px;
  &::before {
    content: "";
    display: block;
    width: 60px;
    height: 60px;
    background: url("#{$IMG_PATH}/icon-seed-card.svg") no-repeat 0 0;
    margin-right: 10px;
  }
  .info {
    padding-bottom: 5px;
    margin-right: 35px;
    .all {
      font-size: 13px;
      color: $gray;
    }
    .percent {
      font-size: 25px;
      color: $primary;
      line-height: 1.2;
    }
  }
  .progress-area {
    flex-grow: 1;
    padding-bottom: 5px;
  }
  .marker {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url("#{$IMG_PATH}/icon-marker.svg") no-repeat 0 0;
    position: absolute;
    right: -15px;
    top: -30px;
  }
}
</style>

<template>
  <div class="grow-theme-item" data-theme="1" data-level="7">
    <div class="num">테마 01</div>
    <div class="title">호흡 다스리기</div>
    <div class="state">
      <span data-required="Y" data-bonus="Y"></span>
      <span data-required="Y" data-bonus="Y"></span>
      <span data-required="N" data-bonus="Y"></span>
      <span data-required="Y" data-bonus="N"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="level-icon"><i></i></div>
  </div>
  <div class="grow-theme-item" data-theme="2" data-level="3">
    <div class="num">테마 02</div>
    <div class="title">몸 마음챙김</div>
    <div class="state">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="level-icon"><i></i></div>
  </div>
  <div class="grow-theme-item" data-theme="3" data-level="5">
    <div class="num">테마 03</div>
    <div class="title">마음챙김의 유익함</div>
    <div class="state">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="level-icon"><i></i></div>
  </div>
  <div class="grow-theme-item" data-theme="4" data-level="6">
    <div class="num">테마 04</div>
    <div class="title">스트레스 이해하기</div>
    <div class="state">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="level-icon"><i></i></div>
  </div>
  <div class="grow-theme-item" data-theme="5" data-level="0">
    <div class="num">테마 05</div>
    <div class="title">스트레스 다루기</div>
    <div class="state">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="level-icon"><i></i></div>
  </div>
</template>

<script>
export default {
  name: "GrowSeedTheme",

  mounted() {},
  setup() {}
};
</script>

<style lang="scss" scoped>
.grow-theme-item {
  background-color: $muted;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  & + .grow-theme-item {
    margin-top: 10px;
  }
  .num {
    color: #fff;
    font-size: 13px;
    margin-bottom: 4px;
  }
  .title {
    color: #fff;
    font-size: 18px;
  }
  .state {
    margin-top: 35px;
    display: flex;
    align-items: center;
    line-height: 1;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      line-height: 1;
      background: #aaa;
      margin-right: 3px;
      border: 1px solid #aaa;
    }
  }
  .level-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    i {
      display: block;
      background-position: 0 0;
      background-repeat: no-repeat;
      width: 100px;
      height: 100px;
    }
  }
  &:not([data-level="0"]) {
    background-color: $primary;
    .state {
      span {
        background-color: #339349;
        border-color: #339349;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: contain;
        &[data-required="Y"] {
          background-color: $primary;
          border-color: #fff;
          &[data-bonus="Y"] {
            background-color: $primary;
            border-color: #fff;
            &::before {
              content: "";
              display: block;
              width: 10px;
              height: 10px;
              border: 1px solid #fff;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
  &[data-theme="1"] {
    i {
      background-image: url("#{$IMG_PATH}/seed-level-1-0.svg");
    }
    &[data-level="1"] i {
      background-image: url("#{$IMG_PATH}/seed-level-1-1.svg");
    }
    &[data-level="2"] i {
      background-image: url("#{$IMG_PATH}/seed-level-1-2.svg");
    }
    &[data-level="3"] i {
      background-image: url("#{$IMG_PATH}/seed-level-1-3.svg");
    }
    &[data-level="4"] i {
      background-image: url("#{$IMG_PATH}/seed-level-1-4.svg");
    }
    &[data-level="5"] i {
      background-image: url("#{$IMG_PATH}/seed-level-1-5.svg");
    }
    &[data-level="6"] i {
      background-image: url("#{$IMG_PATH}/seed-level-1-6.svg");
    }
    &[data-level="7"] i {
      background-image: url("#{$IMG_PATH}/seed-level-1-7.svg");
    }
  }
  &[data-theme="2"] {
    i {
      background-image: url("#{$IMG_PATH}/seed-level-2-0.svg");
    }
    &[data-level="1"] i {
      background-image: url("#{$IMG_PATH}/seed-level-2-1.svg");
    }
    &[data-level="2"] i {
      background-image: url("#{$IMG_PATH}/seed-level-2-2.svg");
    }
    &[data-level="3"] i {
      background-image: url("#{$IMG_PATH}/seed-level-2-3.svg");
    }
    &[data-level="4"] i {
      background-image: url("#{$IMG_PATH}/seed-level-2-4.svg");
    }
    &[data-level="5"] i {
      background-image: url("#{$IMG_PATH}/seed-level-2-5.svg");
    }
    &[data-level="6"] i {
      background-image: url("#{$IMG_PATH}/seed-level-2-6.svg");
    }
    &[data-level="7"] i {
      background-image: url("#{$IMG_PATH}/seed-level-2-7.svg");
    }
  }
  &[data-theme="3"] {
    i {
      background-image: url("#{$IMG_PATH}/seed-level-3-0.svg");
    }
    &[data-level="1"] i {
      background-image: url("#{$IMG_PATH}/seed-level-3-1.svg");
    }
    &[data-level="2"] i {
      background-image: url("#{$IMG_PATH}/seed-level-3-2.svg");
    }
    &[data-level="3"] i {
      background-image: url("#{$IMG_PATH}/seed-level-3-3.svg");
    }
    &[data-level="4"] i {
      background-image: url("#{$IMG_PATH}/seed-level-3-4.svg");
    }
    &[data-level="5"] i {
      background-image: url("#{$IMG_PATH}/seed-level-3-5.svg");
    }
    &[data-level="6"] i {
      background-image: url("#{$IMG_PATH}/seed-level-3-6.svg");
    }
    &[data-level="7"] i {
      background-image: url("#{$IMG_PATH}/seed-level-3-7.svg");
    }
  }
  &[data-theme="4"] {
    i {
      background-image: url("#{$IMG_PATH}/seed-level-4-0.svg");
    }
    &[data-level="1"] i {
      background-image: url("#{$IMG_PATH}/seed-level-4-1.svg");
    }
    &[data-level="2"] i {
      background-image: url("#{$IMG_PATH}/seed-level-4-2.svg");
    }
    &[data-level="3"] i {
      background-image: url("#{$IMG_PATH}/seed-level-4-3.svg");
    }
    &[data-level="4"] i {
      background-image: url("#{$IMG_PATH}/seed-level-4-4.svg");
    }
    &[data-level="5"] i {
      background-image: url("#{$IMG_PATH}/seed-level-4-5.svg");
    }
    &[data-level="6"] i {
      background-image: url("#{$IMG_PATH}/seed-level-4-6.svg");
    }
    &[data-level="7"] i {
      background-image: url("#{$IMG_PATH}/seed-level-4-7.svg");
    }
  }
  &[data-theme="5"] {
    i {
      background-image: url("#{$IMG_PATH}/seed-level-5-0.svg");
    }
    &[data-level="1"] i {
      background-image: url("#{$IMG_PATH}/seed-level-5-1.svg");
    }
    &[data-level="2"] i {
      background-image: url("#{$IMG_PATH}/seed-level-5-2.svg");
    }
    &[data-level="3"] i {
      background-image: url("#{$IMG_PATH}/seed-level-5-3.svg");
    }
    &[data-level="4"] i {
      background-image: url("#{$IMG_PATH}/seed-level-5-4.svg");
    }
    &[data-level="5"] i {
      background-image: url("#{$IMG_PATH}/seed-level-5-5.svg");
    }
    &[data-level="6"] i {
      background-image: url("#{$IMG_PATH}/seed-level-5-6.svg");
    }
    &[data-level="7"] i {
      background-image: url("#{$IMG_PATH}/seed-level-5-7.svg");
    }
  }
}
</style>

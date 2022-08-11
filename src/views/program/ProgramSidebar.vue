<template>
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
</template>

<script>
export default {
  name: "ProgramSidebar",

  mounted() {}
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: $SIDEBAR_WIDTH;
  padding-top: 50px;
  background: $primary;
  position: fixed;
  left: -$SIDEBAR_WIDTH;
  top: 0;
  bottom: 0;
  z-index: $Z_INDEX_SIDEBAR;
  transition: left 0.5s 0.28s ease-in-out;
  padding-bottom: 60px;
  .scroll-area {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 15px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;
    color: #fff;
    padding-right: 10px;
    margin-bottom: 20px;
    &::before {
      content: "";
      width: 16px;
      height: 3px;
      background: #339349;
      transform: translateY(5px);
      margin-right: 10px;
    }
    .num {
      display: block;
      text-align: center;
      color: #fff;
      font-size: 18px;
      line-height: 1.11;
      letter-spacing: 0.36px;
    }
  }
}

.theme-order {
  text-align: center;
  padding-left: 5px;
  margin-bottom: 20px;
  > li {
    position: relative;
    & + li {
      margin-top: 20px;
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    color: $muted;
    font-size: 18px;
    margin: 0 auto;
  }
  .active {
    &::before {
      content: "";
      width: 62px;
      height: 50px;
      border-radius: 50rem 0 0 50rem;
      background: #fff;
      position: absolute;
      left: 9px;
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
    }
    a {
      background: $primary;
      color: #fff;
    }
  }
  .ing {
    &::after {
      content: "";
      width: 8px;
      height: 8px;
      background: $danger;
      border-radius: 50%;
      position: absolute;
      right: 4px;
      top: 50%;
      z-index: 1;
      transform: translateY(-50%);
    }
  }
}

.go-stage-map {
  width: $SIDEBAR_WIDTH;
  position: absolute;
  left: 0;
  top: 0;
  height: 50px;
  background: $primary;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-stage-map {
  background: url("#{$IMG_PATH}/icon-map.svg") no-repeat 0 0;
  width: 30px;
  height: 30px;
}
</style>

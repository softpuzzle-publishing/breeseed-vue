<template>
  <main id="main">
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#modal-grow-up"
      id="btn"
    >
      자람 효과
    </button>
  </main>

  <div class="modal modal-slide-up" id="modal-grow-up" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <h1 class="slide-up-title">
            <span class="text-primary">햇살 비추기</span> 성공
          </h1>
          <div class="grow-up-success grow-up-success-1">
            <!-- grow-up-success-1 ~ 4 -->
            오늘의 과제도 파이팅 해주세요!
          </div>
          <div class="m-t-40">
            <VButton
              type="button"
              color="btn-primary"
              class="w-100"
              data-bs-dismiss="modal"
              >닫기</VButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/templates/elements/VButton";

export default {
  name: "GrowUp",
  components: {
    VButton
  },

  mounted() {
    setTimeout(function() {
      document.querySelector("#btn").click();
    }, 20);
  },
  setup() {}
};
</script>

<style lang="scss" scoped>
.grow-up-success {
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  &::before {
    content: "";
    display: block;
    width: 315px;
    height: 160px;
    position: absolute;
    left: 50%;
    top: -160px;
    transform: translateX(-50%);
    opacity: 0;
    top: -100px;
    z-index: -1;
    transition: all 0.5s 0.3s ease;
  }
  .modal.show & {
    &::before {
      top: -160px;
      opacity: 1;
    }
  }
  &[class^="grow-up-success"] {
    &::before {
      background-repeat: no-repeat;
      background-position: 0 0;
    }
    &.grow-up-success-1::before {
      background-image: url("#{$IMG_PATH}/bg-grow-up-1.svg");
    }
    &.grow-up-success-2::before {
      background-image: url("#{$IMG_PATH}/bg-grow-up-2.svg");
    }
    &.grow-up-success-3::before {
      background-image: url("#{$IMG_PATH}/bg-grow-up-3.svg");
    }
    &.grow-up-success-4::before {
      background-image: url("#{$IMG_PATH}/bg-grow-up-4.svg");
    }
  }
}
</style>

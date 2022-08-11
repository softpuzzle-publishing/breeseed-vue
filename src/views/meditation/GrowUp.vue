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

<style lang="scss" scoped></style>

<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="review-form">
          <span class="badge bg-primary">필수</span>
          <div class="title">
            과제제목과제제목과제제목과제제목과제제목과제제목최대글자스물네자
          </div>
          <div class="desc">
            과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명글자수백자내외권장
          </div>
          <VTextareaFake
            >과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명다설줄과제설명글자수백자내외권장</VTextareaFake
          >
          <div class="length-count"><strong>0</strong> / 250</div>
        </div>
      </div>
      <div class="bottom">
        <div class="d-grid gap-2">
          <VButton type="button" color="btn-primary">저장</VButton>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VButton from "@/templates/elements/VButton";
import VTextareaFake from "@/templates/elements/VTextareaFake";

export default {
  name: "ReviewWrite",
  components: {
    VButton,
    VTextareaFake
  },

  mounted() {},
  setup() {}
};
</script>

<style lang="scss" scoped></style>

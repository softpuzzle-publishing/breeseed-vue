<template>
  <main id="main">
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#modal-first-feeling"
      id="btn"
    >
      첫호감 표시
    </button>
  </main>

  <div class="modal modal-slide-up" id="modal-first-feeling" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <h1 class="slide-up-title">
            <span class="text-primary">첫호감 표시</span>
          </h1>
          <p class="slide-up-title-desc">
            Breeze 앱을 이용해보시니 어떤가요? <br />첫호감을 표시해주세요!
          </p>
          <div class="feeling-choice">
            <input type="radio" name="firstFeeling" id="firstFellingBad" />
            <label for="firstFellingBad">
              <span class="bad"></span>아쉬워요
            </label>
            <input type="radio" name="firstFeeling" id="firstFellingGood" />
            <label for="firstFellingGood">
              <span class="good"></span>좋아요
            </label>
          </div>
          <div class="m-t-40">
            <div class="row">
              <div class="col-5">
                <VButton
                  type="button"
                  color="btn-link"
                  class="w-100 px-2 text-underline text-gray"
                  data-bs-dismiss="modal"
                  >다음에요</VButton
                >
              </div>
              <div class="col-7">
                <VButton
                  type="button"
                  color="btn-primary"
                  class="w-100 px-2"
                  data-bs-dismiss="modal"
                  >의견을 제출할께요!</VButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/templates/elements/VButton";

export default {
  name: "FirstFeeling",
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

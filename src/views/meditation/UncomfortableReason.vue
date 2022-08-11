<template>
  <main id="main">
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#modal-uncomfortable-reason"
      id="btn"
    >
      어떤 점이 불편하셨나요?
    </button>
  </main>

  <div
    class="modal modal-slide-up"
    id="modal-uncomfortable-reason"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <h1 class="slide-up-title">
            <span class="text-primary">어떤 점이 불편하셨나요?</span>
          </h1>
          <div class="mt-5">
            <div class="form-check my-4">
              <input
                class="form-check-input"
                type="radio"
                name="uncomfortable"
                id="uncomfortable1"
              />
              <label class="form-check-label" for="uncomfortable1">
                컨텐츠가 어려웠어요.
              </label>
            </div>
            <div class="form-check my-4">
              <input
                class="form-check-input"
                type="radio"
                name="uncomfortable"
                id="uncomfortable2"
              />
              <label class="form-check-label" for="uncomfortable2">
                컨텐츠가 더 많았으면 좋겠어요.
              </label>
            </div>
            <div class="form-check my-4">
              <input
                class="form-check-input"
                type="radio"
                name="uncomfortable"
                id="uncomfortable3"
              />
              <label class="form-check-label" for="uncomfortable3">
                앱 사용이 불편했어요.
              </label>
            </div>
            <div class="form-check my-4">
              <input
                class="form-check-input"
                type="radio"
                name="uncomfortable"
                id="uncomfortable4"
              />
              <label class="form-check-label" for="uncomfortable4">
                목소리가 집중이 잘 되지 않았어요.
              </label>
            </div>
            <div class="form-check my-4">
              <input
                class="form-check-input"
                type="radio"
                name="uncomfortable"
                id="uncomfortable5"
              />
              <label class="form-check-label" for="uncomfortable5">
                기타
              </label>
            </div>
            <div>
              <VTextarea rows="2"></VTextarea>
            </div>
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
                <VButton type="button" color="btn-primary" class="w-100 px-2"
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
import VTextarea from "@/templates/elements/VTextarea";

export default {
  name: "UncomfortableReason",
  components: {
    VButton,
    VTextarea
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

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
            <VRadio id="uncomfortable1" name="uncomfortable" class="my-4"
              >컨텐츠가 어려웠어요.</VRadio
            >
            <VRadio id="uncomfortable2" name="uncomfortable" class="my-4"
              >컨텐츠가 더 많았으면 좋겠어요.</VRadio
            >
            <VRadio id="uncomfortable3" name="uncomfortable" class="my-4"
              >앱 사용이 불편했어요.</VRadio
            >
            <VRadio id="uncomfortable4" name="uncomfortable" class="my-4"
              >목소리가 집중이 잘 되지 않았어요.</VRadio
            >
            <VRadio id="uncomfortable4" name="uncomfortable" class="my-4"
              >기타</VRadio
            >
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
import VRadio from "@/templates/elements/VRadio";

export default {
  name: "UncomfortableReason",
  components: {
    VButton,
    VTextarea,
    VRadio
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

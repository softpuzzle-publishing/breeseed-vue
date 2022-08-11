<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <p class="text-heading m-b-30">
          <span class="text-primary">사용하실 닉네임을</span><br />
          입력해주세요.
        </p>
        <div>
          <div class="row align-items-center m-b-5">
            <div class="col d-flex align-items-center">
              <label for="" class="form-label mb-0">닉네임</label>
            </div>
            <div class="col-auto">
              <span class="time-count">(8/10)</span>
            </div>
          </div>
          <div class="row gx-3 align-items-center">
            <div class="col">
              <div class="position-relative">
                <VInputTextField
                  placeholder="10자 내외, 한글/영문/숫자 포함 입력"
                ></VInputTextField>
                <VButtonInputDelete></VButtonInputDelete>
              </div>
            </div>
            <div class="col-auto">
              <VButton
                type="button"
                color="btn-primary"
                size="btn-sm"
                shape="btn-flat"
                >인증확인</VButton
              >
            </div>
          </div>
          <p class="valid-feedback" style="display: block">
            랜덤 닉네임입니다.
          </p>
        </div>
      </div>
      <div class="bottom">
        <div class="d-grid gap-2">
          <VButton
            type="button"
            color="btn-primary"
            @click="$router.push('/home')"
            >시작하기</VButton
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VButton from "@/templates/elements/VButton";
import VButtonInputDelete from "@/templates/elements/VButtonInputDelete";

export default {
  name: "ProfileSetting",
  components: {
    VButton,
    VButtonInputDelete
  },

  setup() {}
};
</script>

<style lang="scss" scoped></style>

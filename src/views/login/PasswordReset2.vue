<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="mb-5">
          <label for="" class="form-label">신규 비밀번호 입력</label>
          <div class="position-relative">
            <VInputTextField
              type="password"
              placeholder="비밀번호 입력"
            ></VInputTextField>
            <VButtonInputType></VButtonInputType>
            <VButtonInputDelete></VButtonInputDelete>
          </div>
          <p class="invalid-feedback" style="display: block">
            8-20자, 문자/숫자/기호 2종류 이상 조합으로 입력해주세요.
          </p>
        </div>
        <div>
          <label for="" class="form-label">신규 비밀번호 확인</label>
          <div class="position-relative">
            <VInputTextField
              type="password"
              placeholder="비밀번호 확인"
            ></VInputTextField>
            <VButtonInputType></VButtonInputType>
            <VButtonInputDelete></VButtonInputDelete>
          </div>
          <p class="invalid-feedback" style="display: block">
            신규 비밀번호를 먼저 입력해주세요.
          </p>
        </div>
      </div>
      <div class="bottom">
        <div class="d-grid gap-2">
          <VButton
            type="button"
            color="btn-primary"
            @click="$router.push('/password-reset-result')"
            >비밀번호 재설정</VButton
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VButton from "@/templates/elements/VButton";
import VInputTextField from "@/templates/elements/VInputTextField";
import VButtonInputDelete from "@/templates/elements/VButtonInputDelete";
import VButtonInputType from "@/templates/elements/VButtonInputType";

export default {
  name: "PasswordReset2",
  components: {
    VButton,
    VInputTextField,
    VButtonInputDelete,
    VButtonInputType
  },

  setup() {}
};
</script>

<style lang="scss" scoped></style>

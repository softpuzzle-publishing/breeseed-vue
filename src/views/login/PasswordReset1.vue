<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="mb-5">
          <label for="" class="form-label">휴대폰 번호</label>
          <p class="form-text">가입하신 휴대폰 번호를 입력해주세요.</p>
          <div class="row gx-3 align-items-center">
            <div class="col">
              <div class="position-relative">
                <VInputTextField
                  type="tel"
                  placeholder="(-)제외하고 숫자만 입력"
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
                >인증하기</VButton
              >
            </div>
          </div>
          <p class="valid-feedback" style="display: block">
            인증하기 버튼을 클릭해주세요.
          </p>
        </div>
        <div class="mb-5">
          <div class="row align-items-center m-b-5">
            <div class="col d-flex align-items-center">
              <label for="" class="form-label mb-0">인증 번호</label>
              <span class="time-count align-middle m-s-10">03:00</span>
            </div>
            <div class="col-auto">
              <span class="time-count">인증번호 재발송(2/5)</span>
            </div>
          </div>
          <div class="row gx-3 align-items-center">
            <div class="col">
              <div class="position-relative">
                <VInputTextField
                  type="tel"
                  placeholder="인증번호 입력"
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
            휴대폰 번호 인증이 완료되었습니다.
          </p>
        </div>
        <div>
          <label for="" class="form-label">어아다</label>
          <p class="form-text">가입하신 아이디를 입력해주세요.</p>
          <div class="position-relative">
            <VInputTextField placeholder="아이디 입력"></VInputTextField>
            <VButtonInputDelete></VButtonInputDelete>
          </div>
          <p class="invalid-feedback" style="display: block">
            올바른 아이디를 입력해주세요.
          </p>
        </div>
      </div>
      <div class="bottom">
        <div class="d-grid gap-2">
          <VButton
            type="button"
            color="btn-primary"
            @click="$router.push('/password-reset-2')"
            >다음</VButton
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

export default {
  name: "PasswordReset1",
  components: {
    VButton,
    VInputTextField,
    VButtonInputDelete
  },

  setup() {}
};
</script>

<style lang="scss" scoped></style>

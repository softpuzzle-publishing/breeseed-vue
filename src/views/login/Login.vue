<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="mb-5">
          <label for="" class="form-label">아이디/휴대폰 번호</label>
          <div class="position-relative">
            <VInputTextField
              placeholder="아이디 또는 휴대폰 번호(숫자) 입력"
            ></VInputTextField>
            <VButtonInputDelete></VButtonInputDelete>
          </div>
          <p class="valid-feedback" style="display: block">
            인증하기 버튼을 클릭해주세요.
          </p>
        </div>
        <div>
          <label for="" class="form-label">비밀번호</label>
          <div class="position-relative">
            <VInputTextField
              type="password"
              placeholder="비밀번호 입력"
            ></VInputTextField>
            <VButtonInputType></VButtonInputType>
            <VButtonInputDelete></VButtonInputDelete>
          </div>
          <p class="invalid-feedback" style="display: block">
            인증번호가 일치하지 않습니다.
          </p>
        </div>
        <div class="login-menu">
          <router-link to="/id-find">아이디 찾기</router-link>
          <span class="bar"></span>
          <router-link to="/password-reset-1">비밀번호 재설정</router-link>
        </div>
      </div>
      <div class="bottom">
        <div class="already-join">
          <p class="me-2">계정이 없으신가요?</p>
          <router-link to="/join-step-1" class="text-primary text-underline"
            >회원가입</router-link
          >
        </div>
        <div class="d-grid gap-2">
          <VButton
            type="button"
            color="btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modal-password-campaign"
            >로그인</VButton
          >
        </div>
      </div>
    </div>
  </main>

  <div
    class="modal"
    id="modal-password-campaign"
    tabindex="-1"
    data-bs-backdrop="static"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">비밀번호 변경 캠페인</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="text-heading">
            비밀번호를 6개월 동안 <br /><span class="text-primary"
              >변경하지 않으셨습니다.</span
            >
          </p>
          <p class="text-basis">
            회원님, 같은 비밀번호를 오래 사용하셨네요. <br />
            주기적인 비밀번호 변경을 통해 개인정보를 <br />
            안전하게 보호하세요!
          </p>
        </div>
        <div class="modal-footer">
          <div class="d-grid gap-2 w-100">
            <VButton type="button" color="btn-primary"
              >비밀번호 변경하기</VButton
            >
            <VButton type="button" color="btn-secondary"
              >6개월 자동연장하기</VButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/templates/elements/VButton";
import VInputTextField from "@/templates/elements/VInputTextField";
import VButtonInputDelete from "@/templates/elements/VButtonInputDelete";
import VButtonInputType from "@/templates/elements/VButtonInputType";

export default {
  name: "Login",
  components: {
    VButton,
    VInputTextField,
    VButtonInputDelete,
    VButtonInputType
  },

  setup() {}
};
</script>

<style lang="scss" scoped>
.login-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  a {
    font-size: 15px;
    letter-spacing: -0.9px;
  }
}
.bar {
  display: inline-block;
  width: 1px;
  height: 10px;
  background: #e5e5e5;
  margin: 0 12px;
}
</style>

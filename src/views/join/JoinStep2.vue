<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="join-step">
          <ol role="navigation">
            <li>1<span class="dot"></span></li>
            <li class="active" aria-current="true">
              2<span class="dot"></span>
            </li>
            <li>3<span class="dot"></span></li>
          </ol>
        </div>
        <div class="mb-5">
          <label for="" class="form-label">휴대폰 번호</label>
          <p class="form-text">본인 명의의 휴대폰 번호를 입력해주세요.</p>
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
        <div>
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
          <p class="invalid-feedback" style="display: block">
            인증번호가 일치하지 않습니다.
          </p>
        </div>
      </div>
      <div class="bottom">
        <div class="already-join">
          <p class="me-2">이미 가입하셨나요?</p>
          <router-link to="/login" class="text-primary text-underline"
            >로그인</router-link
          >
        </div>
        <div class="d-grid gap-2">
          <VButton
            type="button"
            color="btn-primary"
            @click="$router.push('/join-step-3')"
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
  name: "JoinStep2",
  components: {
    VButton,
    VInputTextField,
    VButtonInputDelete
  },

  setup() {}
};
</script>

<style lang="scss" scoped></style>

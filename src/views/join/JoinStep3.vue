<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="join-step">
          <ol role="navigation">
            <li>1<span class="dot"></span></li>
            <li>2<span class="dot"></span></li>
            <li class="active" aria-current="true">
              3<span class="dot"></span>
            </li>
          </ol>
        </div>
        <div class="mb-5">
          <label for="" class="form-label">아이디</label>
          <p class="form-text">아이디 입력 후 중복 체크를 진행해주세요.</p>
          <div class="row gx-3 align-items-center">
            <div class="col">
              <div class="position-relative">
                <VInputTextField
                  placeholder="6-12자 이내, 영문/숫자만 입력"
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
                disabled
                >인증하기</VButton
              >
            </div>
          </div>
          <p class="valid-feedback" style="display: block">
            사용 가능한 아이디입니다.
          </p>
        </div>
        <div class="mb-5">
          <label for="" class="form-label">비밀번호 입력</label>
          <div class="position-relative">
            <VInputTextField
              type="password"
              placeholder="8-20자 이내, 문자/숫자/기호 2종류 조합"
            ></VInputTextField>
            <VButtonInputType></VButtonInputType>
            <VButtonInputDelete></VButtonInputDelete>
          </div>
          <p class="valid-feedback" style="display: block">
            안전한 비밀번호입니다.
          </p>
        </div>
        <div>
          <label for="" class="form-label">비밀번호 확인</label>
          <div class="position-relative">
            <VInputTextField
              type="password"
              placeholder="8-20자 이내, 문자/숫자/기호 2종류 조합"
            ></VInputTextField>
            <VButtonInputType></VButtonInputType>
            <VButtonInputDelete></VButtonInputDelete>
          </div>
          <p class="invalid-feedback" style="display: block">
            비밀번호가 일치하지 않습니다.
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
            @click="$router.push('/join-complete')"
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
import VButtonInputType from "@/templates/elements/VButtonInputType";

export default {
  name: "JoinStep3",
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

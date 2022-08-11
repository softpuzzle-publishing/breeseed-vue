<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <p class="text-heading m-b-30">
          <span class="text-primary">기관코드 인증</span><br />
          안녕하세요! 반가워요:)
        </p>
        <div>
          <label for="" class="form-label">기관코드</label>
          <div class="row gx-3 align-items-center">
            <div class="col">
              <div class="position-relative">
                <VInputTextField
                  placeholder="전달받은 기관코드 입력"
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
          <p class="invalid-feedback" style="display: block">
            올바른 기관코드를 입력해주세요.
          </p>
        </div>
        <div class="privacy-agree">
          <strong>개인정보 국내 제3자 제공 동의</strong>
          <p class="form-text m-b-10">
            아래의 목적으로 개인정보를 제3자에게 제공합니다.
          </p>
          <div class="text-box">
            <div class="inner">
              약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
              약관내용약관내용약관내용약관내용약관내용약관내용
            </div>
          </div>
          <div class="agree point m-t-5">
            <VCheckbox id="agree"
              >제 3자 정보제공 동의
              <span class="text-primary">(필수)</span></VCheckbox
            >
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="d-grid gap-2">
          <VButton
            type="button"
            color="btn-primary"
            @click="$router.push('/profile-setting')"
            >매칭하기</VButton
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
import VCheckbox from "@/templates/elements/VCheckbox";

export default {
  name: "CodeAuthentication",
  components: {
    VButton,
    VInputTextField,
    VButtonInputDelete,
    VCheckbox
  },

  setup() {}
};
</script>

<style lang="scss" scoped></style>

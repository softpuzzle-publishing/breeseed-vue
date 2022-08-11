<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="mb-5">
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
                  value="메디플러스솔루션"
                ></VInputTextField>
                <VButtonInputDelete></VButtonInputDelete>
              </div>
            </div>
          </div>
          <p class="invalid-feedback" style="display: block">
            이미 사용하고 있는 닉네임입니다.
          </p>
        </div>
        <div class="mb-5">
          <label for="" class="form-label">휴대폰 번호</label>
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
                data-bs-toggle="modal"
                data-bs-target="#modal-my-mobile-change"
                >변경하기</VButton
              >
            </div>
          </div>
          <p class="valid-feedback" style="display: block">
            휴대폰 번호를 업데이트했습니다.
          </p>
          <p class="form-text text-dark mt-1">
            <span class="text-primary">인증됨:</span> 휴대폰 번호를 인증해주셔서
            감사합니다.
          </p>
          <p class="form-text text-dark mt-1">
            휴대폰 번호는<span class="text-danger"> 24시간에 한 번만 변경</span
            >할 수 있습니다.<br />나중에 다시 시도해주세요.
          </p>
        </div>
      </div>
      <div class="bottom m-t-20">
        <div class="d-grid gap-2 w-100">
          <VButton type="button" color="btn-primary" disabled>저장</VButton>
        </div>
      </div>
    </div>
  </main>

  <div
    class="modal"
    id="modal-my-mobile-change"
    tabindex="-1"
    data-bs-backdrop="static"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">휴대폰 번호 변경</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
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
        <div class="modal-footer">
          <div class="d-grid gap-2 w-100">
            <VButton type="button" color="btn-primary">저장</VButton>
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

export default {
  name: "MyInfoEdit",
  components: {
    VButton,
    VInputTextField,
    VButtonInputDelete
  },

  setup() {}
};
</script>

<style lang="scss" scoped></style>

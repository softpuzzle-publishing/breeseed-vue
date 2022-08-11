<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="join-step">
          <ol role="navigation">
            <li class="active" aria-current="true">
              1<span class="dot"></span>
            </li>
            <li>2<span class="dot"></span></li>
            <li>3<span class="dot"></span></li>
          </ol>
        </div>
        <div class="agree point m-b-15">
          <VCheckbox id="agreeAll">전체 동의하기</VCheckbox>
        </div>
        <div class="agree">
          <VCheckbox id="agree1"
            >이용약관 동의 <span class="text-primary">(필수)</span></VCheckbox
          >
          <button type="button" aria-label="내용보기">
            <i class="icon-arrow-right"></i>
          </button>
        </div>
        <div class="agree">
          <VCheckbox id="agree2"
            >개인정보처리방침 동의
            <span class="text-primary">(필수)</span></VCheckbox
          >
          <button type="button" aria-label="내용보기">
            <i class="icon-arrow-right"></i>
          </button>
        </div>
        <div class="agree">
          <VCheckbox id="agree3"
            >개인정보 수집 및 이용 동의
            <span class="text-primary">(필수)</span></VCheckbox
          >
          <button
            type="button"
            aria-label="내용보기"
            data-bs-toggle="modal"
            data-bs-target="#modal-terms-privacy-use"
          >
            <i class="icon-arrow-right"></i>
          </button>
        </div>
        <div class="agree">
          <VCheckbox id="agree4"
            >마케팅 수신 동의
            <span class="text-primary">(필수)</span></VCheckbox
          >
          <button type="button" aria-label="내용보기">
            <i class="icon-arrow-right"></i>
          </button>
        </div>
        <div class="agree point m-t-15">
          <VCheckbox id="agree5"
            >만 14세 이상입니다.
            <span class="text-primary">(필수)</span></VCheckbox
          >
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
            @click="$router.push('/join-step-2')"
            >다음</VButton
          >
        </div>
      </div>
    </div>
  </main>

  <div
    class="modal"
    id="modal-terms-privacy-use"
    tabindex="-1"
    data-bs-backdrop="static"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">개인정보 수집 및 이용 동의</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="modal-text">
            제 1 장 총칙 <br /><br />

            제 1 조 (목적)<br />
            본 약관은 통계청이 운영하는 나라통계시스템 운영홈페이지(이하 “당
            사이트”)에서 제공하는 모든 서비스(이하 “서비스”)의 이용조건 및 절차,
            이용자와 당 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을
            규정함을 목적으로 합니다.<br /><br />

            제 2 조 (약관의 효력과 변경)<br />
            ① 당 사이트는 이용자가 본 약관 내용에 동의하는 것을 조건으로
            이용자에게 서비스를 제공하며, 당 사이트의 서비스 제공 행위 및
            이용자의 서비스 사용 행위에는 본 약관을 우선적으로
            적용하겠습니다.<br />
            ② 당 사이트는 본 약관을 사전 고지 없이 변경할 수 있으며, 변경된
            약관은 당 사이트 내에 공지함으로써 이용자가 직접 확인하도록 할
            것입니다. 이용자가 변경된 약관에 동의하지 아니하는 경우 본인의
            회원등록을 취소(회원탈퇴)할 수 있으며, 계속 사용할 경우에는 약관
            변경에 대한 암묵적 동의로 간주됩니다. 변경된 약관은 공지와 동시에 그
            효력을 발휘합니다.<br /><br />

            제 3 조 (약관 외 준칙)<br />
            본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법,
            정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 기타 관련 법령의
            규정에 의합니다.<br /><br />

            제 4 조 (용어의 정의)<br />
            ① 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br />
            1. 이용자 : 본 약관에 따라 당 사이트가 제공하는 서비스를 받는 자<br /><br />

            제 1 장 총칙 <br /><br />

            제 1 조 (목적)<br />
            본 약관은 통계청이 운영하는 나라통계시스템 운영홈페이지(이하 “당
            사이트”)에서 제공하는 모든 서비스(이하 “서비스”)의 이용조건 및 절차,
            이용자와 당 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을
            규정함을 목적으로 합니다.<br /><br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/templates/elements/VButton";
import VCheckbox from "@/templates/elements/VCheckbox";

export default {
  name: "JoinStep1",
  components: {
    VButton,
    VCheckbox
  },

  setup() {}
};
</script>

<style lang="scss" scoped></style>

<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="bottom-padding">
          <h2 class="menu-title">필수항목</h2>
          <ul class="menu-list">
            <li>
              <router-link to="#modal-terms-service" data-bs-toggle="modal"
                >서비스 이용약관</router-link
              >
            </li>
            <li>
              <router-link to="#modal-terms-privacy" data-bs-toggle="modal"
                >개인정보처리방침</router-link
              >
            </li>
            <li>
              <router-link to="#modal-terms-privacy-use" data-bs-toggle="modal"
                >개인정보 수집 및 이용 동의</router-link
              >
            </li>
          </ul>
          <h2 class="menu-title m-t-40">선택항목</h2>
          <ul class="menu-list">
            <li class="d-block">
              <div class="d-flex align-items-center justify-content-between">
                <VCheckbox id="agreeMarketing"
                  >마케팅 / 광고성 정보 수신 동의</VCheckbox
                >
                <router-link
                  to="#collapse-agree-marketing"
                  class="agree-toggler"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapse-agree-marketing"
                  aria-label="선택항목 상세보기 토글"
                  ><i class="icon-arrow-right"></i
                ></router-link>
              </div>
              <div class="collapse" id="collapse-agree-marketing">
                <div class="box mt-4">
                  <p class="text-primary font-size-13">
                    Breeseed에서 제공하는 각종 소식, 혜택 및 이벤트, 사은품 등에
                    대한 안내를 받을 수 있습니다.
                  </p>
                  <div class="px-2 mt-4">
                    <div class="row gx-0">
                      <div class="col">
                        <VCheckbox id="agreePush">앱 푸시</VCheckbox>
                      </div>
                      <div class="col">
                        <VCheckbox id="agreeAlarm">알림톡</VCheckbox>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
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
import VCheckbox from "@/templates/elements/VCheckbox";

export default {
  name: "Terms",
  components: {
    VCheckbox
  },

  mounted() {},
  setup() {}
};
</script>

<style lang="scss" scoped>
.agree-toggler {
  display: block;
  width: 30px;
  height: 30px;
  transform: rotate(90deg);
  &[aria-expanded="true"]::before {
    transform: rotate(270deg);
  }
}
</style>

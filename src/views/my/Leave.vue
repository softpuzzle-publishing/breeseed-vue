<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <p class="leave-top-text">
          회원 탈퇴시 <span class="text-primary">에세체인지더블유</span>님의
          <br />모든 기록이 영구적으로 사라지며 복구가 불가능합니다.
        </p>
        <div class="agree point">
          <VCheckbox id="agreeLeave"
            >위 내용을 모두 확인하였으며, 이에 동의합니다.</VCheckbox
          >
        </div>
        <div class="mt-6">
          <p class="leave-reason-title">
            회원 탈퇴 사유를 1개 이상 선택해주세요.
          </p>
          <VCheckbox id="reason1" class="my-4">컨텐츠가 어려웠어요.</VCheckbox>
          <VCheckbox id="reason2" class="my-4"
            >컨텐츠가 더 많았으면 좋겠어요.</VCheckbox
          >
          <VCheckbox id="reason3" class="my-4"
            >바빠서 자주 사용하지 않습니다.</VCheckbox
          >
          <VCheckbox id="reason4" class="my-4">앱 사용이 불편했어요.</VCheckbox>
          <VCheckbox id="reason5" class="my-4">원하는 기능이 없어요.</VCheckbox>
          <VCheckbox id="reason6" class="my-4">기타</VCheckbox>
          <div>
            <VTextarea rows="2"></VTextarea>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="d-grid gap-2">
          <VButton
            type="button"
            color="btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#alert-leave"
            >확인</VButton
          >
        </div>
      </div>
    </div>
  </main>

  <div class="modal modal-alert" id="alert-leave" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <p class="alert-text">
            탈퇴시 계정의 모든 기록이 영구적으로 사라집니다. 탈퇴하시겠습니까?
          </p>
        </div>
        <div class="modal-footer">
          <div class="row gx-0">
            <div class="col">
              <VButton
                type="button"
                color="btn-outline-secondary"
                class="w-100"
                data-bs-dismiss="modal"
                >취소</VButton
              >
            </div>
            <div class="col">
              <VButton type="button" color="btn-outline-danger" class="w-100"
                >탈퇴하기</VButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/templates/elements/VButton";
import VTextarea from "@/templates/elements/VTextarea";
import VCheckbox from "@/templates/elements/VCheckbox";

export default {
  name: "Leave",
  components: {
    VButton,
    VTextarea,
    VCheckbox
  },

  setup() {}
};
</script>

<style lang="scss">
.leave-top-text {
  & + .agree.point {
    label {
      font-size: 13px;
    }
  }
}
</style>
<style lang="scss" scoped>
.leave-top-text {
  font-size: 15px;
  margin-bottom: 10px;
  letter-spacing: -0.9px;
}
.leave-reason-title {
  font-size: 13px;
  letter-spacing: -0.52px;
  border-bottom: 1px solid #000;
  padding-bottom: 15px;
  margin-bottom: 1.5rem;
}
</style>

<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <!-- 회원정보 -->
        <div class="d-flex align-items-center justify-content-between m-b-10">
          <h2 class="menu-title mb-0">마이메뉴</h2>
          <VButton
            type="button"
            color="btn-outline-dark"
            size="btn-sm"
            @click="$router.push('/my-info-edit')"
            >수정하기</VButton
          >
        </div>
        <ul class="info-list">
          <li>
            <div class="label">닉네임</div>
            <div class="data">달콤한피클샐러드레싱</div>
          </li>
          <li>
            <div class="label">가입방법</div>
            <div class="data">
              <i class="icon-login-kakao"></i><i class="icon-login-apple"></i
              ><i class="icon-login-logo"></i>medi@medi.co.kr
            </div>
          </li>
          <li>
            <div class="label">가입일시</div>
            <div class="data">2022-12-31 14:32:12</div>
          </li>
          <li>
            <div class="label">회원번호</div>
            <div class="data">123456789AA</div>
          </li>
        </ul>
        <!-- 기관코드 -->
        <div
          class="d-flex align-items-center justify-content-between m-b-10 m-t-30"
        >
          <h2 class="menu-title mb-0">기관코드</h2>
          <VButton
            type="button"
            color="btn-outline-dark"
            size="btn-sm"
            @click="$router.push('/my-code-edit')"
            >수정하기</VButton
          >
        </div>
        <ul class="info-list">
          <li>
            <div class="label">기관명</div>
            <div class="data">(주)메디플러스솔루션</div>
          </li>
          <li>
            <div class="label">연결된 기관코드가 없습니다.</div>
          </li>
        </ul>
        <!-- 비밀번호 -->
        <div
          class="d-flex align-items-center justify-content-between m-b-10 m-t-30"
        >
          <h2 class="menu-title mb-0">비밀번호</h2>
          <VButton
            type="button"
            color="btn-outline-dark"
            size="btn-sm"
            @click="$router.push('/my-password-reset')"
            >수정하기</VButton
          >
        </div>
        <dl class="latest-connect">
          <dt>최근 접속일시</dt>
          <dd>2022-12-31 14:32:12</dd>
        </dl>
      </div>
      <div class="bottom m-t-20">
        <div class="d-grid gap-2 w-100">
          <VButton type="button" color="btn-dark">로그아웃</VButton>
          <VButton
            type="button"
            color="btn-outline-dark"
            @click="$router.push('/leave')"
            >회원탈퇴</VButton
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VButton from "@/templates/elements/VButton";

export default {
  name: "MyInfo",
  components: {
    VButton
  },

  setup() {}
};
</script>

<style lang="scss" scoped></style>

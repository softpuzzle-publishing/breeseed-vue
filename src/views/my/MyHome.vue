<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="my-nick"><span>달콤한피클샐러드레싱</span> 님</div>
        <!-- 마이메뉴 -->
        <h2 class="menu-title">마이메뉴</h2>
        <ul class="menu-list">
          <li><a href="../my/my_info.html">내 계정</a></li>
          <li><a href="">평점 남기기</a></li>
          <li><a href="../my/my_history_list.html">구매내역</a></li>
        </ul>
        <!-- 알림 -->
        <h2 class="menu-title m-t-40">알림</h2>
        <ul class="menu-list">
          <li>
            <label for="alarmPush" class="label">푸시 알림</label>
            <VSwitch id="alarmPush" checked></VSwitch>
          </li>
          <li>
            <label for="alarmEvent" class="label"
              >프로모션/이벤트 알림 수신</label
            >
            <VSwitch id="alarmEvent" checked></VSwitch>
          </li>
        </ul>
        <!-- 정보 -->
        <h2 class="menu-title m-t-40">정보</h2>
        <ul class="menu-list">
          <li><a href="">약관 및 정책</a></li>
          <li><a href="">오픈소스 라이선스</a></li>
          <li>
            <a
              href=""
              class="d-flex justify-content-between align-items-center"
            >
              버전정보
              <span class="text-primary">1.0.0</span>
            </a>
          </li>
        </ul>
      </div>
      <footer id="footer">
        <div class="container-fluid">
          <a
            href="#toggle-company-info"
            class="company-info-toggler"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="toggle-company-info"
            >사업자 정보</a
          >
          <dl class="company-info collapse" id="toggle-company-info">
            <dt>상호</dt>
            <dd>(주)메디플러스솔루션</dd>
            <dt>주소</dt>
            <dd><address>(02880) 서울 성북구 성북로 39, 2층</address></dd>
            <dt>사업자등록번호</dt>
            <dd>215-87-76985</dd>
            <dt>통신판매신고번호</dt>
            <dd>제 2019-서울성북-1562 호</dd>
          </dl>
          <p class="copyright">
            © 2022 Medi Plus Solution Co. Ltd. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  </main>
</template>

<script>
import VSwitch from "@/templates/elements/VSwitch";

export default {
  name: "MyHome",
  components: {
    VSwitch
  },

  setup() {}
};
</script>

<style lang="scss" scoped></style>

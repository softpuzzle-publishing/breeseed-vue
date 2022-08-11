<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="my-nick"><span>달콤한피클샐러드레싱</span> 님</div>
        <!-- 마이메뉴 -->
        <h2 class="menu-title">마이메뉴</h2>
        <ul class="menu-list">
          <li><router-link to="/my-info">내 계정</router-link></li>
          <li><router-link to="">평점 남기기</router-link></li>
          <li>
            <router-link to="/my-history-list">구매내역</router-link>
          </li>
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
          <li><router-link to="/terms">약관 및 정책</router-link></li>
          <li><router-link to="">오픈소스 라이선스</router-link></li>
          <li>
            <router-link
              to=""
              class="d-flex justify-content-between align-items-center"
            >
              버전정보
              <span class="text-primary">1.0.0</span>
            </router-link>
          </li>
        </ul>
      </div>
      <footer id="footer">
        <div class="container-fluid">
          <router-link
            to="#toggle-company-info"
            class="company-info-toggler"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="toggle-company-info"
            >사업자 정보</router-link
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

<style lang="scss" scoped>
.my-nick {
  background: $primary;
  font-size: 18px;
  color: #fff;
  letter-spacing: -0.72px;
  border-radius: 10px;
  padding: 17px 20px;
  margin-bottom: 30px;
}

#footer {
  background: #404040;
  margin-left: -30px;
  margin-right: -30px;
  color: #fff;
  margin-bottom: -30px;
  padding-bottom: 90px;
  margin-top: 20px;
}
.company-info {
  font-size: 13px;
  padding-bottom: 10px;
  dt {
    clear: left;
    float: left;
  }
  dd {
    text-align: right;
    margin-bottom: 15px;
  }
}
.company-info-toggler {
  height: 60px;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 18px;
  position: relative;
  padding-right: 40px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  &::before {
    content: "";
    background: url("#{$IMG_PATH}/icon-arrow-right.svg") no-repeat 0 0;
    width: 30px;
    height: 30px;
    background-size: contain;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -15px;
    transform: rotate(90deg);
  }
  &[aria-expanded="true"]::before {
    transform: rotate(270deg);
  }
}
.copyright {
  font-size: 13px;
  letter-spacing: -0.52px;
}
</style>

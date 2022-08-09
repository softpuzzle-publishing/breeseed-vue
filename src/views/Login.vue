<template>
  <main id="main">
    <div class="login-wrap">
      <div class="d-flex flex-column h-100">
        <div class="flex-grow-1">
          <div class="d-flex flex-column justify-content-center h-100">
            <div class="login-logo">
              <img src="../assets/images/logo.svg" alt="BreeSeed LOGO" />
            </div>
            <div class="login-type mt-8">
              <button type="button" class="btn btn-light w-100">
                <i class="icon-login-kakao"></i>카카오로 이용하기
                <span class="tip">3초만에 빠른 회원가입</span>
              </button>
              <button type="button" class="btn btn-light w-100 mt-4">
                <i class="icon-login-apple"></i>Apple로 이용하기
              </button>
              <button
                type="button"
                class="btn btn-light w-100 mt-4"
                onclick="document.location.href='../join/join_step_1.html'"
              >
                <i class="icon-login-logo"></i>로그인/회원가입
              </button>
            </div>
          </div>
        </div>
        <div class="bottom mt-5">
          <p class="copyright">
            © 2022 Medi Plus Solution Co. Ltd. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Login",
  components: {},

  setup() {}
};
</script>

<style lang="scss" scoped>
.login-wrap {
  margin: -30px -30px 0;
  background: $primary;
  height: 100vh;
  padding: 30px 30px 15px;
}
.copyright {
  color: #fff;
  font-size: 13px;
  letter-spacing: -0.5px;
  text-align: center;
}

.login-type {
  .btn {
    position: relative;
  }
  i[class^="icon"] {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .tip {
    background: #ffee00;
    font-size: 13px;
    color: #312227;
    padding: 5px 15px;
    border-radius: 10px;
    position: absolute;
    left: 5px;
    top: -43px;
    &::before {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 6px 0 6px;
      border-color: #ffee00 transparent transparent transparent;
      position: absolute;
      left: 19px;
      bottom: -10px;
    }
  }
}
</style>

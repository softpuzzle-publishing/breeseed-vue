import { ref } from "vue";

const LoginAPI = () => {
  const validatorMessage = ref("");
  let modalManager;

  function defineModal(isModal) {
    modalManager = isModal;
  }
  function validator(id, password, checkLogin) {
    stayLogin(checkLogin);

    if (!id || !password) {
      validatorMessage.value = "아이디와 비밀번호를 확인해 주세요.";
      modalManager.value = true;
    } else {
      alert(`
        로그인
        id: ${id}
        pw: ${password}
      `);
      alert("로그인");
    }
  }
  function stayLogin(param) {
    param ? console.log("자동 로그인") : console.log("일반 로그인");
  }

  return {
    validator,
    validatorMessage,
    defineModal
  };
};

export default LoginAPI;

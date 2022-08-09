import { useRouter } from "vue-router";

const MemberAPI = () => {
  const router = useRouter();

  function isJoinStep(step) {
    if (step == "complete") {
      router.push("/join-complete");
    } else {
      router.push(`/join${step ? "?step=" + step : ""}`);
    }
  }
  //
  function codeWriter(data) {
    if (data.lastName && data.firstName && data.tel && data.code) {
      alert(`
        last name: ${data.lastName}\n
        first name: ${data.firstName}\n
        tel: ${data.tel}\n
        code: ${data.code}
      `);

      isJoinStep("termsForm");
    } else {
      alert("정확한 정보를 입력해 주세요.");
    }
  }
  //
  function findCode(data) {
    if (
      data.LastName &&
      data.FirstName &&
      data.BirthYear &&
      data.BirthMonth &&
      data.BirthDay &&
      data.Gender &&
      data.Tel
    ) {
      alert(`
        last name: ${data.LastName}\n
        first name: ${data.FirstName}\n
        birthday: ${data.BirthYear}/${data.BirthMonth}/${data.BirthDay}\n
        gender: ${data.Gender}\n
        tel: ${data.Tel}
      `);

      isJoinStep("code");
    } else {
      alert("정확한 정보를 입력해 주세요.");
    }
  }
  //
  function applyTerms(data) {
    if (data.ApplyTermsOfUse && data.ApplyTermsOfPersonal) {
      alert(`
        이용약관 동의: ${data.ApplyTermsOfUse}\n 
        개인정보 수집/이용 동의: ${data.ApplyTermsOfPersonal}
      `);

      isJoinStep("personalInformation");
    } else {
      alert("약관의 동의해 주세요.");
    }
  }
  //
  function personalInfo() {
    function checkID(id) {
      if (!id) {
        alert("아이디를 입력해 주세요.");
      } else {
        alert("사용 가능합니다.");
      }
    }

    function checkNickname(nickname) {
      if (!nickname) {
        alert("별명을 입력해 주세요.");
      } else {
        alert("사용 가능합니다.");
      }
    }

    function write(data) {
      if (
        data.ID &&
        data.PW &&
        data.CheckPW &&
        data.LastName &&
        data.FirstName &&
        data.BirthYear &&
        data.BirthMonth &&
        data.BirthDay &&
        data.NickName &&
        data.ConfirmAge
      ) {
        alert(`
          id: ${data.ID}\n
          pw: ${data.PW}\n
          check pw: ${data.CheckPW}\n
          last name: ${data.LastName}\n
          first name: ${data.FirstName}\n
          birthday: ${data.BirthYear}/${data.BirthMonth}/${data.BirthDay}\n
          nickname: ${data.NickName}\n
          confirmAge: ${data.ConfirmAge}
        `);

        router.push("/join-complete");
      } else {
        alert("정확한 정보를 입력해 주세요.");
      }
    }

    return {
      checkID,
      checkNickname,
      write
    };
  }

  return {
    isJoinStep,
    codeWriter,
    findCode,
    applyTerms,
    personalInfo
  };
};

export default MemberAPI;

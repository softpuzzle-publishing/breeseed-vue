<template>
  <main id="main">
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#modal-audio-setting"
      id="btn"
    >
      오디오 설정
    </button>
  </main>

  <div class="modal modal-slide-up" id="modal-audio-setting" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="setting-item">
            <div class="row">
              <div class="col">
                <label for="switch1">반복재생</label>
              </div>
              <div class="col-auto">
                <VSwitch id="switch1" checked></VSwitch>
              </div>
            </div>
          </div>
          <div class="setting-item">
            <div class="row mb-2">
              <div class="col">
                <label for="switch2">배경음악</label>
              </div>
              <div class="col-auto">
                <VSwitch id="switch2" checked></VSwitch>
              </div>
            </div>
            <div class="row gx-0 mb-2">
              <div class="col-6">
                <VRadio id="bgMusic1" name="bgMusic" class="my-2"
                  >빗소리</VRadio
                >
              </div>
              <div class="col-6">
                <VRadio id="bgMusic2" name="bgMusic" class="my-2"
                  >장작소리</VRadio
                >
              </div>
              <div class="col-6">
                <VRadio id="bgMusic3" name="bgMusic" class="my-2"
                  >파도소리</VRadio
                >
              </div>
              <div class="col-6">
                <VRadio id="bgMusic4" name="bgMusic" class="my-2"
                  >도시소리</VRadio
                >
              </div>
              <div class="col-6">
                <VRadio id="bgMusic5" name="bgMusic" class="my-2"
                  >숲소리</VRadio
                >
              </div>
            </div>
          </div>
          <div class="sound-controler">
            <div class="d-flex align-items-center">
              <i class="icon-horn-off"></i>
              <input type="range" class="form-range" />
              <i class="icon-horn-on"></i>
            </div>
          </div>
          <div class="d-grid gap-2 m-t-30">
            <VButton type="button" color="btn-primary">저장하기</VButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/templates/elements/VButton";
import VSwitch from "@/templates/elements/VSwitch";
import VRadio from "@/templates/elements/VRadio";

export default {
  name: "AudioSetting",
  components: {
    VButton,
    VSwitch,
    VRadio
  },

  mounted() {
    setTimeout(function() {
      document.querySelector("#btn").click();
    }, 20);
  },
  setup() {}
};
</script>

<style lang="scss" scoped>
.setting-item {
  & + .setting-item {
    border-top: 1px solid #e0e0e0;
    margin-top: 17px;
    padding-top: 20px;
  }
}

.sound-controler {
  padding: 0 15px;
  .form-range {
    margin: 0 12px;
  }
  .icon-horn-off,
  .icon-horn-on {
    width: 30px;
    height: 30px;
    flex: 0 0 30px;
  }
  .icon-horn-off {
    background-image: url("#{$IMG_PATH}/icon-horn-off.svg");
  }
  .icon-horn-on {
    background-image: url("#{$IMG_PATH}/icon-horn-on.svg");
  }
}
</style>

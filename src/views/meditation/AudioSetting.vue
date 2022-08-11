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
                <div class="form-check my-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="bgMusic"
                    id="bgMusic1"
                  />
                  <label class="form-check-label" for="bgMusic1">
                    빗소리
                  </label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-check my-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="bgMusic"
                    id="bgMusic2"
                  />
                  <label class="form-check-label" for="bgMusic2">
                    장작소리
                  </label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-check my-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="bgMusic"
                    id="bgMusic3"
                  />
                  <label class="form-check-label" for="bgMusic3">
                    파도소리
                  </label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-check my-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="bgMusic"
                    id="bgMusic4"
                  />
                  <label class="form-check-label" for="bgMusic4">
                    도시소리
                  </label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-check my-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="bgMusic"
                    id="bgMusic5"
                  />
                  <label class="form-check-label" for="bgMusic5">
                    숲소리
                  </label>
                </div>
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

export default {
  name: "AudioSetting",
  components: {
    VButton,
    VSwitch
  },

  mounted() {
    setTimeout(function() {
      document.querySelector("#btn").click();
    }, 20);
  },
  setup() {}
};
</script>

<style lang="scss" scoped></style>

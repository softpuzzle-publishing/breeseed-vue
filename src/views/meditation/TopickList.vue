<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="bottom-padding">
          <div class="text-desc">
            토픽명상설명문구두줄오십자토픽명상설명문구두줄오십자토픽명상설명문구두줄오십자토픽명상설명문구두줄오십자
          </div>
          <div class="text-center m-t-30">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="voice"
                id="voiceMail"
                checked
              />
              <label class="form-check-label" for="voiceMail">
                남자 보이스
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="voice"
                id="voiceFeail"
              />
              <label class="form-check-label" for="voiceFeail">
                여자 보이스
              </label>
            </div>
          </div>
          <div class="gallery">
            <div class="program-item m-t-40">
              <a href="#none" class="program-thumb">
                <img :src="resourceManager.getIMG('/@thumbnail.png')" />
              </a>
              <div class="program-title">토픽명상타이틀제목명</div>
              <div class="program-type">10분</div>
              <div class="program-desc">
                토픽명상간략설명토픽명상간략설명토픽명상간략설명
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "TopickList",
  components: {},

  mounted() {},
  setup() {}
};
</script>

<style lang="scss" scoped></style>

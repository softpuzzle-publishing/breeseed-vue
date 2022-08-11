<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="bottom-padding">
          <div class="text-desc">
            토픽명상설명문구두줄오십자토픽명상설명문구두줄오십자토픽명상설명문구두줄오십자토픽명상설명문구두줄오십자
          </div>
          <div class="text-center m-t-30">
            <VRadio
              id="voiceMail"
              name="voice"
              class="form-check-inline"
              checked
              >남자 보이스</VRadio
            >
            <VRadio id="voiceFemail" name="voice" class="form-check-inline"
              >여자 보이스</VRadio
            >
          </div>
          <div class="gallery">
            <div class="program-item m-t-40">
              <router-link to="#none" class="program-thumb">
                <img :src="resourceManager.getIMG('/@thumbnail.png')" />
              </router-link>
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
import VRadio from "@/templates/elements/VRadio";

export default {
  name: "TopickList",
  components: {
    VRadio
  },

  mounted() {},
  setup() {}
};
</script>

<style lang="scss" scoped></style>

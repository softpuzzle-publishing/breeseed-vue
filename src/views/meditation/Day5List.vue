<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="bottom-padding">
          <div class="text-desc">
            파이브데이명상설명문구두줄파이브데이명상설명문오십자두줄
            파이브데이명상설명문구두줄파이브데이
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
          <h2 class="title-line-through m-t-40">Day 1</h2>
          <div class="program-item">
            <router-link to="" class="program-thumb day5">
              <img :src="resourceManager.getIMG('/@thumbnail.png')" />
            </router-link>
            <div class="program-title">
              파이브데이데이원프로그램명들어갈글자수스물두자
            </div>
            <div class="program-type">10분</div>
            <div class="program-desc">
              파이브데이프로그램설명파이브데이 프로그램설명파이브데이프로그램설
              명파이브데이프로그램설명파이브데이프 로그램슬
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
  name: "Day5List",
  components: {
    VRadio
  },

  mounted() {},
  setup() {}
};
</script>

<style lang="scss" scoped></style>

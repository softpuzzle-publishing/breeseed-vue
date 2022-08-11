<template>
  <main id="main">
    <div class="program">
      <aside id="aside">
        <ProgramSidebar></ProgramSidebar>
      </aside>
      <router-link
        to=""
        class="btn-grow-seed"
        aria-label="씨앗 키우기"
      ></router-link>
      <div class="voice-choice">
        <VRadio id="voiceMail" name="voice" checked>남자 보이스</VRadio>
        <VRadio id="voiceFemail" name="voice">여자 보이스</VRadio>
      </div>
      <ProgramTheme></ProgramTheme>
    </div>
  </main>
</template>

<script>
import ProgramSidebar from "@/views/program/ProgramSidebar";
import ProgramTheme from "@/views/program/ProgramTheme";
import VRadio from "@/templates/elements/VRadio";

export default {
  name: "Program",
  components: {
    ProgramSidebar,
    ProgramTheme,
    VRadio
  },

  mounted() {
    //로드 후 .show 추가
    setTimeout(function() {
      document.querySelector(".program").classList.add("show");
    }, 10);

    //사이드바 navi
    document.querySelectorAll(".theme-order a").forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document
          .querySelector(".theme-order .active")
          .classList.remove("active");
        this.parentElement.classList.add("active");
        /* document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        }); */
        const t = this.getAttribute("href");
        console.log(t);
        document.querySelector(t).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  },
  setup() {}
};
</script>

<style lang="scss" scoped>
#aside {
  flex: 0 0 75px;
}

.program {
  opacity: 0;
  transition: opacity 0.25s 0.05s;
  margin-left: $SIDEBAR_WIDTH;
  margin-top: -30px;
  padding-top: 0px;
  height: 100%;
  padding: 76px 0 0;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  &.show {
    opacity: 1;
    .sidebar {
      left: 0;
    }
  }
}

.btn-grow-seed {
  display: inline-block;
  background: url("#{$IMG_PATH}/icon-flower.svg") no-repeat 0 0;
  width: 30px;
  height: 30px;
  position: fixed;
  right: 30px;
  top: 10px;
  z-index: $Z_INDEX_GROW_SEED;
}

.voice-choice {
  position: fixed;
  background: #fff;
  height: 47px;
  top: 49px;
  left: calc(29px + $SIDEBAR_WIDTH);
  right: 29px;
  display: flex;
  align-items: center;
  z-index: $Z_INDEX_VOICE_CHOICE;
  .form-check {
    flex-grow: 1;
  }
}
</style>

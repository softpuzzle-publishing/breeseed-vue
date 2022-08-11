<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="congratulation">
          <p class="text-heading">
            <span class="text-primary">Congratulation!</span><br />
            회원가입을 축하드립니다 :)
          </p>
          <div class="code-swipe">
            <div class="text-end" id="swipe-text">
              <strong>기관코드 인증하기</strong>
              <p>기관코드가 있으신 경우에만 <br />당겨주세요.</p>
            </div>
            <div class="swipe-area">
              <div class="swiper">
                <div id="swipe-end" class="swipe-end">
                  <a id="swipe-btn" class="swipe-btn"
                    ><i class="icon-swiper-arrow"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="d-grid gap-2">
          <VButton
            type="button"
            color="btn-primary"
            @click="$router.push('/profile-setting')"
            >가입완료</VButton
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import gsap from "gsap";
import VButton from "@/templates/elements/VButton";

export default {
  name: "JoinComplete",
  components: {
    VButton
  },

  mounted() {
    var swiperDragged = false,
      startX,
      endX = 0;

    function swipe() {
      var $btn = document.querySelector(".swipe-btn");

      gsap.to("#swipe-btn", 0, { x: -endX });
      gsap.to("#swipe-text", 0, { x: -endX });

      $btn.addEventListener("click touchend", function(e) {
        e.preventDefault();
        console.log("click touchend");
      });
      $btn.addEventListener("touchstart mousedown", function(e) {
        e.preventDefault();
        console.log("touchstart mousedown");
        swiperDragged = true;
        startX =
          typeof e.pageX != "undefined"
            ? e.pageX
            : e.originalEvent.touches[0].pageX;
        endX = 0;
      });

      window.addEventListener("touchmove mousemove", function(e) {
        console.log("touchmove mousemove");
        if (swiperDragged) {
          let actualX =
            typeof e.pageX != "undefined"
              ? e.pageX
              : e.originalEvent.touches[0].pageX;
          endX = Math.max(0, Math.min(135, startX - actualX));
          gsap.to("#swipe-btn", 0, { x: -endX });
          gsap.to("#swipe-text", 0, { x: -endX });
        }
      });
      window.addEventListener("touchend mouseup", function() {
        console.log("touchend mouseup");
        if (swiperDragged) {
          swiperDragged = false;
          if (endX < 80) {
            gsap.to("#swipe-btn", 0.5, { x: 0 });
            gsap.to("#swipe-text", 0.5, { x: 0 });
          } else {
            gsap.to("#swipe-btn", 0.1, { x: -135 });
            gsap.to("#swipe-text", 0.1, { x: -135 });
            setTimeout(function() {
              document.location.href = "code_authentication.html";
            }, 700);
          }
          endX = 0;
        }
      });
    }
    swipe();
  },
  setup() {}
};
</script>

<style lang="scss" scoped>
.congratulation {
  background: url("#{$IMG_PATH}/icon-join-finish-logo.svg") no-repeat 0 30px;
  padding-top: 130px;
}

.code-swipe {
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: -30px;
  transition: transform 0.2s;
  overflow: hidden;
  .text-end {
    background: url("#{$IMG_PATH}/icon-code.svg") no-repeat 100% 0;
    padding-top: 26px;
    strong {
      font-weight: 400;
      font-size: 18px;
    }
    p {
      color: $gray;
      font-size: 13px;
      letter-spacing: -0.52px;
    }
  }
  .swipe-area {
    position: relative;
    width: 60px;
    height: 118px;
    margin-left: 20px;
    .swipe {
      background: #f8f8f8;
      border-radius: 50rem 0 0 50rem;
      width: 120px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .swiper {
      height: 100%;
      position: relative;
      .swipe-btn {
        cursor: pointer;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        background: #f8f8f8;
        border-radius: 50rem 0 0 50rem;
        width: 300px;
        height: 100%;
        i {
          width: 21px;
          height: 19px;
          background: url("#{$IMG_PATH}/icon-swipe-arrow.svg") no-repeat 0 0;
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .swipe-btn.back-to-start {
        -webkit-transition: -webkit-transform 0.5s ease-in-out;
        transition: -webkit-transform 0.5s ease-in-out;
        transition: transform 0.5s ease-in-out;
        transition: transform 0.5s ease-in-out,
          -webkit-transform 0.5s ease-in-out;
        -webkit-transform: translateX(0) !important;
        transform: translateX(0) !important;
      }
      .swipe-end {
        height: 100%;
      }
    }
  }
}
</style>

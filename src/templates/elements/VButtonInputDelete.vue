<template>
  <button type="button" class="btn-input-x" aria-label="삭제">
    <i class="icon-x"></i>
  </button>
</template>

<script>
import(`${process.env.VUE_APP_SCSS_PATH}/elements/_v-button-input-delete.scss`);

export default {
  name: "VButtonInputDelete",

  mounted() {
    //input value clear
    let btnClear = document.querySelectorAll(".btn-input-x");
    btnClear.forEach(function(btn) {
      btn.addEventListener("click", function() {
        btn.previousElementSibling.value = "";
        btn.previousElementSibling.classList.remove("filled");
        btn.previousElementSibling.previousElementSibling.value = "";
        btn.previousElementSibling.previousElementSibling.classList.remove(
          "filled"
        );
      });
    });
  }
};
</script>

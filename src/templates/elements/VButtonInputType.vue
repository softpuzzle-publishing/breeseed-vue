<template>
  <button type="button" class="btn-type-toggle" aria-label="입력내용 보기">
    <i class="icon-eye-off"></i>
  </button>
</template>

<script>
export default {
  name: "VButtonInputType",

  mounted() {
    //input type(password) toggle
    let btnTypeToggle = document.querySelectorAll(".btn-type-toggle");
    btnTypeToggle.forEach(function(btn) {
      btn.addEventListener("click", function() {
        if (btn.previousElementSibling.getAttribute("type") === "password") {
          btn.previousElementSibling.setAttribute("type", "text");
        } else {
          btn.previousElementSibling.setAttribute("type", "password");
        }
      });
    });
  }
};
</script>

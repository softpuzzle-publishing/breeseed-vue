<template>
  <input type="text" class="form-control" />
</template>

<script>
export default {
  name: "VInputTextField",

  mounted() {
    //input focused
    let inputAll = document.querySelectorAll(".form-control");
    inputAll.forEach(function(input) {
      input.addEventListener("focus", function() {
        this.classList.add("filled");
      });
      input.addEventListener("focusout", function() {
        setTimeout(function() {
          input.classList.remove("filled");
        }, 100);
      });
    });
  }
};
</script>

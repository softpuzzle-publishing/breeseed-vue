<template>
  <textarea class="form-control" rows="2"></textarea>
</template>

<script>
export default {
  name: "VTextarea",

  mounted() {
    //textarea auto growing
    function calcHeight(value) {
      let numberOfLineBreaks = (value.match(/\n/g) || []).length;
      // min-height + lines x line-height + padding + border
      let newHeight = 42 + numberOfLineBreaks * 21 + 20 + 0;
      return newHeight;
    }
    let textarea = document.querySelector(".auto-growing");
    if (textarea) {
      textarea.style.height = calcHeight(textarea.value) + "px";
      textarea.addEventListener("keyup", () => {
        textarea.style.height = calcHeight(textarea.value) + "px";
      });
    }
  }
};
</script>

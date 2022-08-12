<template>
  <div class="fake-textarea" contenteditable><slot /></div>
</template>

<script>
export default {
  name: "VTextareaFake",

  mounted() {}
};
</script>

<style lang="scss" scoped>
.fake-textarea {
  padding: 20px;
  font-size: 15px;
  letter-spacing: -0.9px;
  background: #f5f5f5;
  border-radius: 10px;
  color: $primary;
  min-height: 84px;
  &:focus-visible {
    outline: 0;
  }
}
</style>

<template>
  <button type="button" class="btn" :class="classes" :style="styles">
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "VButton",
  props: {
    color: {
      type: String
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    styles: String
  },
  setup(props) {
    return {
      classes: computed(() => ({
        [`${props.color}`]: true,
        [`${props.size}`]: props.size,
        [`${props.shape}`]: props.shape
      }))
    };
  }
};
</script>

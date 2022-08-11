<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      :id="id"
      :value="value"
      v-model="model"
    />
    <label class="form-check-label" :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "VCheckbox",
  props: {
    id: {
      type: String,
      require: true
    },
    value: [String, Array, Boolean, Number],
    modelValue: [String, Array, Boolean, Number]
  },
  emits: ["update:modelValue"],
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
</script>

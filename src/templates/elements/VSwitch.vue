<template>
  <div class="form-check form-switch label-empty">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      :id="id"
      :value="value"
      v-model="model"
    />
    <label class="form-check-label" :for="id"></label>
  </div>
</template>

<script>
export default {
  name: "VSwitch",
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

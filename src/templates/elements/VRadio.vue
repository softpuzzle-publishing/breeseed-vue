<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      v-model="model"
    />
    <label class="form-check-label" :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "VRadio",
  props: {
    id: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    checked: {
      type: Boolean
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

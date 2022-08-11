<template>
  <div id="wrap">
    <TheHeader
      v-if="
        $route.path !== '/' &&
          $route.path !== '/first' &&
          $route.path !== '/home'
      "
    />
    <div id="container">
      <slot />
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader";

export default {
  components: {
    TheHeader
  }
};
</script>

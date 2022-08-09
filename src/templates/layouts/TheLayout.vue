<template>
  <div id="wrap">
    <TheHeader v-if="$route.path !== '/' && $route.path !== '/login'" />
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

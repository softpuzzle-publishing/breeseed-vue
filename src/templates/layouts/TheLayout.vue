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
    <TheMenubar
      v-if="
        $route.path == '/home' ||
          $route.path == '/program' ||
          $route.path == '/my-home'
      "
    />
  </div>
</template>

<script>
import TheHeader from "./TheHeader";
import TheMenubar from "./TheMenubar";

export default {
  components: {
    TheHeader,
    TheMenubar
  }
};
</script>

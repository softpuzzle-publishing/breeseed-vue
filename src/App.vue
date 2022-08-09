<template>
  <TheLayout>
    <router-view />
  </TheLayout>
</template>

<script>
import(process.env.VUE_APP_SCSS_PATH + "/site.scss");
import TheLayout from "@/templates/layouts/TheLayout";

export default {
  name: "App",
  components: {
    TheLayout
  },
  props: {
    header: Object,
    title: String
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    //
  },
  methods: {
    //
  }
};
</script>

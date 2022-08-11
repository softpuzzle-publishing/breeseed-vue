<template>
  <header id="header">
    <div class="container-fluid h-100">
      <div class="position-relative h-100">
        <button
          type="button"
          class="btn-back"
          aria-label="뒤로"
          @click="$router.go(-1)"
        >
          <i class="icon-back"></i>
        </button>
        <h1 class="page-title">@@title</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

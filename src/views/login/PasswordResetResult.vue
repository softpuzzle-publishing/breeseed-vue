<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="text-center">
          <div class="text-heading">
            비밀번호가 <br />
            <span class="text-primary">재설정 되었습니다.</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="d-grid gap-2">
          <VButton
            type="button"
            color="btn-primary"
            @click="$router.push('/login')"
            >로그인</VButton
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VButton from "@/templates/elements/VButton";

export default {
  name: "PasswordResetResult",
  components: {
    VButton
  },

  setup() {}
};
</script>

<style lang="scss" scoped></style>

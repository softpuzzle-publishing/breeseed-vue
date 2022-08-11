<template>
  <main id="main">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="text-center">
          <div class="text-basis text-gray">
            회원님께서 가입하신 아이디 입니다.
          </div>
          <div class="text-heading m-t-30">
            <span class="text-primary">med*****</span>
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
  name: "IdFindResult",
  components: {
    VButton
  },

  setup() {}
};
</script>

<style lang="scss" scoped></style>

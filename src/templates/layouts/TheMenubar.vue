<template>
  <div id="menubar">
    <nav class="menubar">
      <router-link to="/program" class="menu-meditation"
        ><span>씨앗명상</span></router-link
      >
      <router-link to="/home" class="menu-home active"
        ><span>둘러보기</span></router-link
      >
      <router-link to="/my-home" class="menu-my"><span>마이</span></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheMenubar"
};
</script>

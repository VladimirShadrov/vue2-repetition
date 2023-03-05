!
<template>
  <div class="container">
    <app-router-side-bar />
    <div class="content-bar">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppRouterSideBar from './AppRouterSideBar.vue';

export default {
  components: { AppRouterSideBar },
};
</script>

<style></style>

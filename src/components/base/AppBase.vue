!
<template>
  <div class="container">
    <app-base-side-bar />
    <div class="content-bar">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppBaseSideBar from './AppBaseSideBar.vue';

export default {
  components: { AppBaseSideBar },
};
</script>

<style></style>

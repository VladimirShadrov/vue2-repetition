!
<template>
  <div class="container">
    <app-component-side-bar />
    <div class="content-bar">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppComponentSideBar from './AppComponentSideBar.vue';

export default {
  components: { AppComponentSideBar },
};
</script>

<style></style>

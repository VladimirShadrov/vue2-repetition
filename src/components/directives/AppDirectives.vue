!
<template>
  <div class="container">
    <app-directives-side-bar />
    <div class="content-bar">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppDirectivesSideBar from './AppDirectivesSidebar.vue';

export default {
  components: { AppDirectivesSideBar },
};
</script>

<style></style>

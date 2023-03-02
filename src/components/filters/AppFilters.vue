!
<template>
  <div class="container">
    <app-filters-side-bar />
    <div class="content-bar">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppFiltersSideBar from './AppFiltersSideBar.vue';

export default {
  components: { AppFiltersSideBar },
};
</script>

<style></style>

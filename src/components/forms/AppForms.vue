!
<template>
  <div class="container">
    <app-forms-side-bar />
    <div class="content-bar">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppFormsSideBar from './AppFormsSideBar.vue';

export default {
  components: { AppFormsSideBar },
};
</script>

<style></style>

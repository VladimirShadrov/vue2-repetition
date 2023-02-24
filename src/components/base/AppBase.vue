!
<template>
  <div class="container">
    <app-side-bar />
    <div class="content-bar">
      <app-dynamic-attributes />
    </div>
  </div>
</template>

<script>
import AppSideBar from './AppSideBar.vue';
import AppDynamicAttributes from './pages/AppAttributes.vue';

export default {
  components: { AppSideBar, AppDynamicAttributes },
};
</script>

<style></style>

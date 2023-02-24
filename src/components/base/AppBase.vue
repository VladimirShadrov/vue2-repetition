!
<template>
  <div class="container">
    <app-base-side-bar />
    <div class="content-bar">
      <app-dynamic-attributes />
    </div>
  </div>
</template>

<script>
import AppBaseSideBar from './AppBaseSideBar.vue';
import AppDynamicAttributes from './pages/AppAttributes.vue';

export default {
  components: { AppBaseSideBar, AppDynamicAttributes },
};
</script>

<style></style>

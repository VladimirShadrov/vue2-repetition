<template>
  <div>
    <slot name="header" />
    <slot name="content" />
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: 'my-slot',
};
</script>

<style scoped>
div {
  border: 1px solid black;
  padding: 16px;
}
</style>

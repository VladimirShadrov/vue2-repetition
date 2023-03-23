<template>
  <div>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
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

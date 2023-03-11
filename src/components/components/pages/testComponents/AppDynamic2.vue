<template>
  <div class="wrapper">
    <h1 class="content__theme-title">Я динамический компонент 2</h1>
    <br />

    <h3>Контент компонента 2</h3>
    <br />

    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <br />

    <input type="text" placeholder="Введите текст" />
  </div>
</template>

<script>
export default {
  name: 'app-dynamic-2',
};
</script>

<style scoped>
.wrapper {
  border: 1px solid black;
  padding: 16px;
}
</style>

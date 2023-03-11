<template>
  <div class="wrapper">
    <h1 class="content__theme-title">Я асинхронный компонент</h1>
    <br />

    <h3>Контент асинхронного компонента</h3>
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
  name: 'app-async',
};
</script>

<style scoped>
.wrapper {
  border: 1px solid black;
  padding: 16px;
}
</style>

<template>
  <div>
    <h1 class="content__theme-title">Асинхронные компоненты</h1>
    <br />

    <h3>Компонент: AppAsyncComponent.vue</h3>
    <br />

    <h3>
      Задача: <br />
      - Зарегистрировать локально асинхронный компонент AppAsyncTest.vue и вывести его здесь <br />
      - В файле main.js зарегистрировать глобально компонент AppAsyncTest.vue <br />
      - Вывести его здесь<br />
      - Убедиться, что компонент действительно загружается асинхронно (в отдельном чанке)<br />
    </h3>
    <br />

    <h3>Про асинхронную подгрузку компонента можно дополнительно узнать в контенте про Router</h3>
    <br />

    <!-- ЗДЕСЬ ВЫВЕСТИ АСИНХРОННЫЙ КОМПОНЕНТ -->
  </div>
</template>

<script>
export default {
  name: 'app-async-component',
};
</script>

<style></style>

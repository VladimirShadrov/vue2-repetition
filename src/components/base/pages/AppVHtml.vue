<template>
  <div>
    <h1 class="content__theme-title">Вывод HTML кода. Атрибут V-HTML</h1>
    <br />
    <h3>Компонент: AppVHtml.vue</h3>
    <br />

    <h4>Задача: Вставить HTML строку "template" из данных в заголовок</h4>
    <br />

    <!-- ЗДЕСЬ ПИСАТЬ РЕШЕНИЕ -->
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'app-v-html',
  data() {
    return {
      template: '<a href="https://google.com" target="blank">Google</a>',
    };
  },
};
</script>

<style></style>

<template>
  <div>
    <h1 class="content__theme-title">Динамические атрибуты</h1>
    <br />
    <h3>Компонент: AppAttributes.vue</h3>
    <br />

    <h4>Задача: Подменить атрибут href у ссылки</h4>
    <br />
    <h4>1. Сделать так, чтобы ссылка открывала страницу Google</h4>
    <h4>2. При клике на кнопке "Подменить на Яндекс" изменить текст ссылки и атрибут href</h4>
    <br />

    <h2 style="margin-bottom: 30px">
      <a :href="linkName" target="blank">{{ linkName }}</a>
    </h2>
    <button class="button">Подменить на Яндекc</button>
  </div>
</template>

<script>
export default {
  name: 'app-dynamic-attributes',
  data() {
    return {
      linkName: 'Google',
      hrefValue: 'https://google.com',
    };
  },
  methods: {
    changeLink() {
      (this.linkName = 'Яндекс'), (this.hrefValue = 'https://yandex.ru');
    },
  },
};
</script>

<style></style>

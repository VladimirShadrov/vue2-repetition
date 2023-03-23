<template>
  <div>
    <h1 class="content__theme-title">Динамические атрибуты</h1>
    <br />
    <h3>Компонент: AppAttributes.vue</h3>
    <br />

    <h4>Задача: Подменить атрибут href у ссылки</h4>
    <br />

    <h2>
      <a :href="hrefValue" target="blank">Google</a>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'app-dynamic-attributes',
  data() {
    return {
      hrefValue: 'https://google.com',
    };
  },
};
</script>

<style></style>

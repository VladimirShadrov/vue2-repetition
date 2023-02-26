<template>
  <div>
    <h1 class="content__theme-title">Доступ к DOM элементам</h1>
    <br />

    <h3>Компонент: AppRef.vue</h3>
    <br />

    <h4>Задача: При клике по кнопке "Изменить" изменить текст и цвет заголовка</h4>
    <br />

    <h1>{{ title }}</h1>
    <br />

    <button class="button">Изменить</button>
  </div>
</template>

<script>
export default {
  name: 'app-ref',
  data() {
    return {
      title: 'Текст заголовка',
      changed: true,
    };
  },
  methods: {},
};
</script>

<style>
.button {
  padding: 4px 8px;
  cursor: pointer;
}
</style>

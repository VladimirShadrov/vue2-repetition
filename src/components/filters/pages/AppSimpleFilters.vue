<template>
  <div>
    <h1 class="content__theme-title">Создание простых фильтров</h1>
    <br />

    <h3>Компонент: AppSimpleFilters.vue</h3>
    <br />

    <h3>
      Задача: <br />
      - Создать 2 заголовка <br />
      - Зарегистрировать локально фильтр, который будет приводить текст к верхнему регистру <br />
      - Применить этот фильтр к первому заголовку <br />
      - Зарегистрировать глобально фильтр, который будет возвращать перевернутую строку <br />
      - Применить этот фильтр ко второму заголовку <br />
    </h3>
    <br /><br />

    <h2>{{ upperCaseTitle | upperCase }}</h2>
    <br /><br />
    <h2>{{ reverseTitle | reverseStr }}</h2>
  </div>
</template>

<script>
export default {
  name: 'app-simple-filters',
  data() {
    return {
      upperCaseTitle: 'Привести этот текст к верхнему регистру',
      reverseTitle: 'Перевернуть данный текст задом наперед',
    };
  },
  filters: {
    upperCase(v) {
      return v.toUpperCase();
    },
  },
};
</script>

<style></style>

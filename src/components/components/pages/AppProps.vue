<template>
  <div>
    <h1 class="content__theme-title">Передача параметров компоненту</h1>
    <br />

    <h3>Компонент: AppProps.vue</h3>
    <br />

    <h3>Тема: Передача параметров в дочерний компонент</h3>
    <br />

    <h4>
      Задача: <br />
      - Импортировать компонент TestCarComponent.vue <br />
      - Передать ему параметры "title", "year" и отрисовать на этой странице <br />
      - В дочернем компоненте TestCarComponent.vue принять параметри в виде массива и в виде объекта <br />
      - Провести валидацию параметров в дочернем компоненте с помощью указания типа данных и передачи объекта с настройками (тип данных, значение
      по-умолчанию) <br />
      - <br />
      - <br />
      - <br />
    </h4>
    <br />

    <h2>Я родительский компонент</h2>
    <br />

    <test-car-component :title="title" :year="year" />
  </div>
</template>

<script>
import TestCarComponent from './testComponents/TestCarComponent.vue';

export default {
  components: { TestCarComponent },
  name: 'app-props',
  data() {
    return {
      title: 'Ford',
      year: 2022,
    };
  },
};
</script>

<style></style>

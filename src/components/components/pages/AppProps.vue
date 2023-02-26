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
    </h4>
    <br />

    <h4>
      Задача 2 <br />
      - Передать в дочерний компонент как параметр функцию, которая будет изменять название машины на Audi <br />
      - При клике на кнопке "Изменить имя" в дочернем компоненте должно измениться название машины у ребенка и родителя <br />
    </h4>
    <br />

    <h2>{{ title }}</h2>
    <br />

    <test-car-1 :title="title" :year="year" :func="changeToAudi" />
  </div>
</template>

<script>
import TestCar1 from './testComponents/TestCar1.vue';

export default {
  components: { TestCar1 },
  name: 'app-props',
  data() {
    return {
      title: 'Ford',
      year: 2022,
    };
  },
  methods: {
    changeToAudi() {
      this.title = 'Audi';
    },
  },
};
</script>

<style></style>

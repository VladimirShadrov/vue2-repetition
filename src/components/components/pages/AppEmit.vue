<template>
  <div>
    <h1 class="content__theme-title">Передача параметров от дочернего компонента</h1>
    <br />

    <h3>Компонент: AppEmit.vue</h3>
    <br />

    <h3>
      Задача: <br />
      - Импортировать дочерний компонент TestCar2.vue <br />
      - При клике на кнопке "Изменить" в дочернем компоненте изменить марку машины у ребенка и родителя <br />
      - Изменить год выпуска у ребенка <br />
    </h3>
    <br />
    <hr />
    <br />

    <h2>{{ title }}</h2>
    <br />
  </div>
</template>

<script>
export default {
  name: 'app-emit',
  components: {},
  data() {
    return {
      title: 'Mazda',
      year: 2021,
    };
  },
};
</script>

<style></style>

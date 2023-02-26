<template>
  <div class="car">
    <h3 style="margin-bottom: 16px">Я дочерний компонент 1</h3>
    <h2 class="car-title">Марка: {{ title }}</h2>
    <h4>Год выпуска: {{ year }}</h4>
    <br />

    <button @click="func" class="button">Изменить</button>
  </div>
</template>

<script>
export default {
  // props: ['title', 'year', 'func'],
  //   props: {
  //     title: String,
  //     year: Number,
  //   },
  props: {
    title: {
      type: String,
      default: 'Другое назавание',
    },
    year: {
      type: Number,
      default: 777,
    },
    func: {
      type: Function,
    },
  },
};
</script>

<style scoped>
.car {
  padding: 16px;
  border: 1px solid black;
  max-width: 500px;
  overflow: hidden;
}

.car-title {
  margin-bottom: 16px;
}
</style>

<template>
  <div class="car">
    <h3 style="margin-bottom: 16px">Я дочерний компонент</h3>
    <h2 class="car-title">Марка: {{ title }}</h2>
    <h4>Год выпуска: {{ year }}</h4>
  </div>
</template>

<script>
export default {
  //   props: ['title', 'year'],
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

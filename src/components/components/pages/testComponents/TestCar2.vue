<template>
  <div class="car">
    <h3 style="margin-bottom: 16px">Я дочерний компонент 2</h3>
    <h2 class="car-title">Марка: {{ model }}</h2>
    <h4>Год выпуска: {{ year }}</h4>
    <br />

    <button class="button">Изменить</button>
  </div>
</template>

<script>
export default {
  name: 'test-car-2',
  data() {
    return {
      // model: 'Mazda',
      // year: 2001,
    };
  },
  inject: ['model', 'year'],
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

<template>
  <div class="car">
    <h3 style="margin-bottom: 16px">Я дочерний компонент 1</h3>
    <h2 class="car-title">Марка: {{}}</h2>
    <h4>Год выпуска: {{}}</h4>
    <br />

    <button class="button">Изменить</button>
    <button class="button">Увеличить счетчик</button>
  </div>
</template>

<script>
export default {
  name: 'test-car-1',
};
</script>

<style scoped>
.car {
  padding: 16px;
  border: 1px solid black;
  max-width: 500px;
  overflow: hidden;
  margin-right: 16px;
}

.car-title {
  margin-bottom: 16px;
}

.button {
  margin-right: 16px;
}
</style>

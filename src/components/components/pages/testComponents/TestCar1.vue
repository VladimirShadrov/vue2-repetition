<template>
  <div class="car" ref="car1">
    <h3 style="margin-bottom: 16px">Я дочерний компонент 1</h3>
    <h2 class="car-title">Марка: {{ model }}</h2>
    <h4>Год выпуска: {{ year }}</h4>
    <br />

    <button @click="cb" class="button">Изменить</button>
    <button class="button">Увеличить счетчик</button>
  </div>
</template>

<script>
export default {
  name: 'test-car-1',
  props: {
    model: { type: String, default: 'Запорожец' },
    year: { type: Number, default: 1967 },
    cb: { type: Function },
  },
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

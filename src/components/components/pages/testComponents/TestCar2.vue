<template>
  <div class="car">
    <h3 style="margin-bottom: 16px">Я дочерний компонент 2</h3>
    <h2 class="car-title">Марка: {{ model }}</h2>
    <h4>Год выпуска: {{ year }}</h4>
    <br />

    <button @click="changeModel" class="button">Изменить</button>
  </div>
</template>

<script>
export default {
  name: 'test-car-2',
  props: {
    model: String,
    year: Number,
  },
  data() {
    return {
      // model: 'Mazda',
      // year: 2001,
    };
  },
  methods: {
    changeModel() {
      this.$emit('changeData', { model: 'BMV', year: 1985 });
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

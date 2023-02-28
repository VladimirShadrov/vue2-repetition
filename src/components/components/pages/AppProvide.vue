<template>
  <div>
    <h1 class="content__theme-title">Provide / Inject</h1>
    <br />

    <h3>Компонент: AppProvide.vue</h3>
    <br />

    <h4>
      Задача: <br />
      - Импортировать компонент TestCar2.vue <br />
      - 1. С помощью "Provide" передать в него произвольные название машины и год выпуска <br />
      - 2. С помощью "Provide" передать в него название машины и год выпуска, находящиеся в свойствах экземпляра AppProvide.vue <br />
      - В компоненте TestCar2.vue в свойство "Inject" принять данные и отрисовать в шаблоне <br />
    </h4>
    <br /><br />

    <test-car-2 />
  </div>
</template>

<script>
import TestCar2 from './testComponents/TestCar2.vue';

export default {
  name: 'app-provide',
  components: { TestCar2 },
  data() {
    return {
      model: 'Vaz',
      year: 1982,
    };
  },
  provide() {
    return {
      model: this.model,
      year: this.year,
    };
  },
};
</script>

<style></style>

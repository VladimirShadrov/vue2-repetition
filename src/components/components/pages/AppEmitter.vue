<template>
  <div>
    <h1 class="content__theme-title">Использование event emitter</h1>
    <br />

    <h3>Компонент: AppEmitter.vue</h3>
    <br />

    <h4>Задача: Реализовать функционал как в секции "Связь дочерних компонентов" с помощью шины событий</h4>
    <br /><br /><br />

    <h2>Я родительский компонент</h2>
    <br />

    <div class="wrapper">
      <test-car-1 :model="model" :year="year" />
      <my-global-counter />
    </div>
  </div>
</template>

<script>
import TestCar1 from './testComponents/TestCar1.vue';
import MyGlobalCounter from './testComponents/MyGlobalCounter.vue';

export default {
  components: { MyGlobalCounter, TestCar1 },
  name: 'app-emitter',
  data() {
    return {
      model: 'Жигули',
      year: 1974,
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  padding: 16px;
  border: 1px solid #ccc;
}
</style>

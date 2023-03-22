<template>
  <div>
    <h1 class="content__theme-title">Связь дочерних компонентов</h1>
    <br />

    <h3>Компонент: AppChildren.vue</h3>
    <br />

    <h4>
      Задача: <br />
      - Импортировать компоненты TestCar1.vue и MyGlobalCounter.vue <br />
      - Передать в TestCar1.vue название машины и год выпуска <br />
      - При клике на кнопке "Увеличить счетчик" компонента TestCar1.vue увеличить счетчик в компоненте MyGlobalCounter.vue <br />
      - Связь дочерних компонентов через родительский <br />
    </h4>
    <br /><br /><br />

    <h2>Я родительский компонент</h2>
    <br />

    <div class="wrapper">
      <test-car-1 :model="model" :year="year" @count-change="counter += $event"></test-car-1>
      <my-global-counter :counter="counter"></my-global-counter>
    </div>
  </div>
</template>

<script>
import TestCar1 from './testComponents/TestCar1.vue';
import MyGlobalCounter from './testComponents/MyGlobalCounter.vue';

export default {
  components: { MyGlobalCounter, TestCar1 },
  name: 'app-children',
  data() {
    return {
      counter: 0,
      model: 'Жигули',
      year: 1974,
    };
  },
  methods: {
    changeCounter(e) {
      this.counter += e;
    },
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

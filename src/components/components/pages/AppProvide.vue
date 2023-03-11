<template>
  <div>
    <h1 class="content__theme-title">Provide / Inject</h1>
    <br />

    <h3>Компонент: AppProvide.vue</h3>
    <br />

    <h3>
      Свойства Provide / Inject не реактивны. Во втором Vue писать костыли для того, чтобы добиться реактивности не рекомендуется, но возможно с
      помощью Object.defineProperty <br />
      В Vue 3 реактиврости Provide можно добиться с помощью Vue.computed(() => this.model)
    </h3>
    <br /><br />

    <h4>
      Задача: <br />
      - Импортировать компонент TestCar2.vue <br />
      - 1. С помощью "Provide" передать в него произвольные название машины и год выпуска <br />
      - 2. С помощью "Provide" передать в него название машины и год выпуска, находящиеся в свойствах экземпляра AppProvide.vue <br />
      - В компоненте TestCar2.vue в свойство "Inject" принять данные и отрисовать в шаблоне <br />
    </h4>
    <br /><br />

    <!-- СЮДА ВСТАВИТЬ TestCar2 -->
  </div>
</template>

<script>
export default {
  name: 'app-provide',
  data() {
    return {
      model: 'KIA',
      year: 2015,
    };
  },
};
</script>

<style scoped>
.button {
  padding: 6px 8px;
  cursor: pointer;
}
</style>

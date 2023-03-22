<template>
  <div>
    <h1 class="content__theme-title">Работа с радио кнопками</h1>
    <br />

    <h3>Компонент: AppRadioBtn.vue</h3>
    <br />

    <h3>
      Задача: <br />
      - Связать все радио кнопки с моделью <br />
      - В заголовке вывести выбранное значение <br />
      - Установить значение по-умолчанию <br />
    </h3>
    <br /><br />

    <!-- РЕАЛИЗАЦИЯ -->

    <h2>Какую пиццу будем заказывать?</h2>
    <br /><br />

    <label> <input type="radio" v-model="pizza" value="Сырная" /> Сырная </label>
    <label> <input type="radio" v-model="pizza" value="Мясная" /> Мясная </label>
    <label> <input type="radio" v-model="pizza" value="Пеперони" /> Пеперони </label>
    <label> <input type="radio" v-model="pizza" value="Сырный цыпленок" /> Сырный цыпленок </label>
    <label> <input type="radio" v-model="pizza" value="Карбонара" /> Карбонара </label><br /><br /><br />
    <hr />
    <br />

    <h4>Вы выбрали:</h4>
    <br />

    <h4>{{ pizza }}</h4>
  </div>
</template>

<script>
export default {
  name: 'app-radio-buttons',
  data() {
    return {
      pizza: 'Карбонара',
    };
  },
};
</script>

<style scoped>
label {
  margin-right: 16px;
  cursor: pointer;
  font-weight: bold;
}
</style>

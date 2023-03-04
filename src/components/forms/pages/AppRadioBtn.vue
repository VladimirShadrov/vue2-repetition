<template>
  <div>
    <h1 class="content__theme-title">Работа с радио кнопками</h1>
    <br />

    <h3>Компонент: AppRadioBtn.vue</h3>
    <br />

    <h3>
      Задача: <br />
      - Связать все радио кнопки с моделью <br />
      - В заголовке вывести выбранные значения <br />
      - Установить значения по-умолчанию <br />
    </h3>
    <br /><br />

    <!-- РЕАЛИЗАЦИЯ -->

    <h2>Какую пиццу будем заказывать?</h2>
    <br /><br />

    <label> <input type="radio" value="Сырная" v-model="pizza" /> Сырная </label>
    <label> <input type="radio" value="Мясная" v-model="pizza" /> Мясная </label>
    <label> <input type="radio" value="Пеперони" v-model="pizza" /> Пеперони </label>
    <label> <input type="radio" value="Сырный цыпленок" v-model="pizza" /> Сырный цыпленок </label>
    <label> <input type="radio" value="Карбонара" v-model="pizza" /> Карбонара </label><br /><br /><br />
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

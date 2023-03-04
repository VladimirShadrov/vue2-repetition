<template>
  <div>
    <h1 class="content__theme-title">Работа с Checkbox</h1>
    <br />

    <h3>Компонент: AppCheckbox.vue</h3>
    <br />

    <h3>
      Задача: <br />
      - Связать все чекбоксы с моделью <br />
      - В заголовке вывести выбранные значения <br />
      - Установить значения по-умолчанию <br />
    </h3>
    <br /><br />

    <!-- РЕАЛИЗАЦИЯ -->

    <h2>Какую пиццу будем заказывать?</h2>
    <br /><br />

    <label> <input type="checkbox" v-model="checked" value="Сырная" /> Сырная </label>
    <label> <input type="checkbox" v-model="checked" value="Мясная" /> Мясная </label>
    <label> <input type="checkbox" v-model="checked" value="Пеперони" /> Пеперони </label>
    <label> <input type="checkbox" v-model="checked" value="Сырный цыпленок" /> Сырный цыпленок </label>
    <label> <input type="checkbox" v-model="checked" value="Карбонара" /> Карбонара </label><br /><br /><br />
    <hr />
    <br />

    <h4>Вы выбрали:</h4>
    <br />

    <h4 v-for="item in checked" :key="item">{{ item }}</h4>
  </div>
</template>

<script>
export default {
  name: 'app-checkbox',
  data() {
    return {
      checked: ['Пеперони', 'Сырный цыпленок'],
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

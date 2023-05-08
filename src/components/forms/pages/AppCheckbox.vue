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

    <label> <input v-model="text" value="Сырная" type="checkbox" /> Сырная </label>
    <label> <input v-model="text" value="Мясная" type="checkbox" /> Мясная </label>
    <label> <input v-model="text" value="Пеперони" type="checkbox" /> Пеперони </label>
    <label> <input v-model="text" value="Сырный цыпленок" type="checkbox" /> Сырный цыпленок </label>
    <label> <input v-model="text" value="Карбонара" type="checkbox" /> Карбонара </label><br /><br /><br />
    <hr />
    <br />

    <h4>Вы выбрали:</h4>
    <br />

    <h4 v-for="item in selected" :key="item">{{ item }}</h4>
  </div>
</template>

<script>
export default {
  name: 'app-checkbox',
  data() {
    return {
      text: [],
    };
  },
  computed: {
    selected() {
      return this.text;
    },
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

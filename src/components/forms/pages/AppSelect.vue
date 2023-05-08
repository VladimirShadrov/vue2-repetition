<template>
  <div>
    <h1 class="content__theme-title">Работа с выпадающими списками</h1>
    <br />

    <h3>Компонент: AppSelect.vue</h3>
    <br />

    <h3>
      Задача: <br />
      - Создать элементы выпадающего списка <br />
      - Установить значение по-умолчанию с помощью selected <br />
      - Связать выпадающий список с моделью <br />
      - Установить значение по-умолчанию <br />
      - Вывести выбранный элемент под чертой <br />
    </h3>
    <br /><br />

    <!-- РЕАЛИЗАЦИЯ -->

    <select v-model="pizza">
      <option v-for="item in options" :key="item">{{ item }}</option>
    </select>
    <br /><br />
    <hr />
    <br />

    <h4>Вы выбрали:</h4>
    <br />

    <h4>{{ pizza }}</h4>
  </div>
</template>

<script>
export default {
  name: 'app-select',
  data() {
    return {
      options: ['Сырная', 'Мясная', 'Пеперони', 'Сырный цыпленок', 'Карбонара'],
      pizza: '',
    };
  },
};
</script>

<style scoped>
select {
  width: 200px;
  padding: 4px 6px;
  border-radius: 0;
  outline: none;
}

option {
  padding: 6px 3px;
}
</style>

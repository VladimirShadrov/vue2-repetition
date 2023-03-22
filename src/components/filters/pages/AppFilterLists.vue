<template>
  <div>
    <h1 class="content__theme-title">Фильтрация списков</h1>
    <br />

    <h3>Компонент: AppFilterLists.vue</h3>
    <br />

    <h3>
      Задача: <br />
      - Реализовать фильтрацию имен по значению, введенному в текстовое поле; <br />
      - При фильтрации не должен учитываться регистр; <br />
      - Результат фильтрации вывести под чертой; <br />
    </h3>
    <br /><br />

    <input v-model="inputValue" type="text" class="input" /><br /><br />
    <hr />
    <br />

    <p class="list-item" v-for="name in nameFiltred" :key="name">
      <!-- <b>Сюда вывести список</b> -->
      <b>{{ name }}</b>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app-filter-lists',
  data() {
    return {
      names: ['Вова', 'Лена', 'Юля', 'Оля', 'Мария', 'Никита', 'Алена'],
      placeholder: 'Введите имя...',
      inputValue: '',
    };
  },
  computed: {
    nameFiltred() {
      return this.names.filter((name) => name.toLowerCase().includes(this.inputValue));
    },
  },
};
</script>

<style scoped>
.input {
  padding: 4px 6px;
  width: 300px;
}
.list-item {
  font-size: 22px;
  line-height: 28px;
}
</style>

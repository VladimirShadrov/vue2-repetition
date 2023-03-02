<template>
  <div>
    <h1 class="content__theme-title">Фильтрация списков</h1>
    <br />

    <h3>
      Задача: <br />
      - Реализовать фильтрацию имен по значению, введенному в текстовое поле; <br />
      - При фильтрации не должен учитываться регистр; <br />
      - Результат фильтрации вывести под чертой; <br />
    </h3>
    <br /><br />

    <input type="text" :placeholder="placeholder" v-model="inputValue" class="input" /><br /><br />
    <hr />
    <br />

    <p v-for="name of list" :key="name" class="list-item">
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
    list() {
      return this.names.filter((name) => name.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1);
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

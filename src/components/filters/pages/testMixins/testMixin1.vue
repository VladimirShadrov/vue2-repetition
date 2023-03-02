<template>
  <div>
    <h2>Компонент 1</h2>
    <br /><br />

    <input type="text" class="input" :placeholder="placeholder" v-model="inputValue" /><br /><br />
    <hr />
    <br />

    <p class="list-item" v-for="name of list" :key="name">
      <b>{{ name }}</b>
    </p>
  </div>
</template>

<script>
import { filterMixin } from '@/myMixin.js';

export default {
  name: 'test-mixin-1',
  data() {
    return {
      placeholder: 'Введите имя...',
      //   names: ['Вова', 'Лена', 'Юля', 'Оля', 'Мария', 'Никита', 'Алена'],
      //   inputValue: '',
    };
  },
  //   computed: {
  //     list() {
  //       return this.names.filter((name) => name.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1);
  //     },
  //   },
  mixins: [filterMixin],
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

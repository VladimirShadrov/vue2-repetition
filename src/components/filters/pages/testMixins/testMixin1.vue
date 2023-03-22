<template>
  <div>
    <h2>Компонент 1</h2>
    <br /><br />

    <input type="text" class="input" :placeholder="placeholder" v-model="inputValue" /><br /><br />
    <hr />
    <br />

    <p class="list-item" v-for="name of filtredNames" :key="name">
      <b>{{ name }}</b>
    </p>
  </div>
</template>

<script>
import { filterMixin } from '@/myMixin';

export default {
  name: 'test-mixin-1',
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

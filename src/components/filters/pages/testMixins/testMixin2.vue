<template>
  <div>
    <h2>Компонент 2</h2>
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
export default {
  name: 'test-mixin-2',
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

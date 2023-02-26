<template>
  <div>
    <h2>Я глобальный компонент</h2>
    <br />
    <div>
      Счетчик: <b>{{ counter }}</b>
    </div>
    <br /><br />
    <button @click="counter++" class="button">Увеличить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style></style>

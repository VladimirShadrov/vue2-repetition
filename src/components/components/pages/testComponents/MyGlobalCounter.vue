<template>
  <div style="padding: 16px; border: 1px solid black">
    <h2>Я глобальный счетчик</h2>
    <br />
    <div>
      Счетчик: <b>{{ counter }}</b>
    </div>
    <br /><br />
    <button class="button">Увеличить</button>
  </div>
</template>

<script>
export default {
  name: 'my-global-counter',
  props: { counter: { type: Number } },
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
};
</script>

<style scoped></style>

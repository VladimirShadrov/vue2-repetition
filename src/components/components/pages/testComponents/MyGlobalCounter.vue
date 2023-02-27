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
import { eventBus } from '@/main';

export default {
  name: 'my-global-counter',
  data() {
    return {
      counter: 0,
    };
  },
  created() {
    eventBus.$on('updateCounter', (num) => {
      this.counter += num;
    });
  },
};
</script>

<style scoped></style>

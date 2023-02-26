<template>
  <div>
    <h1 class="content__theme-title">Локальная и глобальная регистрация</h1>
    <br />

    <h3>Компонент: AppRegistration.vue</h3>
    <br />

    <h4>Задача: В файле main.js зарегистрировать глобально компонент "testComponents/MyGlobalCounter.vue" и вывести его здесь под чертой</h4>
    <br />

    <div>
      <div>
        Счетчик: <b>{{ counter }}</b>
      </div>
      <br /><br />
      <button @click="counter++" class="button">Увеличить</button>
    </div>
    <br /><br />
    <hr />
    <br />
  </div>
</template>

<script>
export default {
  name: 'app-registration',
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style></style>

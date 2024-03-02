<template>
  <div>
    <h1 class="content__theme-title">Модель для работы с формами</h1>
    <br />
    <h3>Компонент: AppVModel.vue</h3>
    <br />

    <h4>
      Задача: <br /><br />
      - Реализовать двухсторонне связывание input с данными с помощью события input <br />
      - Вывести в шаблон значение, введенное в input <br />
      - Сделать то же самое с помощью v-model <br />
      - Установить модификаторы для v-model
    </h4>
    <br />

    <input v-model="inputValue" type="text" /><br /><br />

    <!-- СЮДА ВЫВЕСТИ ТЕКСТ -->
    <h2>{{ inputValue }}</h2>
  </div>
</template>

<script>
export default {
  name: 'app-v-model',
  data() {
    return {
      inputValue: 'Some value: ',
    };
  },
};
</script>

<style></style>

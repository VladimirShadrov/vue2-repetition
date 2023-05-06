<template>
  <div>
    <h1 class="content__theme-title">Работа со списками</h1>
    <br />

    <h3>Компонент: AppLists.vue</h3>
    <br />

    <h4>
      Задача 1: <br />
      - Отрисовать список элементов из массива "people". Вывести данные в формате: № п/п: ..., Имя: ..., профессия: ... <br />
      - Использовать циклы "for in", "for of"
    </h4>
    <br />

    <!-- РЕШЕНИЕ ЗАДАЧИ 1 -->
    <h3 v-for="(item, index) in people" :key="item">{{ index + 1 }}. {{ item.name }}, {{ item.job }}</h3>
    <br /><br />

    <h4>
      Задача 2: <br />
      - Отрисовать данные объекта "person" в виде списка в формате: № п/п ..., Ключ: ..., Значение: ...
    </h4>
    <br />

    <!-- РЕШЕНИЕ ЗАДАЧИ 2 -->
    <h3 v-for="(keyValue, keyName, index) in person" :key="keyName">{{ index + 1 }}. {{ keyName }}, {{ keyValue }}</h3>
  </div>
</template>

<script>
export default {
  name: 'app-lists',
  data() {
    return {
      people: [
        {
          name: 'Вова',
          job: 'Frontend',
        },
        {
          name: 'Лена',
          job: 'Подбор персонала',
        },
        {
          name: 'Юля',
          job: 'Логопед-студент',
        },
        {
          name: 'Оля',
          job: 'Школьник',
        },
      ],
      person: {
        name: 'Владимир',
        age: 48,
        job: 'Frontend',
        company: 'IMC',
      },
    };
  },
};
</script>

<style></style>

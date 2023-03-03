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

    <h3 v-for="(person, index) of people" :key="person">{{ index + 1 }}. {{ person.name }}, {{ person.job }}</h3>
    <br /><br />

    <h4>
      Задача 2: <br />
      - Отрисовать данные объекта "person" в виде списка в формате: № п/п ..., Ключ: ..., Значение: ...
    </h4>
    <br />

    <h3 v-for="(value, key, index) in person" :key="index">{{ index + 1 }}. {{ key }}: {{ value }}</h3>
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
          job: 'Логопед',
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

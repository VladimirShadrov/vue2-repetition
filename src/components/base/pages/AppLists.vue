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
    <h3></h3>
    <br /><br />

    <h4>
      Задача 2: <br />
      - Отрисовать данные объекта "person" в виде списка в формате: № п/п ..., Ключ: ..., Значение: ...
    </h4>
    <br />

    <!-- РЕШЕНИЕ ЗАДАЧИ 2 -->
    <h3></h3>
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
          job: 'Frontend (Exist.ru)',
        },
        {
          name: 'Лена',
          job: 'Подбор персонала (Болевар)',
        },
        {
          name: 'Юля',
          job: 'Логопед-студент (МПГУ)',
        },
        {
          name: 'Оля',
          job: 'Химик-студент (МИРЭА)',
        },
      ],
      person: {
        name: 'Владимир',
        age: 48,
        job: 'Frontend',
        company: 'Exist.ru',
      },
    };
  },
};
</script>

<style></style>

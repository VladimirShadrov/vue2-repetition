<template>
  <div>
    <h1 class="content__theme-title">Отслеживание изменений с Watch</h1>
    <br />

    <h3>Компонент: AppWatch.vue</h3>
    <br />

    <h3>Тема: Отследить изменение данных</h3>
    <br />

    <h4>
      Задача:<br />
      - При клике по кнопке "Увеличить 1" отследить изменение данных и вывести результат в строку "Текущее значение счетчика 1" <br />
    </h4>
    <br />

    <div>
      Счетчик 1: <b>{{ counter }}</b>
    </div>
    <br />

    <button @click="counter++" class="button">Увеличить 1</button><br /><br />

    <p>
      Текущее значение счетчика 1: <b>{{ counter1Value }}</b>
    </p>
    <br />
    <hr />
    <br />

    <h3>Тема: Отследить изменения вложенных свойств объекта</h3>
    <br />

    <h4>
      Задача: <br />
      - При клике по кнопке "Увеличить 2" отследить изменения свойства "counter2" объекта "counters" и вывести результат в строку "Текущее значение
      счетчика 2" <br />
    </h4>
    <br />

    <div>
      Счетчик 2: <b>{{ counters.counter2 }}</b>
    </div>
    <br />

    <button @click="counters.counter2++" class="button">Увеличить 2</button><br /><br />

    <p>
      Текущее значение счетчика 2: <b>{{ counters.counter2 }}</b>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app-watch',
  data() {
    return {
      counter: 0,
      counter1Value: 0,
      counters: {
        counter2: 0,
        counter2Value: 0,
      },
    };
  },
  watch: {
    counter() {
      this.counter1Value = this.counter;
    },
    'counters.counter2'() {
      this.counters.counter2Value = this.counters.counter2;
    },
  },
};
</script>

<style scoped>
.button {
  padding: 4px 6px;
  cursor: pointer;
}
</style>

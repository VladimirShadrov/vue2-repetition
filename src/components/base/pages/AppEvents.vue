<template>
  <div>
    <h1 class="content__theme-title">Работа с событиями</h1>
    <h3>Компонент: AppEvents.vue</h3>
    <br />
    <h3>Тема: Добавление параметров в метод</h3>
    <br />
    <h4>
      Задача: <br />
      - Добавить событие и обработчик на кнопки и изменть значение каунтера; <br />
      - При наведении курсора на заголовок "Counter" изменить его цвет.
    </h4>
    <br />

    <!-- РЕШЕНИЕ. ЗАДАЧА 1 -->
    <h2 @mouseenter="changeColor($event, 'enter')" @mouseleave="changeColor($event, 'leave')">Counter: {{ counter }}</h2>
    <br />

    <button class="button" @click="counter++">Увеличить</button>
    <button class="button" @click="counter--">Уменьшить</button><br /><br />
    <hr />
    <br />

    <h3>Тема: Передача параметров в метод</h3>
    <br /><br />
    <h4>
      Задача: <br />
      - Установить слушатели событий на кнопки и передать в обработчик значение, на которое нужно изменить счетчик <br />
      - Динамически создать текст для заголовка "Counter2" (Увеличен на ...) <br />
      - Передать в функцию-обработчик объект события и изменить цвет шрифта кнопки, на которой произошло событие <br />
    </h4>
    <br />

    <!-- РЕШЕНИЕ. ЗАДАЧА 2 -->
    <h2>Counter2 {{ title }}: {{ counter2 }}</h2>
    <br />

    <button class="button" @click="changeCounter2($event, 5)">Увеличить на 5</button>
    <button class="button" @click="changeCounter2($event, 10)">Увеличить на 10</button><br /><br />
    <hr />
    <br />

    <h3>Тема: Модификаторы событий</h3>
    <br /><br />

    <h4>Задача: Отменить у ссылки стандартное поведение (запретить переход по ссылке)</h4>
    <br />

    <!-- РЕШЕНИЕ. ЗАДАЧА 3 -->
    <h3>
      <a @click.prevent="" href="https://yandex.ru" target="blank">Yandex</a>
    </h3>
    <br />
    <hr />
    <br />

    <h4>
      Задача: <br />
      - Установить событие keyup на input <br />
      - При нажатии на клашу enter вывести введенный текст в параграф
    </h4>
    <br />

    <!-- РЕШЕНИЕ. ЗАДАЧА 4 -->
    <input @keyup="saveInputText" type="text" /><br /><br />
    <p>
      Вы ввели текст: <b>{{ inputText }}</b>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app-events',
  data() {
    return {
      counter: 0,
      counter2: 0,
      inputText: '',
      title: '',
    };
  },
  methods: {
    saveInputText(event) {
      if (event.keyCode === 13) {
        this.inputText = event.target.value;
      }
      console.log(event);
    },
    changeColor(event, prop) {
      switch (prop) {
        case 'enter':
          event.target.style.color = 'red';
          break;
        case 'leave':
          event.target.style.color = 'black';
          break;
      }
    },
    changeCounter2(event, num) {
      this.counter2 += num;
      this.title = `(Увеличен на ${num})`;

      switch (num) {
        case 5:
          event.target.style.color = 'red';
          break;
        case 10:
          event.target.style.color = 'blue';
          break;
      }
    },
  },
};
</script>

<style scoped>
.button {
  margin-right: 8px;
  padding: 4px 6px;
  cursor: pointer;
}
</style>

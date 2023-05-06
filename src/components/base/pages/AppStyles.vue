<template>
  <div>
    <h1 class="content__theme-title">Работа с классами и стилями</h1>
    <br />
    <h4>Компонент AppStyles.vue</h4>
    <br />

    <h3>Тема: Динамическое добавление CSS классов</h3>
    <br />

    <h4>
      Задача: <br />
      1. Использовать объектный синтаксис <br />
      - При клике на круг 1 добавить ему класс "purple"; <br />
      - При клике на круг 1 добавить ему класс "purple", при повторном клике добавить ему класс "blue" (класс зависит от значения свойства в данных);
      <br /><br />

      2. Для круга 2 Добавить класс (из заданных в стилях) при вводе его названия в input (привязать к переменной в данных); <br /><br />

      3. Используя синтаксис массива: <br />
      - Задать кругу 2 класс, введенный в инпут (выбирать из purple, blue, red, yellow) <br />
      - Первым элементом массива задать класс, введенный в input и если в input ничего не введено, вторым элементом массива применить условия для
      добаления класса как у круга 1 <br /><br />

      4. Решить все задачи с помощью методов и computed свойств (вернуть объект с заданными классами)
    </h4>
    <br /><br />
    <div class="wrapper">
      <div class="circle">1</div>
      <div class="circle">2</div>
      <br /><br />
      <input type="text" class="input" placeholder="class name" />
    </div>
    <br /><br />

    <h3>Тема: Динамические стили</h3>
    <br />

    <h4>
      Задача: используя синтаксис объекта/массива, метод, computed свойство, реализовать следующее: <br /><br />
      - Кругу 1 задать свойство background, значение взять из input "style value", <br />
      - Кругу 1 задать высоту, значение взять из input "height", <br />
      - Кругу 2 помимо изменения цвета и высоты задать ширину, значение взять из input "height"
    </h4>
    <br /><br />

    <div class="wrapper">
      <div :style="style1" class="circle">1</div>
      <div :style="style2" class="circle">2</div>
      <br /><br />
      <input v-model="color" type="text" class="input" placeholder="style value" />
      <input v-model="height" type="text" class="input" placeholder="height" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      activeClass: '',
      color: '',
      height: '',
    };
  },
  computed: {
    style1() {
      return { background: this.color, height: `${this.height}px` };
    },
    style2() {
      return { background: this.color, height: `${this.height}px`, width: `${this.height}px` };
    },
  },
};
</script>

<style scoped>
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 25px;
}

.purple {
  background: purple;
}

.blue {
  background: blue;
}

.red {
  background: red;
}
.yellow {
  background: yellow;
}

.wrapper {
  display: flex;
  align-items: flex-end;
}

.input {
  padding: 4px 8px;
  margin-right: 8px;
}
</style>

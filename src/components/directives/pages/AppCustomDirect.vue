<template>
  <div>
    <h1 class="content__theme-title">Создание собственной директивы</h1>
    <br />

    <h3>Компонент: AppCustomDirect.vue</h3>
    <br />

    <h4>
      Задача: <br />
      - В папке SRC создать файл directives.js <br />
      - Создать в этом файле объект с названием директивы, которую хотим создать <br />
      - В файле main.js импортировать этот объект <br />
      - До инициализации приложения вызвать у Vue метод "Vue.directive('directive-name', directive-object)" <br />
      - В объекте создать метод "bind(el, bindings, vnode)". Аргументы метода bind: <br />
      - el - элемент, к которому будет применена директива <br />
      - bindings - (только для чтения)<br />
      - vnode - элемент виртуального дерева (только для чтения)<br />
      - В созданном методе описать действа над элементом (el). Например: el.style.color = 'blue' <br />
      - Применить директиву к элементу шаблона в компоненте. Пример: "h1" v-my-new-directive>Какой-то текст "/h1">
      <br />
    </h4>
    <br /><br />

    <h1 v-my-directive>Моя директива</h1>
  </div>
</template>

<script>
export default {
  name: 'app-custom-directive',
};
</script>

<style></style>

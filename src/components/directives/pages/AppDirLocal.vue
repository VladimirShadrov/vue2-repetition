<template>
  <div>
    <h1 class="content__theme-title">Локальная регистрация директивы</h1>
    <br />

    <h3>Компонент: AppDirLocal.vue</h3>
    <br />

    <h4>
      Задача: <br />
      - В папке SRC создать файл directives.js <br />
      - Создать в этом файле объект с названием директивы, которую хотим создать
      <pre style="font-size: 18px">
            <code >
        export const myDirective = {
            /**
            *
            * @param {*} el - элемент, к которому будет применена директива
            * @param {*} bindings (только для чтения)
            * @param {*} vnode Нода виртуального дерева (только для чтения)
            */
            bind(el, bindings, vnode) {
                el.style.color = 'blue';
                bindings;
                vnode;
            },
        };
            </code>
        </pre>
      - В файле main.js импортировать этот объект <br />
      - До инициализации приложения вызвать у Vue метод "Vue.directive('directive-name', directive-object)" <br />
      <pre style="font-size: 18px">
            <code>
    import { myDirective } from './directive

    Vue.directive('my-directive', myDirective);
            </code>
        </pre>

      - В объекте создать метод "bind(el, bindings, vnode)" <br />
      - В созданном методе описать действа над элементом (el). Например: el.style.color = 'blue' <br />
      - Применить директиву к элементу шаблона в компоненте. Пример:
      <pre style="font-size: 18px">
        <code>
            &lt;<span>h1</span>&gt;v-my-directive>Моя директива&lt;<span>/h1</span>&gt;
        </code>
      </pre>
    </h4>

    <h1 v-my-directive>Моя директива</h1>
  </div>
</template>

<script>
export default {
  name: 'app-custom-directive',
};
</script>

<style></style>

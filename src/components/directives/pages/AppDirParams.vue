<template>
  <div>
    <h1 class="content__theme-title">Параметры, Аргументы, Модификаторы для директив</h1>
    <br />

    <h3>Компонент: AppDirParams.vue</h3>
    <br />

    <h2>Тема: Параметры для директивы</h2>
    <br />

    <h4>
      Задача: <br />
      - Для заголовка создать возможность динамически передать цвет как параметр в директиву
      <pre style="font-size: 18px">
            <code >

        &lt;<span>h1</span>&gt;v-my-directive="'red'">Передать цвет в дитективу&lt;<span>/h1</span>&gt;

                
        export const myDirective = {
            bind(el, bindings, vnode) {
                el.style.color = bindings.value;
            },
        };
            </code>
        </pre>

      <h1 v-color="'red'">Передать цвет в дитективу</h1>
      <br /><br />

      <h2>Тема: Аргументы для директивы</h2>
      <br />

      <h4>Аргумент директивы это то, что передается после двоеточия</h4>
      <br />

      <h4>
        Задача: <br />
        - Создать 2 заголовка <br />
        - Первому заголовку в качестве аргумента передать background <br />
        - Второму заголовку в качестве аргумента передать color <br />
      </h4>
      <br />

      <h1 v-fontBG:background="'red'">Сделать фон красным</h1>
      <h1 v-fontBG:color="'blue'">Сделать цвет синим</h1>

      <pre style="font-size: 18px">
         <code>
      &lt;<span>h1</span>&gt;v-my-directive:background="'red'">Сделать фон красным&lt;<span>/h1</span>&gt;
      &lt;<span>h1</span>&gt;v-my-directive:color="'blue'">Сделать цвет синим&lt;<span>/h1</span>&gt;

      export const myDirective = {
        bind(el, bindings, vnode) {
            const arg = bindings.arg;
            el.style[arg] = bindings.value;
        },
      };
         </code>
      </pre>
      <br /><br />

      <h2>Тема: Модификаторы для директивы</h2>
      <br />

      <h4>
        Задача: <br />
        - Создать 2 заголовка <br />
        - Первому заголовку создать модификатор, который будет изменять размер шрифта <br />
        - Второму заголовку создать модификатор, который будет изменять цвет с задержкой <br />
      </h4>
      <br />

      <h1 v-my-directive:background.fontSize="'red'">Сделать фон красным и изменить размер шрифта</h1>
      <h1 v-my-directive:color.delay="'blue'">Сделать цвет синим через 2 секунды</h1>

      <pre style="font-size: 18px">
        <code>
    &lt;<span>h1</span>&gt;v-my-directive:background.fontSize="'red'">Сделать фон красным и изменить размер шрифта&lt;<span>/h1</span>&gt;
    &lt;<span>h1</span>&gt;v-my-directive:color.delay="'blue'">Сделать цвет синим через 2 секунды&lt;<span>/h1</span>&gt;

    export const myDirective = {
        bind(el, bindings, vnode) {
            const arg = bindings.arg;

            const fontSizeModifire = bindings.modifiers['fontSize'];

            if (fontSizeModifire) {
            el.style[arg] = bindings.value;
            el.style.fontSize = '40px';
            }

            let delay = 0;

            const delayModifire = bindings.modifiers['delay'];

            if (delayModifire) {
            delay = 2000;

            setTimeout(() => {
                el.style[arg] = bindings.value;
            }, delay);
            }
        },
    };

    
        </code>
      </pre>
    </h4>
  </div>
</template>

<script>
export default {
  name: 'app-custom-directive',
  directives: {
    color: {
      bind(el, bindings) {
        el.style.color = bindings.value;
      },
    },
    fontBG: {
      bind(el, bindings) {
        const arg = bindings.arg;
        el.style[arg] = bindings.value;
      },
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <h1 class="content__theme-title">Локальная регистрация директивы</h1>
    <br />

    <h3>Компонент: AppDirLocal.vue</h3>
    <br />

    <h4>
      Задача: <br />
      - Создать 2 заголовка <br />
      - Создать локально 2 директивы.<br />
      - Первая изменяет цвет элемента <br />
      - У второй модификатор изменят цвет фона элемента <br />
      - Применить директивы к двум заголовкам<br />
    </h4>
    <br />

    <h1 v-color="'blue'">Сделать цвет синим</h1>
    <h1 v-fontBG:background="'red'">Сделать фон красным</h1>
    <br />

    <h4>
      <pre style="font-size: 18px">
        <code>
    &lt;<span>h1</span>&gt;v-color="'blue'">Сделать цвет синима&lt;<span>/h1</span>&gt;
    &lt;<span>h1</span>&gt;v-fontBG:background="'red'">Сделать фон красным&lt;<span>/h1</span>&gt;

    export default {
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
        </code>
    </pre>
    </h4>
  </div>
</template>

<script>
export default {
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

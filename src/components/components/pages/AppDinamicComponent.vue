<template>
  <div>
    <h1 class="content__theme-title">Динамические компоненты</h1>
    <br />

    <h3>Компонент: AppDinamicComponent.vue</h3>
    <br />

    <h3>
      Задача: <br /><br />
      - Импортировать компоненты AppDynamic1.vue и AppDynamic2.vue <br />
      - При нажатии на кнопки настроить переключение между компонентами <br />
      - Сделать то же самое с помощью &lt;component&gt; настроить переключение между компонентами <br />
      - С помощью Keep-Alive сохранять изменения в компонентах после переключения и их повторной отрисовки <br />
      - В динамический компонент передать компонент, который нужно использовать с помощью computed <br />
    </h3>
    <br /><br />

    <button class="button">Компонент 1</button>
    <button class="button">Компонент 2</button><br /><br /><br />

    <!-- ЗДЕСЬ ОТРИСОВАТЬ ДИНАМИЧЕСКИЕ КОМПОНЕНТЫ -->
  </div>
</template>

<script>
export default {
  name: 'app-dinamic-component',
  data() {
    return {
      activeComponent: 1,
    };
  },
};
</script>

<style scoped>
.button {
  padding: 6px 8px;
  cursor: pointer;
  margin: 0 8px;
}
</style>

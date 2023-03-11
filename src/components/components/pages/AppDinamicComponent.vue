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

    <button @click="active = 1" class="button">Компонент 1</button>
    <button @click="active = 2" class="button">Компонент 2</button><br /><br /><br />

    <!-- ЗДЕСЬ ОТРИСОВАТЬ ДИНАМИЧЕСКИЕ КОМПОНЕНТЫ -->

    <!-- <app-dynamic-1 v-if="active === 1"></app-dynamic-1>
    <app-dynamic-2 v-else-if="active === 2"></app-dynamic-2> -->

    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppDynamic1 from './testComponents/AppDynamic1.vue';
import AppDynamic2 from './testComponents/AppDynamic2.vue';

export default {
  name: 'app-dinamic-component',
  components: { AppDynamic1, AppDynamic2 },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    component() {
      let component = '';
      switch (this.active) {
        case 1:
          component = 'app-dynamic-1';
          break;
        case 2:
          component = 'app-dynamic-2';
          break;
      }
      return component;
    },
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

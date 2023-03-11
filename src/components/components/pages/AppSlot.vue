<template>
  <div>
    <h1 class="content__theme-title">Передача HTML компоненту (Slot)</h1>
    <br />

    <h3>Компонент: MySlot.vue</h3>
    <br />

    <h4>
      Задача 1: <br />
      - Импортировать компонент MySlot.vue <br />
      - Передать ему контент через slot <br />
    </h4>
    <br />

    <h4>
      Задача 2: <br />
      - У компонент MySlot.vue создать именованные слоты header, content, footer <br />
      - Передать ему контент для этих слотов <br />
    </h4>
    <br /><br /><br />

    <!-- СЮДА ВСТАВИТЬ MYSLOT -->

    <my-slot>
      <template slot="header">
        <p><b>Текст для шапки компонента</b></p>
        <br />
      </template>

      <template slot="content">
        <h2>Это заголовок для контентной области компонента</h2>
        <br />
        <p>Это текст для компонента</p>
        <p>Это текст для компонента</p>
        <p>Это текст для компонента</p>
        <p>Это текст для компонента</p>
        <br />
      </template>

      <template slot="footer">
        <p><b>Это контент для футера компонента</b></p>
      </template>
    </my-slot>
  </div>
</template>

<script>
import MySlot from './testComponents/MySlot.vue';

export default {
  name: 'app-scoped',
  components: { MySlot },
};
</script>

<style></style>

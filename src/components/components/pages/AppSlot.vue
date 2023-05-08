<template>
  <div>
    <h1 class="content__theme-title">Передача HTML компоненту (Slot)</h1>
    <br />

    <h3>Компонент: AppSlot.vue</h3>
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
        <div>это хедер</div>
      </template>
      <template slot="content">
        <div>
          <p>Это контент</p>
        </div>
      </template>
      <template slot="footer">
        <div>
          <p>Это footer</p>
        </div>
      </template>
    </my-slot>
  </div>
</template>

<script>
import MySlot from './testComponents/MySlot.vue';

export default {
  components: { MySlot },
  name: 'app-scoped',
};
</script>

<style></style>

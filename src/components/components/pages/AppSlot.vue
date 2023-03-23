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
      <div class="slot" slot="footer">footer</div>
      <div class="slot" slot="header">Header</div>
      <div class="slot" slot="body">Content</div>
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

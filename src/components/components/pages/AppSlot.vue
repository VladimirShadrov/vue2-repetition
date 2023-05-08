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
  </div>
</template>

<script>
export default {
  name: 'app-scoped',
};
</script>

<style></style>

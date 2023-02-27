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

    <my-slot>
      <h1 slot="header">Я компонент Slot</h1>

      <template slot="content">
        <h3>Я контент</h3>
        <p>
          Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Всемогущая на берегу, что от всех снова деревни
          несколько вершину! Назад имеет они составитель это предупредила ведущими решила, переулка, толку вопрос вдали реторический сбить домах
          оксмокс текстами ее, власти взгляд. Скатился жаренные коварный щеке злых лучше даже последний до выйти о грамматики?
        </p>
      </template>

      <h2 slot="footer">Я футер</h2>
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

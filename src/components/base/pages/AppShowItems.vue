<template>
  <div>
    <h1 class="content__theme-title">Управление отображением элементов</h1>
    <br />

    <h3>Компонент: AppShowItems.vue</h3>
    <br />

    <h4>
      Задача 1: <br />
      - Создать кнопку, которая будет перелючать свойсво в данных в значение true/false <br />
      - При помощи v-if отобразить "Заголовок 1" если значения свойства в данных === true <br />
      - При помощи v-if отобразить "Заголовок 2" если значения свойства в данных === false <br />
      - Реализовать то же самое с помощью v-if / v-else <br />
    </h4>
    <br />

    <h1 v-if="isVisible">Заголовок 1</h1>
    <h1 v-if="!isVisible">Заголовок 2</h1>
    <br />

    <button @click="isVisible = !isVisible" class="button">Показать другой заголовок</button><br /><br /><br />

    <h4>
      Задача 2: <br />
      - При помощи конструкции v-if / v-else-if / v-else реализовать последовательное отображение заголовков используя привязку input к свойству в
      данных
    </h4>
    <br />

    <h1 v-if="type === '1'">Заголовок 1</h1>
    <h1 v-else-if="type === '2'">Заголовок 2</h1>
    <h1 v-else-if="type === '3'">Заголовок 3</h1>
    <h1 v-else>Совпадений не найдено</h1>
    <br />

    <input v-model="type" class="input" type="text" placeholder="Номер заголовка" /><br /><br /><br />

    <h4>
      Задача 3: <br />
      - По клику по кнопке реализовать попеременное отображение заголовка и параграфа с текстом <br />
    </h4>
    <br />

    <template v-if="isVisible">
      <h1>Заголовок</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, debitis fugiat? Eaque expedita iusto blanditiis voluptatibus facilis sequi et
        suscipit.
      </p>
    </template>
    <template v-else>
      <h1 style="color: red">Заголовок</h1>
      <p style="color: blue">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, debitis fugiat? Eaque expedita iusto blanditiis voluptatibus facilis sequi et
        suscipit.
      </p>
    </template>

    <br /><br />

    <button @click="isVisible = !isVisible" class="button">Показать другой текст</button>
  </div>
</template>

<script>
export default {
  name: 'app-show-items',
  data() {
    return {
      isVisible: true,
      type: '',
    };
  },
};
</script>

<style scoped>
.input,
.button {
  padding: 4px 8px;
}

.button {
  cursor: pointer;
}
</style>

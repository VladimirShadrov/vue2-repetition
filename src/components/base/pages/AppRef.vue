<template>
  <div>
    <h1 class="content__theme-title">Доступ к DOM элементам</h1>
    <br />

    <h3>Компонент: AppRef.vue</h3>
    <br />

    <h4>Задача: При клике по кнопке "Изменить" изменить текст и цвет заголовка</h4>
    <br />

    <h1 ref="myTitle">{{ title }}</h1>
    <br />

    <button @click="showRefs" class="button">Изменить</button>
  </div>
</template>

<script>
export default {
  name: 'app-ref',
  data() {
    return {
      title: 'Текст заголовка',
      changed: true,
    };
  },
  methods: {
    showRefs() {
      const { myTitle } = this.$refs;
      myTitle.innerText = 'Новый текст заголовка';
      myTitle.style.color = 'blue';
    },
  },
};
</script>

<style>
.button {
  padding: 4px 8px;
  cursor: pointer;
}
</style>

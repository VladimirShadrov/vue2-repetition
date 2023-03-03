<template>
  <div>
    <h1 class="content__theme-title">Доступ к DOM элементам</h1>
    <br />

    <h3>Компонент: AppRef.vue</h3>
    <br />

    <h4>Задача: При клике по кнопке "Изменить" изменить текст и цвет заголовка</h4>
    <br />

    <h1 ref="title">{{ title }}</h1>
    <br />

    <button @click="changeColor" class="button">Изменить</button>
  </div>
</template>

<script>
export default {
  name: 'app-ref',
  data() {
    return {
      title: 'Текст заголовка',
      changed: true,
      change: true,
    };
  },
  methods: {
    changeColor() {
      this.change = !this.change;
      this.change ? (this.$refs.title.style.color = 'blue') : (this.$refs.title.style.color = 'purple');
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

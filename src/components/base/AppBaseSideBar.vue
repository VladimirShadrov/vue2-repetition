<template>
  <div class="side-bar">
    <router-link v-for="item in menuItems" :key="item.id" :to="item.link" class="side-bar__menu-item">{{ item.name }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-base-side-bar',
  data() {
    return {
      menuItems: [
        {
          name: 'Динамические атрибуты',
          link: '/base/atributes',
        },
        {
          name: 'Вывод HTML кода',
          link: '/base/v-html',
        },
        {
          name: 'Работа с событиями',
          link: '/base/events',
        },
        {
          name: 'Ярлыки для директив',
          link: '/base/labels',
        },
        {
          name: 'Модель для работы с формами',
          link: '/base/v-model',
        },
        {
          name: 'Работа со стилями и классами',
          link: '/base/styles',
        },
        {
          name: 'Управление отображением элементов',
          link: '/base/v-if_v-show',
        },
        {
          name: 'Работа со списками',
          link: '/base/lists',
        },
        {
          name: 'Computed',
          link: '/base/computed',
        },
        {
          name: 'Watch',
          link: '/base/watch',
        },
        {
          name: 'Связывание разных приложений. Инстанс vue',
          link: '/base/vue-instance',
        },
        {
          name: 'Доступ к DOM элементам',
          link: '/base/ref',
        },
        {
          name: 'Свойство template',
          link: '/base/template',
        },
        {
          name: 'Жизненный цикл',
          link: '/base/life-cycle',
        },
        {
          name: 'Анимации',
          link: '/base/animation',
        },
      ],
    };
  },
};
</script>

<style></style>

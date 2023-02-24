<template>
  <div class="side-bar">
    <a v-for="(item, index) in menuItems" :key="index" :href="item.link" class="side-bar__menu-item">{{ item.name }}</a>
  </div>
</template>

<script>
export default {
  name: 'app-side-bar',
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
          name: 'Передача параметров в метод',
          link: '/base/method-attributes',
        },
        {
          name: 'Ярлыки для директив',
          link: '/base/directives-label',
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
      ],
    };
  },
};
</script>

<style></style>

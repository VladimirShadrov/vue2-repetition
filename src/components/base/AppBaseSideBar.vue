<template>
  <div class="side-bar">
    <router-link v-for="item in menuItems" :key="item.id" :to="item.link" class="side-bar__menu-item">{{ item.name }}</router-link>

    <!-- <a v-for="(item, index) in menuItems" :key="index" :href="item.link" class="side-bar__menu-item">{{ item.name }}</a> -->
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
          link: '/atributes',
        },
        {
          name: 'Вывод HTML кода',
          link: '/v-html',
        },
        {
          name: 'Работа с событиями',
          link: '/events',
        },
        {
          name: 'Передача параметров в метод',
          link: '/arguments',
        },
        {
          name: 'Ярлыки для директив',
          link: '/labels',
        },
        {
          name: 'Модель для работы с формами',
          link: '/v-model',
        },
        {
          name: 'Работа со стилями и классами',
          link: '/styles',
        },
        {
          name: 'Управление отображением элементов',
          link: '/v-if_v-show',
        },
        {
          name: 'Computed',
          link: '/computed',
        },
        {
          name: 'Watch',
          link: '/watch',
        },
        {
          name: 'Связывание разных приложений. Инстанс vue',
          link: '/vue-instance',
        },
        {
          name: 'Доступ к DOM элементам',
          link: '/ref',
        },
        {
          name: 'Свойство template',
          link: '/template',
        },
        {
          name: 'Жизненный цикл',
          link: '/life-cycle',
        },
      ],
    };
  },
};
</script>

<style></style>

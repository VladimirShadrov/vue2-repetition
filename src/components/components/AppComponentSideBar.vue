<template>
  <div class="side-bar">
    <a v-for="(item, index) in menuItems" :key="index" :href="item.link" class="side-bar__menu-item">{{ item.name }}</a>
  </div>
</template>

<script>
export default {
  name: 'app-components-side-bar',
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
      ],
    };
  },
};
</script>

<style></style>

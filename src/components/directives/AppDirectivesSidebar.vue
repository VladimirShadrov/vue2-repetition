<template>
  <div class="side-bar">
    <router-link v-for="item in menuItems" :key="item.id" :to="item.link" class="side-bar__menu-item">{{ item.name }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-directives-side-bar',
  data() {
    return {
      menuItems: [
        {
          name: 'Создание своей директивы, Глобальная регистрация',
          link: '/castom-directive',
        },
        {
          name: 'Параметры, Аргументы, Модификаторы',
          link: '/dir-params',
        },
        {
          name: 'Локальная регистрация',
          link: '/dir-local',
        },
      ],
    };
  },
};
</script>

<style></style>

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
          name: 'Создание своей директивы',
          link: '/castom-directive',
        },
      ],
    };
  },
};
</script>

<style></style>

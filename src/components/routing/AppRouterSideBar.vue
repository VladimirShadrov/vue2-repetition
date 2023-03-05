<template>
  <div class="side-bar">
    <router-link v-for="item in menuItems" :key="item.id" :to="item.link" class="side-bar__menu-item">{{ item.name }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-router-side-bar',
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: 'Настройка роутера',
          link: '/router-settings',
        },
      ],
    };
  },
};
</script>

<style></style>

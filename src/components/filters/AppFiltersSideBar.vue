<template>
  <div class="side-bar">
    <router-link v-for="item in menuItems" :key="item.id" :to="item.link" class="side-bar__menu-item">{{ item.name }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-filters-side-bar',
  data() {
    return {
      menuItems: [
        {
          name: 'Создание простых фильтров',
          link: '/easy-filter',
        },
        {
          name: 'Фильтрация списков',
          link: '/filter-lists',
        },
        {
          name: 'Использование миксинов',
          link: '/use-mixins',
        },
      ],
    };
  },
};
</script>

<style></style>

<template>
  <div class="side-bar">
    <router-link v-for="item in menuItems" :key="item.id" :to="item.link" class="side-bar__menu-item">{{ item.name }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-form-side-bar',
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: 'Работа с Тextarea',
          link: '/textarea',
        },
        {
          id: 2,
          name: 'Работа с Checkbox',
          link: '/checkbox',
        },
        {
          id: 3,
          name: 'Работа с Radio buttons',
          link: '/radio-buttons',
        },
        {
          id: 4,
          name: 'Работа с Select',
          link: '/select',
        },
        {
          id: 5,
          name: 'Работа с v-model.number',
          link: '/model-number',
        },
      ],
    };
  },
};
</script>

<style></style>

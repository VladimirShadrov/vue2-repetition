<template>
  <div class="side-bar">
    <router-link v-for="item in menuItems" :key="item.id" :to="item.link" class="side-bar__menu-item">{{ item.name }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-components-side-bar',
  data() {
    return {
      menuItems: [
        {
          name: 'Локальная и глобальная регистрация',
          link: '/registration',
        },
        {
          name: 'Названия компонентов',
          link: '/component-title',
        },
        {
          name: 'Передача параметров компоненту',
          link: '/props',
        },
        {
          name: 'Передача параметров от дочернего компонента',
          link: '/emit',
        },
        {
          name: 'Связь дочерних компонентов',
          link: '/children',
        },
        {
          name: 'Использование event emitter',
          link: '/emitter',
        },
        {
          name: 'Изолированные стили',
          link: '/scoped',
        },
      ],
    };
  },
};
</script>

<style></style>

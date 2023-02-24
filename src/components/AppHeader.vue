<template>
  <div class="header">
    <div class="logo">
      <h1>Vue 2</h1>
    </div>
    <div class="menu">
      <a v-for="item in menuItems" :key="item.id" :href="item.link" class="menu__item">{{ item.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: 'Основы',
          link: '/base',
        },
        {
          id: 2,
          name: 'Компоненты',
          link: '/components',
        },
        {
          id: 3,
          name: 'Директивы',
          link: '/directives',
        },
        {
          id: 4,
          name: 'Фильты и Миксины',
          link: '/filters',
        },
        {
          id: 5,
          name: 'Работа с формами',
          link: '/forms',
        },
        {
          id: 6,
          name: 'Роутинг',
          link: '/router',
        },
        {
          id: 7,
          name: 'Работа с сервером',
          link: '/server',
        },
        {
          id: 8,
          name: 'Работа с данными',
          link: '/vuex',
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.header {
  background: #42b983;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.menu {
  display: flex;
  align-items: center;
}

.menu__item {
  text-decoration: none;
  font-weight: bold;
  border: none;
  outline: none;
  color: white;
  display: block;
  position: relative;
  margin-right: 12px;
  padding-right: 12px;
}

.menu__item::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background: white;
}

.menu__item:hover {
  text-shadow: 0 0 7px #fff;
}

.menu__item:last-child {
  margin-right: 0;
}

.menu__item:last-child::after {
  width: 0;
  height: 0;
}
</style>

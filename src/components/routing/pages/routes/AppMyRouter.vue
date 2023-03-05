<template>
  <div>
    <nav>
      <router-link class="link" v-for="rout in routerLinks" :key="rout.id" :to="rout.link" active-class="link-active">{{ rout.text }}</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app-my-router',
  data() {
    return {
      routerLinks: [
        { id: 1, link: '/page1', text: 'Страница 1' },
        { id: 2, link: '/page2', text: 'Страница 2' },
        { id: 3, link: '/page3', text: 'Страница 3' },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
}
.link {
  text-decoration: none;
  color: rgb(151, 148, 148);
  font-weight: bold;
  outline: none;
  padding: 12px;
}

.link-active {
  color: black;
}
</style>

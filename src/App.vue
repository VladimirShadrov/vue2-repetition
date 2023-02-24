<template>
  <div id="app">
    <app-header />
    <router-view />
    <!-- <h1 class="content__theme-title">Для начала работы выбери пункт меню</h1> -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppHeader },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.container {
  display: flex;
  justify-content: flex-start;
  min-height: calc(100vh - 69px);
}

.side-bar {
  width: 20%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px 0;
}

.side-bar__menu-item {
  display: block;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  padding: 12px;
  font-weight: bold;
  transition: 0.3s;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.side-bar__menu-item:hover {
  background: rgba(0, 0, 0, 0.1);
}

.content-bar {
  padding: 16px;
  width: 80%;
}

.content__theme-title {
  text-align: center;
  margin: 15px 0;
}
</style>

<template>
  <div id="app">
    <app-header />
    <app-base />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppBase from './components/base/AppBase.vue';

export default {
  name: 'App',
  components: { AppHeader, AppBase },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.container {
  display: flex;
  justify-content: flex-start;
  min-height: 100vh;
}

.side-bar {
  width: 20%;
  border-right: 1px solid black;
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
}
</style>

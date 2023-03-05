<template>
  <div>
    <h1 class="content__theme-title">Настройка роутера</h1>
    <br />

    <h3>Компонент AppRouterSettings.vue</h3>
    <br />

    <h3>
      Задача: <br />
      - Добавить элементы навигации <br />
      - Настроить навигацию по страницам <br />
      - Добавить активный класс активной ссылке <br />
    </h3>
    <br /><br />

    <app-my-router />
  </div>
</template>

<script>
import AppMyRouter from './routes/AppMyRouter.vue';

export default {
  name: 'app-router-settings',
  components: { AppMyRouter },
};
</script>

<style></style>

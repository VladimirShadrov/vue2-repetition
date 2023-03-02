<template>
  <div>
    <h1 class="content__theme-title">Использование миксинов</h1>
    <br />

    <h3>
      Задача: <br />
      - Создать глобальный миксин <br />
      - Перенести в него логику фильтрации имен, аналогичную в теме "Фильтрация списков" <br />
      - Зарегистрировать этот миксин в testMixin1 и testMixin2 <br />
      - Отрисовать компоненты testMixin1 и testMixin2 на этой странице <br />
    </h3>
    <br /><br />

    <test-mixin-1 /><br />
    <hr />
    <br />

    <test-mixin-2 />
  </div>
</template>

<script>
import testMixin1 from './testMixins/testMixin1.vue';
import testMixin2 from './testMixins/testMixin2.vue';

export default {
  name: 'app-mixins',
  components: { testMixin1, testMixin2 },
};
</script>

<style></style>

<template>
  <div>
    <h1 class="content__theme-title">Жизненный цикл</h1>
    <br />

    <h3>Хуки жизненного цикла компонента:</h3>
    <br />

    <h3>1. beforeCreate - Перед инициализацие компонента</h3>
    <h3>2. created - Когда компонент инициализирован</h3>
    <h3>3. beforeMount - Перед встраиванием шаблона в ДОМ дерево</h3>
    <h3>4. mounted - Когда шаблон встроен</h3>
    <h3>5. beforeUpdate - Перед обновлением данных и ДОМ</h3>
    <h3>6. updated - Когда данные и ДОМ обновлены</h3>
    <h3>7. beforeDestroy - Перед уничтожением компонента</h3>
    <h3>8. destroyed - Когда компонент уничтожен</h3>
    <br />

    <h3>Уничтожить компонент: this.$destroy()</h3>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

<template>
  <div>
    <h1 class="content__theme-title">Работа с текстовыми областями</h1>
    <br />

    <h3>
      Задача: <br />
      - Связать текстовую область с моделью <br />
      - Вывести значение, введенное в текстовую область в параграф <br />
      - В параграфе должно сохраняться форматирование текста как в текстовой области (пробелы, переносы на новую строку) <br />
    </h3>
    <br /><br />

    <!-- РЕАЛИЗАЦИЯ -->

    <textarea></textarea><br /><br />

    <p></p>
  </div>
</template>

<script>
export default {
  name: 'app-textarea',
};
</script>

<style scoped>
textarea {
  height: 100px;
  width: 400px;
  font-size: 16px;
  padding: 6px;
}
</style>

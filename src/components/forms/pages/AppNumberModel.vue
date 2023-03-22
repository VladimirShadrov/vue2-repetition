<template>
  <div>
    <h1 class="content__theme-title">Работа с числовым модификатором v-model</h1>
    <br />

    <h3>Компонент: AppNumberModel.vue</h3>
    <br />

    <h3>
      Задача: <br />
      - Реаливать функционал связки текстового input с моделью <br />
      - В модель должны сохраняться только числа, строковые значения должны игнорироваться <br />
      - Под чертой вывести значение введенное в текстовый input <br />
      - Реализовать то же самое с числовым input <br />
    </h3>
    <br /><br />

    <!-- РЕАЛИЗАЦИЯ -->

    <input type="number" v-model.lazy="num" /><br /><br />
    <hr />
    <br />

    <h4>Вы ввели число:</h4>
    <br />

    <h4>{{ num | val }}</h4>
  </div>
</template>

<script>
export default {
  name: 'app-number-model',
  data() {
    return {
      num: 0,
    };
  },
  filters: {
    val(v) {
      console.log(+v.toLocaleString());
      return +v.toLocaleString();
    },
  },
};
</script>

<style scoped>
input {
  padding: 4px 6px;
  width: 200px;
}
</style>

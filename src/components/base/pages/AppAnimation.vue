<template>
  <div>
    <h1 class="content__theme-title">Анимации</h1>
    <br />

    <h3>Компонент: AppAnimation.vue</h3>
    <br />

    <h3>Принципы анимации:</h3>

    <h4>1. Обернуть элемент, который нужно анимировать в тег "transition"</h4>
    <h4>2. Тегу "transition" задать атрибут "name". Это имя анимации (animationName).</h4>
    <h4>3. Анимируется только 1 тег, поэтому нужно оборачивать в "transition" только 1 тег.</h4>
    <br />

    <h3>Этапы анимации (специальные CSS классы, которые добавляются к элементу на определенном этапе анимации):</h3>
    <br />
    <h4>Появление элемента (CSS классы):</h4>
    <h4>
      - animationName-enter - Элемент только появился в ДОМ дереве (на странице). Можно задать ему начальное состояние (стили). Это страртовая точка,
      от которой нужно делать анимацию.
    </h4>
    <h4>
      - animationName-enter-active - Этот этап длится пока элемент полностью не появится в ДОМ дереве (на странице). Время этого этапа мы задаем
      самостоятельно.
    </h4>
    <h4>- animationName-enter-to - Это конечное состояние. Те стили, которые должен получить элемент после отрисовки на странице.</h4>
    <br />
    <h4>Исчезновение элемента (CSS классы):</h4>
    <h4>
      - animationName-leave - Этот класс добавляется перед началом удаления элемента из ДОМ дерева (сокрытия на странице). Стартовая точка - стили
      перед удалением элемента.
    </h4>
    <h4>
      - animationName-leave-active - Этот класс добавляется в процессе удаления элемента из ДОМ дерева (сокрытия на странице). Стили в процессе
      удаления элемента. Время этого этапа мы задаем самостоятельно.
    </h4>
    <h4>- animationName-leave-to - Этот класс добавляется перед удаление элемента из ДОМ дерева (сокрытия на странице)</h4>
    <br /><br />

    <h3>
      Задача: <br />
      - Ввести слово или фразу в input <br />
      - По нажатию на enter добавить введенную фразу в список<br />
      - Вывести под чертой с анимацией введенный текст <br />
    </h3>
    <br />
    <hr />
    <br />

    <!-- ЗДЕСЬ КОД ДЛЯ РЕШЕНИЯ ЗАДАНИЯ -->
    <input @keydown.enter="addNews" v-model="news" type="text" style="padding: 4px 8px" placeholder="Введите фразу..." /><br /><br />
    <hr />
    <br />

    <h4 v-if="!newsArr.length">Новостей пока нет...</h4>
    <!-- СЮДА ДОБАВИТЬ СПИСОК -->
    <transition-group name="list">
      <h4 v-for="(item, index) in newsArrData" :key="item">{{ index + 1 }}. {{ item.text }}</h4>
    </transition-group>

    <!-- КОНЕЦ РЕШЕНИЯ -->
    <div style="margin-bottom: 300px"></div>
  </div>
</template>

<script>
export default {
  name: 'app-animation',
  data() {
    return {
      news: '',
      newsArr: [],
      id: 0,
    };
  },
  methods: {
    addNews() {
      const news = {
        id: this.id,
        text: this.news,
      };
      if (this.news.length) {
        this.newsArr.push(news);
        this.id++;
        this.news = '';
      } else {
        return;
      }
    },
  },
  computed: {
    newsArrData() {
      return this.newsArr;
    },
  },
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 3s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translate(30px, 200px);
}
</style>

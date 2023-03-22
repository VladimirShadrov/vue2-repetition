export const filterMixin = {
  data() {
    return {
      names: ['Вова', 'Лена', 'Юля', 'Оля', 'Мария', 'Никита', 'Алена'],
      placeholder: 'Введите имя...',
      inputValue: '',
    };
  },
  computed: {
    filtredNames() {
      return this.names.filter((name) => name.toLowerCase().includes(this.inputValue.toLowerCase()));
    },
  },
};

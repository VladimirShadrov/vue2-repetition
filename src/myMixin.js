export const filterMixin = {
  data() {
    return {
      names: ['Вова', 'Лена', 'Юля', 'Оля', 'Мария', 'Никита', 'Алена'],
      inputValue: '',
    };
  },
  computed: {
    list() {
      return this.names.filter((name) => name.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1);
    },
  },
};

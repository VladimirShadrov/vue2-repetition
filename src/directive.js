export const myDirective = {
  /**
   *
   * @param {*} el - элемент, к которому будет применена директива
   * @param {*} bindings (только для чтения)
   * @param {*} vnode Нода виртуального дерева (только для чтения)
   */
  bind(el, bindings, vnode) {
    el.style.color = 'blue';
    bindings;
    vnode;
  },
};

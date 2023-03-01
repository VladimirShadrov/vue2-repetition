export const myDirective = {
  bind(el, bindings, vnode) {
    const arg = bindings.arg;

    const fontSizeModifire = bindings.modifiers['fontSize'];

    if (fontSizeModifire) {
      el.style[arg] = bindings.value;
      el.style.fontSize = '40px';
    }

    let delay = 0;

    const delayModifire = bindings.modifiers['delay'];

    if (delayModifire) {
      delay = 2000;

      setTimeout(() => {
        el.style[arg] = bindings.value;
      }, delay);
    }

    vnode;
  },
};

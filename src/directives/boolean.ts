import { App, Directive, DirectiveBinding } from 'vue';

function isBoolean(el: Element, binding: any) {
  // let value;
  // if (isRef(binding.value)) {
  //   value = binding.value.value;
  // } else {
  //   value = binding.value;
  // }

  console.log(binding);

  const value = binding.value;
  if (typeof value === 'boolean') {
    return;
  } else {
    el.parentNode?.removeChild(el);
  }
}

const mounted = (el: Element, binding: DirectiveBinding<any>) => {
  isBoolean(el, binding);
};

const booleanDirective: Directive = {
  mounted,
};

export function setupIsBooleanDirective(app: App) {
  app.directive('boolean', booleanDirective);
}

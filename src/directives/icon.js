export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value} float-right text-green-400 text-xl`;

    el.innerHTML += `<i class="${iconClass}"></i>`;
  }
};

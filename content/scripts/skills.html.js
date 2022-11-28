function list_toggle(list_name) {
  let list = document.getElementById(arguments[0]);
  let hidden = list.getAttribute('hidden');

  if (hidden) {
    list.removeAttribute('hidden');
  } else {
    list.setAttribute('hidden');
  }
}

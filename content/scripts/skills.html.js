function list_toggle(list_id) {
  let list = document.getElementById(list_id);
  let hidden = list.getAttribute('hidden');

  if (hidden) {
    list.removeAttribute('hidden');
  } else {
    list.setAttribute('hidden', 'hidden');
  }
}

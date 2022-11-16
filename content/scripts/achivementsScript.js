let data = JSON.parse(achivements);

for (var i = 0; i < data.length; i++) {
  let selector = document.getElementById('selector');
  let div = document.createElement('div');
  div.id = 'div' + '_' + i;
  let vendor_label = document.createElement('label');
  vendor_label.id = 'label' + '_' + i;
  vendor_label.innerHTML = data[i].vendor;
  div.insertAdjacentElement('afterend', vendor_label);
  for (var j = 0; j < data[i].badges.length; j++) {
    let input = document.createElement('input');
    input.id = 'input' + '_' + i + '_' + j;
    input.type = 'radio';
    input.name = 'href';
    input.value = data[i].badges[j].link;
    let label = document.createElement('label');
    label.id = 'label' + '_' + i + '_' + j;
    label.for = input.getAttribute('id');
    label.innerHTML = data[i].badges[j].badge_name;
    input.insertAdjacentElement('afterend', label);
    div.insertAdjacentElement('afterend', input);
  }
}

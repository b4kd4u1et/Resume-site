let data = JSON.parse(achivements);
function input_creater() {
    let input = document.createElement('input');
    input.id = 'input'+'_'+i+'_'+j;
    input.name = 'href';
    input.value = data[i].badges[j].link;
    let label = document.createElement('label');
    label.id = 'label'+'_'+i+'_'+j;
    label.for = input.getAttribute('id');
    label.innerHTML = data[i].badges[j].badge_name;
    input.insertAdjacentElement('afterend', label);
    selector.insertAdjacentElement('afterend', input);
}

for (var i = 0; i < data.length; i++) {
  let selector = document.getElementById('selector');
  let div = document.createElement('div');
}

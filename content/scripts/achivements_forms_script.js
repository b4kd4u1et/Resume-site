function selector(){
  let form = document.querySelector("form");
  let frame = document.getElementById("achivement_frame");

  var data = new FormData(form);
  var src = '';
  for (const entry of data) {
    output = "'" + entry[1] + "'";
  };
  frame.src = output;
  }

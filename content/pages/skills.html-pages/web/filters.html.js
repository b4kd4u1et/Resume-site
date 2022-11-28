function filter() {
    let blur = document.filter_parameters.blur.value;
    let brightness = document.filter_parameters.brightness.value;
    let contrast = document.filter_parameters.contrast.value;

    if (blur != null || blur != "") {
      document.getElementById('photo').style.cssText = "filter: blur(" + blur + ');';
      alert('blured');
    };

    if (brightness != null || brightness != "") {
      document.getElementById('photo').style.cssText = "filter: brightness(" + brightness + ');';
    };

    if (contrast != null || contrast != "") {
      document.getElementById('photo').style.cssText = "filter: contrast(" + contrast + ');';
    };
}

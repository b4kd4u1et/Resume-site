function filter() {
    let blur = document.filter_parameters.blur.value;
    let brightness = document.filter_parameters.brightness.value;
    let contrast = document.filter_parameters.contrast.value;

    document.getElementsById('photo').style.cssText = "filter: blur(" + blur + '),brightness(' + brightness +'), contrast(' + contrast + ');';
}

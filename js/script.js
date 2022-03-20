function reloadFrame(){
  document.getElementById('vsdev').src = document.getElementById('vsdev').src;
}

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'hidden'});
})


var slider = document.getElementById("volcome");
var output = document.getElementById("out");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
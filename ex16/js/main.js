$(document).ready(function() {
  $('#number5').click(function() {
    $('#number5').css('color', 'white');
  });
  $('#number4').click(function() {
    $('#number4').css('color', 'white');
    $('#color-4').toggleClass('lightblue');
  });
  $('#number3').click(function() {
    $('#number3').css('color', 'white');
    $('#color-3').toggleClass('forestgreen');
    $('#number3').toggleClass('margin');
  });
  $('#number2').click(function() {
    $('#number2').css('color', 'white');
    $('#color-2').toggleClass('orange');
    $('#number2').toggleClass('margin');
    $('#number2').toggleClass('font2');
  });
  $('#number1').click(function() {
    $('#number1').css('color', 'white');
    $('#color-1').toggleClass('aqua');
    $('#number1').toggleClass('margin');
    $('#number1').toggleClass('spacing');
    $('#number1').toggleClass('font2');
  });
});

 $(document).ready(function() {
  	var guesses = '';
  	$('#submit').click(function() {
  	 	var guess = $('input').val();
      var one = 1;
  		console.log(guess);
      var correct = parseInt(guess, 10) + parseInt(one, 10);
      $('h1').text('Incorrect, you were actually thinking of ' + correct);
      $('#container').toggleClass('visibility');
  		// if (number == guess) {
  		// 	$('h1').text(number + ' is right!');
  		// 	$('input').val('');
  		// } else if (number < guess) {
  		// 	$('h1').text(guess + ' is too high');
  		// 	$('input').val('')
  		// } else {
  		// 	$('h1').text(guess + ' is too low');
  		// 	$('input').val('');
  		// }
  	});
    // $('#container').click(function() {
    //   $('#submit').toggleClass('visibility');
    // });
});
//$('input').val()

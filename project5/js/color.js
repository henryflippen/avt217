$(document).ready(function() {
    // run function on initial page load
	colorGuess();
});

function colorGuess() {
	var d20Array = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
	var randomNumber = Math.floor(Math.random() * d20Array.length);
	var stripped = d20Array[randomNumber].toLowerCase();
	console.log(d20Array[randomNumber]);
	console.log(stripped);
	// $('body').css('background-color', fruitArray[randomNumber]);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == d20Array[randomNumber]) {
			$('h1').text(guess + ' is right!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is wrong, you were actually thinking of a ' + guess + 1);
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	})
}
$('h1').text(guess + ' is wrong, you were actually thinking of a ' + guess + 1);
$('input').val('');
$('.button p').text('Play Again?');
$('#submit').click(function() {
	location.reload(true);

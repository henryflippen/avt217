$(document).ready(function() {
    // run function on initial page load
	colorGuess();
});

function colorGuess() {
	var fruitArray = ["Orange","Apple","Cherry","Pear","Mango","Pineapple"];
	var randomNumber = Math.floor(Math.random() * fruitArray.length);
	var stripped = fruitArray[randomNumber].toLowerCase();
	console.log(fruitArray[randomNumber]);
	console.log(stripped);
	// $('body').css('background-color', fruitArray[randomNumber]);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == fruitArray[randomNumber]) {
			$('h1').text(guess + ' is right!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is wrong, you were actually thinking of a ' + fruitArray[randomNumber]);
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	})
}

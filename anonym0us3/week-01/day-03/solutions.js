#1 - concatenation
function combineWords ( word1, word2 ) {
	console.log( word1 + word2 );
}
combineWords( 'dog', 'house' );

#2 - repeating phrase

function repeatPhrase ( phrase, n ) {
	for(var i = 1; i <= n; i++) {
		console.log( phrase );
	}
}
repeatPhrase( "Hello", 5 );

#3 - power fn

function toTheNthPower( number, power ) {
	var num = 1;
	for(i = 1; i <= power; i++) {
		num *= number;
	}
	console.log(num);
}
toTheNthPower( 4, 5 );

#4 - circle area

function areaOfACircle ( radius ) {
	console.log(Math.PI * radius * radius);
}
areaOfACircle( 2 );

#5 - pythagorean theorem

function pythagoreanTheorem( a, b ) {
	console.log(Math.sqrt(Math.pow( a, 2 ) + Math.pow( b, 2 )));
}
pythagoreanTheorem( 3, 4 );

#6 - x evenly divisible by y

function isXEvenlyDivisibleByY( x, y ) {
	if( x % y === 0) {
		console.log(true);
	} else {
		console.log(false);
	}
}
isXEvenlyDivisibleByY( 99, 3);

#7 - vowel count

function countVowels( word ) {
	var str = word;
	var lowerLetters = str.toLowerCase();
	var lettersArray = lowerLetters.split( "" );
	var vowels = 0; /*Keeps erroring that 'vowels' isn't defined. WTBbqAppleSauce?! It's defined right here!*/
	lettersArray.forEach(function(count) {
		if(count === "a" || count === "e" || count === "i" || count === "o" || count === "u" || count === "y") {
			vowels++;
		}
	});
} console.log(vowels);
countVowels("stealing");

//Cannot figure this out - keeps giving me various errors, either vowels isn't defined, or 'lowerLetters.split' 
//isn't a function, or 'str.toLowerCase' isn't a function, or 'lettersArray.forEach' isn't a function
// Tried simplifying by commenting-out .toLowerCase functionality, still broken and gives similar "not a function" or "not defined" errors

#8 -  ascii triangle

function printTriangle( length ) {
	
}
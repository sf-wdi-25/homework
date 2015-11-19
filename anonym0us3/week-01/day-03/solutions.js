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


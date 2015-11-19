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
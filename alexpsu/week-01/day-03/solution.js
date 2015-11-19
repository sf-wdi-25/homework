// 1.)
function combineWords( word1, word2 ) {
    console.log(word1 + word2);
}

combineWords( 'dog', 'house' );
// doghouse

// 2.)
function repeatPhrase( phrase, n ) {
	for(var i = 0; i < n; i++) {
		console.log( phrase );
	}
}

repeatPhrase( "Hello", 5);
/* Hello
Hello
Hello
Hello
Hello */

// 3.)
function toTheNthPower( number, power ) {
    var n = 1;
    for(i = 0; i < power; i++) {
    	n *= number;
    }
    console.log(n);
}

toTheNthPower(4, 5); // 1024

// 4.)
function areaOfACircle( radius ) {
    var pi = Math.PI
    var area = pi * radius * radius;
    console.log(area);
}

areaOfACircle(2); // 12.57

// 5.)
function pythagoreanTheorem( a, b ) {
    var doubleC = (a * a) + (b * b);
    var c = Math.sqrt(doubleC);
    console.log(c);
}

pythagoreanTheorem( 3, 4 ); // 5

// 6.)
function isXEvenlyDivisibleByY( x, y ) {
    if((x % y) === 0) {
    	var result = true;
    } else {
    	var result = false;
    }
    console.log(result)
}

isXEvenlyDivisibleByY(99, 3); //true

// 7.)
function countVowels( word ) {
    var vowels = 0;
    var wordArray = word.split("");
    for(i = 0; i < (wordArray.length); i++) {
    	if(wordArray[i] === 'a' || wordArray[i] === 'i' || wordArray[i] === 'o' || wordArray[i] === 'u' || wordArray[i] === 'e' || wordArray[i] === 'y') {
    		vowels++;
    	} else {}
    }
    console.log(vowels);
}

countVowels("stealingi"); // 3

// 8.)
function printTriangle(length) {
    var x = ("")
    for(i = 0; i < length; i++) {
    	x += ("*")
    	console.log(x);
    }
}

printTriangle(3);
// displays
// *
// **
// ***







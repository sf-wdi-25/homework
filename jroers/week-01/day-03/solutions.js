//1
function combineWords(word1, word2) {
	var combinedWord = word1 + word2;
	console.log(combinedWord);
}

combineWords( 'dog', 'house' );
// displays 'doghouse'

//2
function repeatePhrase(phrase, n) {
	for (var i = 1; i <= n; i++) {
		console.log(phrase);
	}
}

repeatPhrase ( "Hello", 5);
// displays 
// Hello
// Hello
// Hello
// Hello
// Hello

//3
function toTheNthPower(number, power) {
	if (power === 0) {
		return 1;
	} else if (power > 0) {
		var product = number;
		for (var i = 2; i <= power; i++) {
			product = product * number;
		}
	    return product;
	} else {
		var quotient = 1/number;
		for (var i = -2; i > power; i--) {
			quotient = quotient * (1/number);
		}
		return quotient;
	}
}

toTheNthPower(4, 5);
// displays 1024

//4
function areaOfACircle(radius) {
	return Math.PI * radius * radius;
}

areaOfACircle(2);
// displays approximately 12.57

//5
function pythagoreanTheorum(a, b) {
	var c2 = (a * a) + (b * b);
	return Math.sqrt(c2);
}

pythagoreanTheorem( 3, 4 );
// should display 5;

//6
function isXEvenlyDivisibleByY(x, y) {
	if (x % y === 0) {
		return true;
	} else {
		return false;
	}
}

isXEvenlyDivisibleByY(99, 3);
// displays true

//7
function countVowels(word) {
	var vowels = word.match(/[aeiouy]/gi);
	if (vowels === null) {
		return 0;
	} else {
		return vowels.length;
	}
}
countVowels("stealing");
// displays 3

//8
function printTriangle(num) {
	var stars = "*";
	console.log(stars);
	for (var i = 2; i <= num; i++) {
		stars = stars + "*";
		console.log(stars);
	}
}

printTriangle(5);
//*
//**
//***
//****
//*****
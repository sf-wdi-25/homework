//1. Build your own concatenation
function combineTwoStrings(wordA,wordB) {
	//Write an expression that concatenates the two words
	return wordA + wordB;
}

combineTwoStrings("you","crazy");

//2. Repeat a phrase
function repeatPhrase(phrase,n) {
	//repeat phrase to console n times
	for(i = 0; i < n; i ++)
		console.log(phrase);
}

repeatPhrase("Howdy, pardner!",6);

//3. Build your own Power function (Exponentiation)
function toTheNthPower(num,pow) {
	console.log(Math.pow(num,pow));
}

toTheNthPower(4,5);

//4. Area of a circle: (Math.PI * (r * r))
function areaOfACircle(r) {
	var pi = Math.PI;
	console.log(pi * (r * r));
}

areaOfACircle(4);

//5. Pythagorean Theorem: (a * a) + (b * b) = (c * c)
function pythagoreanTheorem(a,b) {
	var c = (a * a) + (b * b);
	console.log(c);
}

pythagoreanTheorem(4,5);

//6. Is X evenly divisible by Y? function returns T/F
function isXEvenlyDivisibleByY(x,y) {
	if (x % y === 0) {
		return true;
	} else {
		return false;
	}
}

isXEvenlyDivisibleByY(49, 7);

//7. Vowel Count
function countVowels(word) {
  var m = word.match(/[aeiouy]/gi);
  console.log(m === null ? 0 : m.length);
}

countVowels("baby");

//8. Build an ASCII Triangle
function printTriangle(length) {
		var star = "";
    for(i = 0; i <= length; i ++) {
    	console.log(star = star + "*");
}
}

printTriangle(3);

//9. Print Pyramid
function printPyramid(length) {
	var star = "";
	var space = "";
	for(a = length; a >= 0; a ++) {
		console.log(space = space + " ");
		for(a = 0; a <= length; a ++) {
   	console.log(star = star + "*");
	}
}
}

printPyramid(3);

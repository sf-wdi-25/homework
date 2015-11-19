function combineWords(word1, word2) {
	console.log('word1' + 'word2');
}

combineWords('dog','house');

function repeatPhrase(phrase, n) {
	for(i=0; i < n; i++) {
		console.log('phrase');
	}
}

repeatPhrase(Hello, 5);

function toTheNthPower(number, power) {
	console.log(Math.pow(number,power));
}

toTheNthPower(4,5);

function areaOfACircle(radius) {
	var x = Math.PI * radius * radius;
	console.log(x);
}

areaOfACircle(2);

function pythagoreanTheorem(a,b) {
	var c = Math.sqrt((a*a) + (b*b));
	console.log(c);
}

pythagoreanTheorem(3,4);

function isXEvenlyDivisbleByY(x,y) {
	if (x % y === 0) {
		console.log("true");
	} else {
		console.log("false");
	}

}

isXEvenlyDivisbleByY(99,3);

function countVowels(word) {
	var vowelsCount = 0;
	var letter = word.split('');
	for (var i = 0; i <= letter.length - 1; i++) {
		if (letter.charAt(i) ==='a' || letter.charAt(i)=== 'e' || letter.charAt(i)=== 'i') || letter.charAt(i)=== 'o'	|| letter.charAt(i)=== 'u') {
			vowelsCount++;
		}
	}
 return vowelCount;
}

countVowels("stealing");

function printTriangle(length) {
	for (i=0; i<length; i++) {
		console.log('*');
	}
}

printTriangle(3);
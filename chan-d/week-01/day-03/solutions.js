//1. build your own concatentation

function combineWords(word1, word2) {
	console.log(word1 + word2);
}
combineWords('dog','house');

//2. Repeat a phrase
function repeatPhrase(phrase, n) {
	for(var i=0; i<n; i++) {
		console.log(phrase);
	}
} 
repeatPhrase("hello there!", 5);

//3. Build your own Power function

function toTheNthPower(number, power) {
var result = number*number; 
for(var i=2; i <power; i++) {
	result = result * number; 
} console.log(result); 
}

toTheNthPower(4,5);

//4. Area of a circle

function areaOfACircle(radius) {
	var area = (radius*radius) * Math.PI; 
	console.log(area);
}
areaOfACircle(2);

//5. Pythagorean Theorem
function pythagoreanTheorem(a , b) {
	var cSquared = (a*a) + (b*b);
	var result = Math.sqrt(cSquared);
	console.log(result);
}
pythagoreanTheorem(3,4);

//6. Is X Evenly Divisible by Y

function isXEvenlyDivisibleByY( x, y ) {
    if(x%y===0) {
    	console.log(true);
    } else {
    	console.log(false); 
    }
}

isXEvenlyDivisibleByY(99, 3);


//7. Vowel Count

function countVowels( word ) {
    var look = word.match(/[aeiouy]/gi);
    console.log(look.length);
}

countVowels("stealing");

//8. Build an ASCII Triangle!
function printTriangle(length) {
	for (var i = 0; i<length; i++){
		for(j= "*"; j.length <= i; j+="*");
			console.log(j);		
}
}
printTriangle(3);




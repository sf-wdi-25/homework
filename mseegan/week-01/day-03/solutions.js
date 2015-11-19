//Challenge 1

function combineWords(firstWord, secondWord) {
	var combine = firstWord + secondWord;
	console.log(combine);
}
combineWords("free", "speech")

//Challenge 2

function repeatPhrase( phrase, n) {
	for(i=0; i < n; i++) {
		console.log(phrase);
	}
}

repeatPhrase ("Hello", 5);

//Challenge 3


function toTheNthPower( number, power ) {
	if(power === 0){
		return 1;
    }  else {
	    var product = number;
	    for (i=2; i <= power; i++) {
		    product = number * product;
	    }
	    return product;
    }
}

toTheNthPower(2,5);

//Challenge 4

function areaOfACircle( radius ) {
	return Math.PI * radius;
}

areaOfACircle(2);

//Challenge 5

function pythagoreanTheorem(a, b) {
		var c = (a * a) + (b * b);
		return Math.sqrt(c);
}

pythagoreanTheorem(3, 4);

//Challenge 6

function isXEvenlyDivisibleBy(x, y) {
	if (y % x) {
		console.log("You can evenly divide " + x + " by " + y );
	}	else {
	console.log("nope");
}
}


isXEvenlyDivisibleBy(99, 3);

//Challenge 7

function countVowels( word ) {
	var str = word;
	var re = /["a", "e", "i", "o", "u", "y"]/gi;
	var vowels = str.match(re);

	console.log(vowels)
}

countVowels ("stealing");

//Challenge 8
function printTriangle(length) {
    for(i=0; i < length; i++) {
        for (asteric = "*"; asteric.length <= i; asteric += "*");
        	console.log(asteric);
        }
}
   
printTriangle(3);
//1
function combineWords(word1, word2) {
	return word1 + word2;
}
//2
console.log(combineWords('dog', 'house'));

function repeatPhrase(phrase, n) {
	for(i = 0; i < n; i++) {
		return phrase;
	}
}
repeatPhrase("Hello", 5);
//3
function toTheNthPower(number, power) {
	var accum = number;
		for(q = 0; q < (power-1); q++) {
			accum*=number;
		}
	return accum;
}
console.log(totheNthPower(4, 5))
//4
function areaOfACircle(radius) {
	var area = Math.PI * (radius * radius); 
	return area;
} 
console.log(areaOfACircle(2))
//5
function pythagoreanTheorem(a, b) {
	var c = (a * a) + (b * b);
	c = Math.sqrt(c);
	return c; 
}
console.log(pythagoreanTheorem( 3, 4 ));
//6
function isXEvenlyDivisibleByY(x, y) {
	if(x % y === 0) {
		return true;
	} else {
		return false;
	}
}
console.log(isXEvenlyDivisibleByY(99, 3));
//7
function countVowels(word) {
    var vowelAccum = 0;
    	for(x = 0; x < word.length; x++) {
    		if(word[x] === 'a' || word[x] === 'e' || word[x] === 'i' || word[x] === 'o' || word[x] === 'u' || word[x] === 'y') {
    		vowelAccum++;
    		}
    	}
    return vowelAccum;
}
console.log(countVowels("stealing"));
//8
var astString = "";

function printTriangle(length) {
	for(l = 0; l < length+1; l++) {
        //run a for loop and at ea point
        //draw the number of asterisks
        for(k = 0; k < l; k++) {
            //push asterisks onto an array 
            astString+="*";
          }
    //when done, add \n 
    astString+="\n";
    //consolelog it
    console.log(astString);
    //clear astArray 
    astString = "";
    }       
}

printTriangle(6);




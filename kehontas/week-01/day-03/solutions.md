function combineWords( word1, word2 ) {
    console.log(word1 + word2);
}

combineWords( 'dog', 'house' );



function repeatPhrase( phrase, n ) {
  var numberOfTimes = 0;
  while (numberOfTimes < n ){
	console.log(phrase);
	numberOfTimes ++;
  }
}

repeatPhrase ( "Hello", 5);

function toTheNthPower( number, power ) {
   
   var result=number;
    for (i = 1; i < power ; i++){
		result = result * number;
		console.log(result);
    }
    return result;
}

toTheNthPower(4, 5);
// displays 1024




function areaOfACircle( radius ) {
    result = 3.14 * radius * radius;
	console.log(result);
	}	

areaOfACircle(2);
// displays approximately 12.57

function pythagoreanTheorem( a, b ) {
    theorem = (a * a) + (b * b);
    result = Math.sqrt(theorem);
    console.log(result); 
}

pythagoreanTheorem( 3, 4 );
// should display 5;


function isXEvenlyDivisibleByY( x, y ) {
    if ( x % y === 0) {
    	return true;
    }else{
    	return false;
    }
}

isXEvenlyDivisibleByY(99, 3);
// displays true




function countVowels(word) {
  var vowelsCount = 0;
  var string = word.toString();

  for (var i = 0; i <= string.length - 1; i++) {

    if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || 
    	string.charAt(i) === "o" || string.charAt(i) === "u" || string.charAt(i) === "y") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
countVowels("stealing");
// displays 3


function printTriangle(length) {
  
for(var i =0; i<length; i ++){
	for(j="*"; j.length <= i; j+="*");{
		console.log(j);
	}
}
}

printTriangle(3);
// displays
// *
// **
// ***


















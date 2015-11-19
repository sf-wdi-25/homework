function combinewords (word1, word2) {
	console.log(word1 + word2);

}
	combinewords("dog", "house");

function totheNthPower (number, power) {
  var result = number;
  for(i = 1; i < power; i++){
    result *= number; 
  }
  return result;
}

function areaOfACircle( radius ) {  
  return (Math.PI * radius) * 2; 
}

function totheNthPower (number, power) {
  var result = number;
  for(i = 1; i < power; i++){
    result *= number; 
  }
  return result;
}

function pyth (a, b) {
var cexp = totheNthPower(a, 2) + totheNthPower(b, 2);
return Math.sqrt(cexp);
} 

function isXEvenlyDivisibleByY( x, y ) {
	if (x % y === 0) {
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

  	if (string.charAt(i) === "a" || 
  		string.charAt(i) === "e" || 
  		string.charAt(i) === "i" ||
  	    string.charAt(i) === "o" || 
  	    string.charAt(i) === "u" || 
  	    string.charAt(i) === "y") {

     vowelsCount += 1;
   }
 }
 	return vowelsCount;
}
countVowels("stealing");
// displays 3


function printTriangle(length) {

   for(var i = 0; i < length; i ++) {
   	for(j="*"; j.length <= i; j+="*");
   		console.log(j);
   }
}

printTriangle(3);
// displays
// *
// **
// ***


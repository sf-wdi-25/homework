1. Build your own concatentation

Display a new string that is the combination of two arguments passed into the function

Example: dog and house will display doghouse

function combineWords( word1, word2 ) {
	console.log( word1 + word2 )
}

combineWords( 'dog', 'house' );
// displays 'doghouse'

2. Repeat a phrase

Display an argument phrase to the console n times

function repeatPhrase(phrase, n ) {
var i = 0;
    while(i < n){
    console.log(phrase);
    i++; 
    }
}

repeatPhrase( "Hello", 5);

// displays 
// Hello
// Hello
// Hello
// Hello
// Hello

3. Build your own Power function

Display number power without using built-in Math functions

Example:
45 = 4 * 4 * 4 * 4 * 4 = 1024

function toTheNthPower( number, power ) {
    console.log(Math.pow(number, power));       
}

toTheNthPower(4, 5);
// displays 1024

4. Area of a circle: π r2

Display the area of a circle given the radius
background information

function areaOfACircle( radius ) {
    console.log(Math.PI * (radius * radius))
}

areaOfACircle(2);
// displays approximately 12.57

5. Pythagorean Theorem: a2 + b2 = c2

Display c given a and b
background information

function pythagoreanTheorem( a, b ) {
	return Math.sqrt((a*a)+(b*b));
}

pythagoreanTheorem( 3, 4 );
// should display 5;

6. Is X Evenly Divisible by Y ?

Return a boolean value whether or not X can be divided by Y without any remainders.

Hint: Explore the world of Modulus operators!

function isXEvenlyDivisibleByY( x, y ) {
    if (x % y === 0) { 
      return true;
    }	
    	else {
      return false; 
    }
}


isXEvenlyDivisibleByY(99, 3);
// displays true

7. Vowel Count:

Count the number of occurence of vowels in a word. Vowels are a, e, i, o, u, and y

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

Challenge: Can you alter the code to count both upper case AND lower case?
8. Build an ASCII Triangle!

Display a simple triangle with asterisks

Example:
printTriangle(5)

*
**
***
****
*****

function printTriangle(length) {
for(var i=0; i<length; i++){
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
//1.
function combineWords( word1, word2 ) {
  console.log(word1 + word2);
}
combineWords( 'dog', 'house' );

//2.
function repeatPhrase( phrase, n ) {
  for(var i = 0; i < n; i++) {
    console.log(phrase);
  }
}
repeatPhrase ( "Hello", 5);


//3.
function toTheNthPower( number, power ) {
  var set = number;
  for(var i = 0; i < power - 1; i++) {
    number *= set;
  }
  console.log(number);
}
toTheNthPower(4, 5);

//4.
function areaOfACircle( radius ) {
  console.log(radius * radius * Math.PI);
}
areaOfACircle(2);

// 5.
function pythagoreanTheorem( a, b ) {
  console.log(Math.sqrt(a*a+b*b));
}
pythagoreanTheorem( 3, 4 );

//6.
function isXEvenlyDivisibleByY( x, y ) {
  if(x % y === 0) {
    return true;
  } else {
    return false;
  }
}
isXEvenlyDivisibleByY(99, 3);

//7.
function countVowels( word ) {
  var arryWord = word.split("");
  var vowels = 0;
  arryWord.forEach(function(ele) {
    if(ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u" || ele === "y") {
       vowels++;
       }
  });
  console.log(vowels);
}
countVowels("stealing");

//8.
function printTriangle(length) {
  var stars = "*";
  for(var i = 0; i < length; i++) {
    console.log(stars);
    stars += "*";
  }
}
printTriangle(3);

//9.
function printPyramid(length) {
  var stars = "*";
  for(var j = 0; j < length; j++) {
    var space = "";
    for(var i = 0; i < length-j; i++) {
      space += " ";
    }
    console.log(space + stars);
    stars += " *";
  }
}
printPyramid(12);

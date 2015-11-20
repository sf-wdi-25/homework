function combineWords (word1, word2) {
    return word1 + word2;
}
combineWords('dog', 'house');

var i =0;
function repeatPhrase ( phrase, n) {
    while (i < n){
     console.log(phrase);
     i += 1;   
    }
}
repeatPhrase("Hello", 5);


function toTheNthPower (number, power) {
    var result = number;
    for (var i = 1; i < power; i ++){
        result = result * number;
    }
    console.log(result);
}
toTheNthPower (4,5);

function areaOfACircle(radius) {
   return Math.PI * (radius * radius);
}
areaOfACircle(2);

function pythagoreanTheorem (a,b){
    var c = (a * a) + (b * b);
    var pt = Math.sqrt(c);
    console.log(pt)
}
pythagoreanTheorem(3,4);

function isXEvenlyDivisibleByY( x, y ){
    return (x % y === 0);
}
isXEvenlyDivisibleByY(99, 3);

function countVowels( word) {
    var vow = /["a","e","i","o","u","y"]/gi;
    var n = word.match(vow);
    console.log(n.length);
}
countVowels("stealing");


function printTriangle(length) {
   var star = "*";
  for (var i = 1; i <= length; i++){
       console.log(star);
       star = star + "*"; 
         
    }

}
    printTriangle(3);


    function pyramid(n) {
  
  var myString = "";

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n - i; j++)  {
      myString += " ";
    } 
    for (var k = 1; k <= i; k++) {
      myString += "* ";
    }
    console.log(myString);
    myString = "";
  }

}
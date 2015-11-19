function combineWords( word1, word2 ) {
    console.log(word1 + word2);
}

function repeatPhrase( phrase, n ) {
    for (var i = 0; i < n; i++) {
        console.log(phrase);
    }
}

function toTheNthPower( number, power ) {
  var result = 1;
  for (var i = 0; i < power; i++) {
    result = result * number;
  }
  console.log(result);
}

function areaOfACircle( radius ) {
  console.log(Math.PI * Math.pow(radius, 2));
}

function pythagoreanTheorem( a, b ) {
  console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
}

function isXEvenlyDivisibleByY( x, y ) {
  console.log((x % y === 0));
}

function countVowels( word ) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if ((word[i].toLowerCase() === "a") || (word[i].toLowerCase() === "e") || (word[i].toLowerCase() === "i") || (word[i].toLowerCase() === "o") || (word[i].toLowerCase() === "u") || (word[i].toLowerCase() === "y")) {
      count++;
    }
  }
  console.log(count);
}

function printTriangle(length) {
  for (var i = 1; i < (length + 1); i++) {
    console.log("*".repeat(i));
  }
}

  function printPyramid(length) {
  for (var i = 1; i < (length + 1); i++) {
    console.log(" ".repeat(length + 1 - i) + " *".repeat(i));
  }
}
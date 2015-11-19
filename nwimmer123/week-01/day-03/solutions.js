function combineWords( word1, word2 ) {
    var newWord = word1 + word2;
    return newWord;
}

//console.log(combineWords( 'dog', 'house' ));

function repeatPhrase( phrase, n ) {
   var i = 0;
    while (i < n) {
        console.log(phrase);
        i += 1;
    }
}

// repeatPhrase ( "Hello", 5);

function toTheNthPower( number, power ) {
   var product = number;
   for(var i = 1; i < power; i += 1){
    product = number * product;
   }
return product;
}

//console.log(toTheNthPower(4, 1));

function areaOfACircle( radius ) {
    var result = (Math.PI * radius * radius);
    return result;
}

//console.log(areaOfACircle(2));

function pythagoreanTheorem( a, b ) {
    var result = ((a * a)+ (b * b));
    result = Math.sqrt(result);
    return result;
}

//console.log(pythagoreanTheorem( 3, 4 ));

function isXEvenlyDivisibleByY( x, y ) {
    if (x % y === 0) {
        return true;
    }
    else {
        return false;
    }
}

//console.log(isXEvenlyDivisibleByY(99, 3));

function countVowels( word ) {
    vowelArray = [];
    word = word.split("");
    console.log(word);
    for (var i = 0; i < word.length; i += 1){
        if (word[i] === "a" || word[i] === "e"|| word[i] === "i"|| word[i] === "o"|| word[i] === "u" || word[i] === "y"){
            vowelArray.push(word[i]);
        }
    }
    return vowelArray.length;
}

//console.log(countVowels("stealing"));

function printTriangle(length) {
    var i = 0;
    var star = "";
    while (i < length) {
        star = ("*" + star);
        console.log(star);
        i += 1;
    }
}

//printTriangle(3);

//Stretch Challenge

var starArray = [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",]

function printTriangle(length) {
    var i = 0;
    var star = "";
    while (i < length) {
        star = ("*" + star);
        console.log(star);
        i += 1;
    }
}
// starArray.length/2 + i && starArray.length/2 - i with i starting at 0
// to work through them all. 
//I'M NOT DONE W THIS ONE YET! Sadly it must live unsolved for one more day 
//as parenting duties called. Alas!!

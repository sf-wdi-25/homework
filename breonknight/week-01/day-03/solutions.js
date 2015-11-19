function combineWords( word1, word2 ) {
    // TODO: Place your code here
    return console.log (word1 + word2);
}

combineWords( 'dog', 'house' );


function repeatPhrase(phrase, n){
	var i = 0;
	while(i < n){

		console.log(phrase);
		i++
	}
}
repeatPhrase ( "Hello", 5);


function toTheNthPower(number, power) {
    // TODO: Place your code here
    var product = number * number
    for(var i = 2; i < power; i++ ){
    	product = product * number;
    }
    return product;
}

toTheNthPower(4, 2);

function areaOfACircle( radius ) {
    // TODO: Place your code here
  var pi = 3.14;
  var area = ((radius * radius) * pi);
  return area;
}

areaOfACircle(2);


function pythagoreanTheorem( a, b ) {
    // TODO: Place your code here
    var c = ((a * a) + (b * b));
    var answer = Math.sqrt(c);
    console.log(answer);
}

pythagoreanTheorem( 3, 4 );
// should display 5;

function isXEvenlyDivisibleByY( x, y ) {
    // TODO: Place your code here
    if(x % y === 0){
    	console.log("x is evenly divisible by y");
    }else{
    	console.log("no x is not evenly divisible by y");
    }
}

isXEvenlyDivisibleByY(99, 3);
// displays true

function countVowels( word ) {
    // TODO: Place your code here
    var letters = word.split("");
    var counter = 0;
    letters.forEach(function x(vowel, cb){
            if(vowel === "a" || vowel === "e" || vowel ==="i" || vowel ==="o" ||
            vowel === "u"){
            counter ++;
            }
    }
    );
    console.log(counter);
}
countVowels("stealing");
// displays 3

function printPyramid(length) {
    // TODO: Place your code here
    var stars = "*";
    console.log(stars);
    for(var i = 2; i <= length; i++){
    	stars = stars + "*";
    	console.log(stars);
    }
}
function combineWords(string1, string2){
	console.log(string1 + " " + string2);
}

//function combineWords("dog", "cat");

function repeatPhrase(phrase, n){
	for(var i=0; i<=n, i++;){
		console.log(phrase);
	}
}

function toTheNthPower(number, power){
	for(var i=1; i<power, i++;){
		number=number*number;
		console.log(number);
		//this isn't quite right, need to think about what actually goes here
	}
}

function areaOfACircle(radius){
	pi=Math.PI;
	console.log("Area of a Circle: " + pi*(radius*radius));
	//Could plug in toTheNthPower function for radius square, but mine is not correct atm.
}

function phythagoreanTheorem(a,b){
	var cSquared;
	var c;

	cSquared = (a*a)+(b*b);
	c=cSquared^0.5;
	//I think that's correct.

	console.log(c);
}

function isEvenlyDivisibleByY(x,y){
	if(x%y===0){
		return true;
	}else {
		return false;
	}
}

function countVowels(word){
	wordArray=word.split(" ");
	var vowelCount;
	for(var i=0; i<=wordArray.length; i++){
		if(wordArray[i]==="a" || "e" || "i" || "o" ||| "u" || "y"){
		//if statement syntax is wrong, but I believe this is the logic I need to apply	
			vowelCount++;
		}
	}

function printTraingle(length){
	for(var i=1; i<=length; i++){
		console.log("*" * i);
		}
	}
}
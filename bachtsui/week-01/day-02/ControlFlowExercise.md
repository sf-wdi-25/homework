What is the outcome of the following expressions?

1. true || false

true

2. false && false

false

3. true && false

false

4. (false || true) && true

true

5. false && ((true || false) && (false || true))

false

Which of the following are truthy values? (hint: try if("abc"){console.log("I'm truthy!")} in the JS console)

Truthy Value:
1
3.14159
"abc"
Array
[]
Object
{}

What is the outcome of the following expressions?

1. true && 6

true

2. 0 || "hi"

true

3. ["a","b","c"] || "123"

true

4. {"key":"value"} || false

true

List all the falsy values in Javscript.
0
""
Undefined
null
NaN

Login (was done in class)

Superman?

if((isBirdlike && isPlanelike) && !hasFeathers && !isMadeOfMetal){
	console.log("It's superman!");
} elseif(hasFeathers){
	console.log("Nope, it's a bird.");
} elseif(isMadeOfMetal){
	console.log("Nope, it's a plane.");
} else{
	console.log("Not sure what that was.");
}

Make it a SloppyBurger


if ("" || "Burger"){
	console.log("One SloppyBurger");
} elseif("DoubleBurger"){
	console.log("One SloppyDouble");
}elseif("Fries"){
	console.log("One SloppyFries");
}elseif(SloppyJoe){
	console.log("One SloppySloppyJoe");
}

I don't think this is the answer that we're quite looking for. 
But off the top of my head, this is what I coded.

For Here

if(isHotBeverage || isHotBakedGood || isColdPreparedFood) && !forHere){
	return "Your total is $" + total;	
}else{
	return "Your total is $" + (total * 1.0775);
}

Can I ride?

var tokens = 6; //Jimmy's Tokens
var height= 5; //Jimmy's Height, he's exactley 5ft, no more or less
var age=13; //Jimmy's age

var hasAdult=true;
var hasBoss=true;

var hasPass=true;

if (tokens >= 5 && height >= 4 && (age >= 12 || hasAdult) || !hasBoss{
	console.log("Good to go!");
	if(hasPass){
		console.log("Oh you have a pass as well, this ride is free of charge.");
	}
}else{
	console.log("Nice try Vincent Adultman, time to leave.");
}

Loopy

while(var i=0, i<=5, i+=){
	console.log(i);
}

while(var j=5, j>=0, j-=){
	console.log(j);
}

Bottles of Beer

var beerBottles=99; //your starting amount of Beer Bottles

while(beerBottles > 0, beerBottles-=){
	if(beerBottles===1){
		console.log(beerBottles " bottle of beer on the wall,");
		console.log(beerBottles " bottle of beer!");
		console.log("Take one down and pass it around,");
		console.log ("No more bottles of beer on the wall...")
	}
		console.log(beerBottles " bottles of beer on the wall,");
		console.log(beerBottles " bottles of beer!");
		console.log("Take one down and pass it around,");
		console.log (beerBottles-1 " bottles of beer on the wall...") 
		//Should be okay because you're not reassinging beerBottes variables, show it doesn't keep that decrease in 1
}

Hmm, code doesn't exhibit DRY standards, and I'm not sure if I got the syntax right for what can
be put inside console.log()

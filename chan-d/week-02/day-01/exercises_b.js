//warmup challenges

//hereYaGo function
var someArray = [1,2,3,4,5];
var hereYaGo = function (element) {
	return element;
};

console.log(hereYaGo(someArray) );

//first function
var food = ["apple", "toast", "cheese"];
var first = function(element) {
	return element[0];
};

//last function

var food = ["apple", "toast", "cheese"];
var last = function(element) {
	return element.pop(element);
};

//printEach

var food = ["apple", "toast", "cheese"];
var printEach = function (element) {
	for(var i =0;i<element.length;i++) {
		console.log(element[i]);
	}
};

printEach(food);

//printEachPlus

var food = ["apple", "toast", "cheese"];
var printEachPlus = function (element, callback) {
	for(var i =0;i<element.length;i++) {
		console.log(element[i] + callback());
	}
};

printEachPlus(food,function(){return "!"});

//printEachSuperPlus

var food = ["apple", "toast", "cheese"];
var printEachSuperPlus = function (element, callback) {
	for(var i =0;i<element.length;i++) {
		console.log(element[i] + callback());
	}
};
printEachSuperPlus(food, function bangBang() {
	return  "!";
});
Challange hereYaGo

function hereYaGo(someArray){
	return someArray;
}

Challenge first

function first(someArray){
	return someArray[0];
}

Challenge last

function last(someArray){
	return someArray[someArray.length-1];
}

Challenge printEach

function printEach(someArray){
	someArray.forEach(function callback(element, index){
	console.log (index + ". " + element);
});

Challenge printEachPlus

var fruitsArray=["apple", "pear", "orange"];

function printEachPlus(someArray, callback){
	for (var i=0; i < someArray.length; i++){
		console.log(someArray[i] + callback());
	}
}

printEachPlus(fruitsArray, function callback(){
	return "!";
});

Challenge printEachSuperPlus

function printEachSuperPlus(someArray, callback){
	for (var i=0; i < someArray.length; i++){
		console.log(callback(someArray[i]));
	}
}

printEachSuperPlus(["apple", "toast", "cheese"], function(item){
    return item + "!"
});
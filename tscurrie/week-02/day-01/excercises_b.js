Challange hereYaGo
​
function hereYaGo(someArray){
	return someArray;
}
​
Challenge first
​
function first(someArray){
	return someArray[0];
}
​
Challenge last
​
function last(someArray){
	return someArray[someArray.length-1];
}
​
Challenge printEach
​
function printEach (someArray){
someArray.forEach(function (element, index){
  console.log(index + ". " + element);
});
​
Challenge printEachPlus
​
​function printEachPlus(someArray, callback) {
  for(var i=0; i<anArr.length; i++) {
    var callbackResult = callback();
    console.log(someArray[i] + callback);
  }
}

printEachSuperPlus

function printEachSuperPlus(someArray, callback) {
  for(var i=0; i<someArray.length; i++) {
    var callbackResult = callback(someArray[i]);
    console.log(callbackResult);
  }
}


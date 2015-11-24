//Excercise B

var myArray = ["dogs", "cats", "birds", "monkey"];
function hereYaGo(someArray){
return someArray;
} 

function first(input){
    return input[0];
}
first(myArray);

function last(input){
    return input[input.length-1];
}
last(myArray);

// I think this is the same as the question with v in it? 
function printEachSuperPlus(input, callBack){
  for(var i=0; i<input.length; i++){
    console.log(input[i] + callBack());
  }
}

/* I took this out in order to use the inline function creation in the call
function printEachPlus(input, callBack){
  
  return (input + callBack());
    
}
*/

printEachSuperPlus(myArray, function bang(){
  return "!";
});

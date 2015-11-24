var funArry = ["yo", "happy", "super", 3, 50, "ok"];


function hereYaGo(arry) {
  return arry;
}
funArry === hereYaGo(funArry);

function first(arry) {
  return arry[0];
}
first(funArry);

function last(arry) {
  return arry[arry.length - 1];
}
last(funArry);

function printEach(arry) {
  for(var i = 0; i < arry.length; i++) {
    console.log(arry[i]);
  }
}
printEach(funArry);

function printEachPlus(arry, callback) {
  for(var i = 0; i < arry.length; i++) {
    console.log(arry[i] + callback());
  }
}
printEachPlus(funArry, function(){return "!";});

function printEachSuperPlus(arry, callback) {
  for(var i = 0; i < arry.length; i++) {
    console.log(callback(arry[i]));
  }
}
printEachSuperPlus(funArry, function(v){return v + "!";});

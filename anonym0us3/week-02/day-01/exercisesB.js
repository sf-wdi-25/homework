//Challenge Set B: function building

//Warm-up challenges:

//1: function hereYaGo

array = ["tacos", "volvo", "nasa", "hummingbird", 30, "Beatles"];
function hereYaGo() {
	return array;
}
hereYaGo();

//2: first

array = ["tacos", "volvo", "nasa", "hummingbird", 30, "Beatles"];
function first(ele) {
	ready (ele[0]);
}
first(array);

//3: last

array = ["tacos", "volvo", "nasa", "hummingbird", 30, "Beatles"];
function last(ele) {
	return (ele[ele.length-1]);
}
last(array);

//4: printEach

array = ["tacos", "volvo", "nasa", "hummingbird", 30, "Beatles"];
function printEach() {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printEach(array);

//5: printEachPlus

array = ["tacos", "volvo", "nasa", "hummingbird", 30, "Beatles"];
function printEachPlus(array, callback) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i] + callback());
    }
}
             
printEachPlus(array, function(){return "!"});

//6: printEachSuperPlus

array = ["tacos", "volvo", "nasa", "hummingbird", 30, "Beatles"];
function printEachSuperPlus(array, callback) {
    for (i = 0; i < array.length; i++) {
        console.log(callback(array[i]));
    }
}

printEachSuperPlus(array, function(array){return array + "!"});
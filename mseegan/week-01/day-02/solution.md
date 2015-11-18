//Strings
var firstName = "Matt";
var fullName = firstName + " " + "Seegan";
fullName.split(" ");

/*typeof ['Matt Seegan'] = object
typeof fullName = string*/

//Arrays
var friends = [
  "Moe",
  "Larry",
  "Curly",
  "Jane",
  "Emma",
  "Elizabeth",
  "Greg",
  "Lydia"
];

// 'type friends [3]' in the console 

friends[5] = "Liz";
friends.push("Matt");
friends.sort();

//Object Literals
var jd = { first: "John", last: "Doe", age: "36", address: "1234 Park St."};
jd.address = "1234 Park Ln.";


var jane = {first: "Jane", last: "Doe", age: "32", address: "1239 Spark St."}
var mary = {first: "Mary", last: "Doe", age: "31", address: "1231 Spark St."}
var greg = {first: "Greg", last: "Doe", age: "34", address: "1214 Park St."}
var harriet = {first: "Harriet", last: "Doe", age: "32", address: "1324 Park St."}

var all = [jane, mary, greg, harriet];
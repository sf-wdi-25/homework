var firstName = "Alex";
var fullName = firstName + " Rao"; //Makes the string that is my fullname.
var splitname = fullName.split(" "); //Makes an array with 2 objects, my first and last name. Splits it at the " " between my names.

/*typeof(splitname) = 'object'
typeof(fullName) = 'string'*/

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

friends[3]; //finds the forth name

friends[5] = "Liz"; //replaces Elizabeth with Liz

friends.push("Alex"); //Adds my name to the end of the arry.

friends.sort(); //sorts alphabetically

var John = { firstName: "John", lastName: "Doe", age: 36, address: "1234 Park St." };
John.address = "1234 Park Ln"; //replaces his current address.

var Jane = { name: "Jane", lastName: "Doe", age: 32, address: "1239 Spark St." };
var Mary = { name: "Mary", lastName: "Doe", age: 31, address: "1231 Spark St." };
var Greg = { name: "Greg", lastName: "Doe", age: 34, address: "1214 Park St." };
var Harriet = { name: "Harriet", lastName: "Doe", age: 32, address: "1234 Park St." };
var all = [Jane, Mary, Greg, Harriet]; //Makes an array that is made up of 4 object literals
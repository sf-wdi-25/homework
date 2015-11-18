// Strings
var firstName = "Kayvon";
var fullName = firstName + " Ranjbar";
var myName = fullName.split(" ");
typeof myName;

// Arrays
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
friends[3];
friends[5] = "Liz";
friends.push("Kayvon");
friends.unshift("Joe");
friends.sort();

// Object literals
var person = {firstName : "John", lastName : "Doe", age : 36, address: "Park St."};
person["address"] = "1234 Park Ln";
var familyOfDoes = [{firstName : "Jane", lastName : "Doe", age : 36, address : "1239 Spark St."}, {firstName : "Mary", lastName : "Doe", age : 31, address : "1231 Spark St."}, {firstName : "Greg", lastName : "Doe", age : 34, address : "1324 Park St."}, {firstName : "Harriet", lastName : "Doe", age : 32, address : "1324 Park St."}];

// Stretch #1
var myFriends = [
  "Rickon",
  "Meera",
  "Hodor",
  "Jojen",
  "Osha",
  "Rickard",
  "Maester"
];

var yourFriends = [
  "Bilbo",
  "Boromir",
  "Elrond",
  "Faramir",
  "Frodo",
  "Gandalf",
  "Legolas",
  "Pippin"
];
var ourFriends = myFriends.concat(yourFriends);
console.log(ourFriends);

// Stretch #2
var foods = [
  "Popcorn",
  "Potato chips",
  "Shrimp",
  "Tacos",
  "French toast",
  "Crab",
  "Pho",
  "Lasagna",
  "Brownie",
  "Lobster",
  "Donuts",
  "Ice cream",
  "Hamburger",
  "Sushi",
  "Chocolate",
  "Pizza"
];
foods.indexOf("Pho");

// Stretch #3
var foods = [
  "Popcorn",
  "Potato chips",
  "Shrimp",
  "Tacos",
  "French toast",
  "Crab",
  "Pho",
  "Lasagna",
  "Brownie",
  "Lobster",
  "Donuts",
  "Ice cream",
  "Hamburger",
  "Sushi",
  "Chocolate",
  "Pizza"
];
foods.splice(foods.indexOf("Donuts"),1);

// Stretch #4
var foods = [
  "Popcorn",
  "Potato chips",
  "Shrimp",
  "Tacos",
  "French toast",
  "Crab",
  "Pho",
  "Lasagna",
  "Brownie",
  "Lobster",
  "Donuts",
  "Ice cream",
  "Hamburger",
  "Sushi",
  "Chocolate",
  "Pizza"
];
foods.splice(4,6);
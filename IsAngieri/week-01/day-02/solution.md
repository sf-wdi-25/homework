//Strings
//1
var firstName = "Is";
var lastName = "Angieri";

//2
var nameLetters = firstName + lastName;

//3
var lettersArray = nameLetters.split(" ");

//4
typeof lettersArray;

//Arrays
//1
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

//2
friends[5] = "Liz";

//3
friends = friends.concat(firstName);

//4
friends.sort();

//Object Literals
//1
var johnDoe = {name: "John", surname: "Doe", age: 36, address: "1234 Park St." };

//2
var maryDoe = {name: "Mary", surname: "Doe", age: 31, address: "1231 Spark St." };
var gregDoe = {name: "Greg", surname: "Doe", age: 34, address: "1214 Park St." };
var harrietDoe = {name: "Harriet", surname: "Doe", age: 32, address: "1324 Park St." };
var peopleInfo = [johnDoe, maryDoe, gregDoe, harrietDoe];

//Stretch Challenges
//1 combine into one array and sort
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

var ourFriends = myFriends.concat(yourFriends).sort();

console.log(ourFriends);

//2 Find the rank of another food
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

console.log(foods.indexOf("Brownie") + 1);

//3 remove "Donuts" from the favorite foods list
console.log(foods.splice((foods.indexOf(10)), 1));

//4 show the favorite foods from 5-10
console.log(foods.slice(4, 9));

//5 separate each name into its own index in an array, then sort
var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Greg,Lydia";
var friends = friends.split(",");
friends.sort();

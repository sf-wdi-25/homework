# Strings
var firstName = "Daniel";
var fullName = firstName + " Lwo";
var arryName = fullName.splite(" ");
typeof(arryName);
# Arrays
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
friends.push("Daniel");
friends.unshift("Susan");
friends.sort();
#Object Literals
# 1.
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 36,
  address: "1234 Park St."
};
console.log(person.firstName + ", " + person.lastName + ", " + person.age + ", " + person.address);
person.address = "1234 Park Ln";

# 2.
var people = [
{
  firstName: "Jane",
  lastName: "Doe",
  age: 32,
  address: "1239 Spark St."
},
{
  firstName: "Mary",
  lastName: "Doe",
  age: 31,
  address: "1231 Spark St."
},
{
  firstName: "Greg",
  lastName: "Doe",
  age: 34,
  address: "1214 Park St."
},
{
  firstName: "Harriet",
  lastName: "Doe",
  age: 32,
  address: "1324 Park St."
}
];
people.forEach(function(person) {
  console.log(person.firstName + ", " + person.lastName + ", " + person.age + ", " + person.address);
});

# Stretch Challenges
# 1.
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

var friends = myFriends.concat(yourFriends);
friends.sort();
# 2.
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
console.log("Pho is my " + (foods.indexOf("Pho") + 1) + " favorite.");
# 3.
foods.splice(foods.indexOf("Donuts"), 1);
# 4.
var top5to10 = foods.slice(4, 9);
# 5.
var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Greg,Lydia";
var arryFriends = friends.split(",");
arryFriends.sort();

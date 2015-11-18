var myName = "Rich";
var fullName = "Rich" + " Rizzo";
fullName.split(" ");
typeof(fullName.split(""));

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
friends.push("Rich");
friends.unshift("Clark");
friends.sort();
//["Clark", "Curly", "Emma", "Greg", "Jane", "Larry", "Liz", "Lydia", "Moe", "Rich"]

var contact1 = { firstName: "Jane", lastName: "Doe", address: "1239 Spark St." };
var contact2 = { firstName: "Mary", lastName: "Doe", address: "1231 Spark St." };
var contact3 = { firstName: "Greg", lastName: "Doe", address: "1214 Park St." };
var contact4 = { firstName: "Harriet", lastName: "Doe", address: "1324 Park St. "};
console.log(contact1) 

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

var allTheFriends = yourFriends.concat(myFriends);
allTheFriends = allTheFriends.sort();

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

var whereDoesPhoRank = foods.indexOf("Pho") + 1;
console.log(whereDoesPhoRank);

var spliceHere = foods.indexOf("Donuts");
foods.splice(spliceHere, 1);

var topTen = foods.slice(0, 10);
console.log(topTen);

topTen[4];

friends = friends.split(",");
friends = friends.sort();




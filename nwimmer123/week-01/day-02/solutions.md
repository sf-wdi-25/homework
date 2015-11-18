//Strings

var name = "Noah";
var fullName = name + " Wimmer";
console.log(typeof(fullName));
fullName = fullName.split;
console.log(typeof(fullName));

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

console.log(friends[3]);
friends[5] = "Liz";
friends.push("Noah");
friends.unshift("Rachel");
friends.sort();
console.log(friends);

//Object Literals

var personInfo = {
	firstName: "John",
	lastName: "Doe",
	age: 36,
	address: "1234 Park St."
};

personInfo.address = "1234 Park Ln.";
console.log(personInfo);

var multiPersonInfo = {
	firstName: ["Jane","Mary","Greg","Harriet"],
	lastName: ["Doe","Doe","Doe","Doe"],
	age: [32,31,34,32],
	address: ["1239 Spark St.","1231 Spark St.","1214 Park St.","1324 Park St."]
};

//Stretch Challenges

//#1

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

var allFriends = [];
allFriends = myFriends.concat(yourFriends);
allFriends.sort();
console.log(allFriends);

// #2

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

var favoriteFoodRank = foods.indexOf("Pho") + 1;
console.log(favoriteFoodRank);

//#3

foods.splice(foods.indexOf("Donuts"),1);
console.log(foods);

//#4

console.log(foods.slice(4,9));

//#5

var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Greg,Lydia";
friends = friends.split(",");
friends.sort();
console.log(friends);

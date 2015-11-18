var firstName = "breon";
var lastName = "Knight";
var fullName = firstName + lastName;
var nameArray = fullName.split('');
typeof(nameArray);

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

console.log(friends[4]);  
friends[5] = 'Liz';
friends.push("Breon");
var newName = friends.unshift("Sonia");
console.log(friends);
friends.sort();
console.log(friends);
var personInfo = {firstN: "John", lastN: "Doe", age: "36", address: "1234 Park St."}
personInfo["address"] = "1234 Park Ln";
personInfo.address

var infoArray=[
           {firstN: "Jane", lastN: "Doe", age: "32", address: "1239 Spark St."},
           {firstN: "Mary", lastN: "Doe", age: "31", address: "1231 Spark St."},
           {firstN: "Greg", lastN: "Doe", age: "34", address: "1234 Park St."}, 
           {firstN: "Harriet", lastN: "Doe", age: "32", address: "1324 Park St."}
        ];

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
ourFriends.sort();
console.log(ourFriends);

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

var remove = foods.splice(10,1);
console.log(foods);
var favFoods= foods.slice(5,10);
var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Greg,Lydia";
var split_names = friends.split(',');
split_names.sort()
for (var i = 0; i< split_names.length; i++){
    console.log(split_names[i] + ' ')
}


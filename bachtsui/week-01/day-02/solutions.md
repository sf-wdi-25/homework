Strings

var firstnName="Doug";
var lastName="Tsui";
var fullName= firstName + " " + lastName;

var nameArray= fullName.split (" ");

typeof fullName;
typeof nameArray;

Array

1. var fourthFriend = friends[3];

2. friends[5]="Liz";

3. friends.push("Doug");

friends.unshift("Homer");

friends.sort();

Object Literals

1.

var Dad = {firstName: "John", lastName:"Doe", age:36}
Dad.streetName ="1234 Park St."

2.

var Mom = {firstName: "Jane" , lastName:"Doe", age:32, streetname: "1239 Spark St."}
var Daughter = {firstName:"Mary" , lastName:"Doe", age:31, streetname:"1231 Spark St."}
var Son = {firstName:"Greg" , lastName:"Doe", age:34, streetname:"1214 Park St."}
var Cousin = {firstName:"Harriet" , lastName:"Doe", age:32, streetname:"1324 Park St."}

BONUS Challenge
1. 
var allFriends=myFriends.concat(yourFriends);
allFriends.sort();

2. Well, I think you have to go in understanding that the order of the array foods is an
array in descending order listing your favorite foods from top to bottom.

Therefore if you do

foods.indexOf("food") + 1;

where food is what you're interested in, you'll find how much you like a particular food.
You add one, because Array index starts at 0.

3.

food.indexOf("Donut");
food.splice(i,1);

i is the index of donut

Ran out of time for the rest of the challenges.



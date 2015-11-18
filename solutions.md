var first = "thomas"
var last = "currie"
var full = (first + " " + last)

var stuff = full.split(" ")

console.log(stuff)
typeof(stuff)
typeof(full)


(program):3 thomas Currie
(program):4 thomas Currie
Script snippet #1:7 ["thomas", "currie"]
snippets:///1_13:1 undefined
Script snippet #1:7 ["thomas", "currie"]
snippets:///1_14:1 object
Script snippet #1:7 ["thomas", "currie"]
snippets:///1_15:1 string

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
friends[3]

friends[5] = "liz"
console.log(friends)
["Moe", "Larry", "Curly", "Jane", "Emma", "liz", "Greg", "Lydia"]
snippets:///1_21:1 undefined

friends.push("Thomas")
console.log(friends)
["Moe", "Larry", "Curly", "Jane", "Emma", "Elizabeth", "Greg", "Lydia", "Thomas"]
snippets:///1_22:1 undefined

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
friends.sort()
console.log(friends)

var info = {first: "John",
             last: "Doe",
             age: 36,
             address: "1234 Park St."};
           console.log(info.address)
           info.address = "1234 Park Ln"
           console.log(info.address)

           ["Curly", "Elizabeth", "Emma", "Greg", "Jane", "Larry", "Lydia", "Moe"]
snippets:///1_34:1 undefined


 var info = [{first: "john",
            last: "doe",
            age: 36,
            address: "1234 Park St."},

            {first: "john",
            last: "doe",
            age: 36,
            address: "1234 Park St."},
            {first: "john",
            last: "doe",
            age: 36,
            address: "1234 Park St."},
            
            {first: "john",
            last: "doe",
            age: 36,
            address: "1234 Park St."}]
        console.log(info)

        [Object, Object, Object, Object]
snippets:///1_37:1 undefined

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
var both = [myFriends + yourFriends]
console.log(both)
["Rickon,Meera,Hodor,Jojen,Osha,Rickard,MaesterBilbo…romir,Elrond,Faramir,Frodo,Gandalf,Legolas,Pippin"]0: "Rickon,Meera,Hodor,Jojen,Osha,Rickard,MaesterBilbo,Boromir,Elrond,Faramir,Frodo,Gandalf,Legolas,Pippin"length: 1__proto__: Array[0]
snippets:///1_43:1 undefined

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
foods[2]
Shrimp

foods.indexOf("Donuts")
2

foods.splice(10)
console.log(foods)

["Popcorn", "Potato chips", "Shrimp", "Tacos", "French toast", "Crab", "Pho", "Lasagna", "Brownie", "Lobster"]
snippets:///1_82:1 undefined

var friend = foods.slice(4, 11)
console.log(friend)

["French toast", "Crab", "Pho", "Lasagna", "Brownie", "Lobster", "Donuts"]
snippets:///1_89:1 undefined
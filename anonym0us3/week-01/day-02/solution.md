<!-- Beginning day 2 homework -->

**Challenges**

*Strings*

1 & 2:

var firstName = "Nathan"
var lastName = "Shayevich";
var fullName = firstName + " " + lastName;
fullName; <!-- prints "Nathan Shayevich" -->

3:

var nameArray = fullName.split( )
<!-- outputs: ["Nathan Shayevich"] -->

4.

typeof fullName
<!-- outputs: "string" -->
typeof nameArray
<!-- outputs: "object" -->

*Arrays*

1:

friends[3];
<!-- outputs Emma; because Arrays index beginning w/0, so 4th name is index (aka position) 3 -->

2:

friends.indexOf('Elizabeth')
<!-- to get index position, in this case 5 since it's the 6th name in the array -->
friends[5] = "Liz"
<!-- changes "Elizabeth" to "Liz" -->

3:

friends.push("Nathan")
<!-- adds "Nathan" to the end of the array-->
friends.unshift("anothername")
<!-- adds the name "anothername" to the beginning of the array -->

4:

friends.sort()
<!-- almost worked. All the names except for "anothername" were sorted alphabetically, don't know if that's because capital letters have lower bit 'values' or higher priorities (???) than lowercase letters. Ran secondary test with new name of "Joe" and that **did** alphabetize correctly along with the rest of the other names (splice or pop out "anothername", and push in replacement) -->

*Object Literals*

1:

var employee = { name: "John Doe", age: 36, address: "1239 Spark St."}
<!-- voilà! -->
employee.address = "1234 Park Ln"
<!-- updates address field to new address -->

2:

var family = {
	'name' : ['Jane Doe','Mary Doe','Greg Doe','Harriet Doe'],
	'age' : [32,31,34,32],
	'address' : ['1239 Spark St.','1231 Spark St.','1214 Park St.','1324 Park St.']
}


*Stretch Challenges*

1:

Array.prototype.push.apply(myFriends, yourFriends);
<!-- From WDN; adds the elements from yourFriends array into the myFriends array -->

var myFriends = myFriends.concat(yourFriends);
<!-- From W3S; cleaner (IMO) alternative which also makes more sense to me. The declared var can be the existing myFriends array or say something new, like combinedFriends; irrelevant for this function as result is the same -->

myFriends.sort()
<!-- Alpha sort of new elements in myFriends. **NOTE** The returned sorting is *not valid!!*. Correct sort would be something akin to this:
['Legolas', 'Gandalf (The White)', 'Elrond', 'Gandalf (The Grey)', 'Maester', 'Frodo', 'Meera', 'Boromir', 'Jojen', 'Faramir', 'Osha', 'Bilbo', 'Hodor', 'Pippin', 'Rickard', 'Rickon']. If you disagree with me, then: http://i.imgur.com/uVPOoft.jpg -->

2:

foods.indexOf("Pho");
<!-- returns '6', so Pho is your 7th favourite om noms -->

3:

foods.splice((indexOf("Donuts")), 1);
<!-- Tried this first thinking I'd be creative and save some time, but it failed. Googling didn't turn up anything useful though, so went with the "long way" -->

foods.indexOf("Donuts");
<!-- Gave me index position of 10 to use for the splice -->
foods.splice(10, 1);

4:


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
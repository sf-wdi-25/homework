Strings
	var first = 'Joe';
	var full = first + ' Roers';
	var nameArray = full.split(' ');
	typeof nameArray yields "object" while typeof first is "string"

Arrays
	friends[3]; (this gives the result of Jane)
	friends[5] = "Liz";
	friends.push("Joe");
	friends.unshift("Andrew");
	friends.sort();

Object Literals
	var info = {
				first: 'John',
				last: 'Doe',
				age: 36,
				address: '1234 Park St.'
	};
	info.address = '1234 Park Ln';
	var contacts = [	{first: 'Jane',
						last: 'Doe',
						age: 32,
						address: '1239 Spark St.'
						},
						{first: 'Mary',
						last: 'Doe',
						age: 31,
						address: '1231 Spark St.'
						},
						{first: 'Greg',
						last: 'Doe',
						age: 34,
						address: '1214 Park St.'
						},
						{first: 'Harriet',
						last: 'Doe',
						age: 32,
						address: '1234 Park St.'
						}
					]

Stretch Challenges
	var ourFriends = [];
	for (var i = 0; i < myFriends.length; i++) {
    	ourFriends.push(myFriends[i]);
	}
	for (i = 0; i < yourFriends.length; i++) {
    	ourFriends.push(yourFriends[i]);
	}
	ourFriends.sort();

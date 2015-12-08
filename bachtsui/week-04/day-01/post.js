//schema to create tweets

var tweetSchema = new mongoose.Schema({
	date: Date,
	message: String,
	img: Buffer
});


//schema to create user

var userSchema = new mongoose.Schema({
	name: String,
	password:String,
	followers: Number,
	Tweets:[tweets]
});

//makes Tweet have monogoose methods
var Tweet = require("your link to your js file");

//makes User have mongoose methods
var User = require("your link to your js file");

var tweetData = {date: "12/1/2015", message: "Hello World", img: "google.com"};

var userData = {name:"Doug Tsui" , password: "123FakeStreet", 
				followers: 1, Tweet: [tweetData]};


//Creates a user in our database
User.create(userData, function (err,tweeter){
	if(err){console.log(err);}
	console.log(tweeter);
});

//Find all users, I don't think it's in array form though
User.find({}, function(err, tweeter){
	if(err){console.log(err);}
	console.log("Here are all your users: " + tweeter);
});

//Find a user and return all their tweets
User.find({name: "Doug Tsui"}, function (err, tweeter){
	if(err){console.log(err); }
	for(var i = 0; i < tweeter.Tweet.length; i++){
		console.log(tweeter.Tweet[i]);
	}	
});

//Create a new post that belongs to a user
User.findById(req.params.id, function (err, tweeter){
	if(err){console.log(err); }
	//Not sure what code goes here
	//Presumably you would create a new tweet
	//And push it to the tweet array
});

//Delete a new post that belongs to a user

//Update a post that belongs to a user

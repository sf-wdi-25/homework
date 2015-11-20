Challenge 1

/*
  What needs to change so that the page says "Go!"?
*/

$(document).ready(function(){
  console.log( "The page says:", $("h1").text() );
});

$("h1").on("click", function handleClick(event){
$("h1").text("Go!");
});

//I believe this is correct

if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}

Challenge 2
Submit

base.js

$(document).ready(function(){

  $("#time").text( Date.now() );

});

$("form").hide();

//Exercise might be looking for a different answer than this

Challenge 3
Change

console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

});

$("#total").on("change","input",function(){
	return ($("#left").text(); + $("#right").text();
});

//Not right, but I believe this is the general idea
//You want to aim for

Challenge 4
Click

console.log("Sanity Check: JS is working!");

$(document).ready(function(){

});

$("span").on("click", function(event){
$("ul").text($(this));
});


/* Breon explained to me

That you need a variable to contain the text
for each span.

Than you append your stored variable


*/
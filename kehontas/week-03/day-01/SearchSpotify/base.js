$(document).ready(function() {
//  console.log("here's your mock data to start with:");
//  console.log(GLOBAL_MOCK_DATA_OBJECT);


$('form').on('submit', function (event) {
  event.preventDefault();
  console.log("submit was pressed");
 		var input = $('#results').val().replace(' ' , '+');
		$.ajax({
		  	method: 'GET',
 		  	url:  'https://api.spotify.com/v1/search?q=' + input + '&=track',
 		  	
 		  	
 		  	success: function (track) {
// 		    	console.log(taco);
// 		    	console.log(taco.data);
// 		    	console.log(taco.data[0]);
// 			    taco.data.forEach (function(element){
// 			    	$("div").append("<img src =' " + element.images.fixed_height.url  +  " '>");
// 				});
// 	// can you render the mock data to the page?
 			}
		});
	
 });

});


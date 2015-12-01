$(document).ready(function(){
  $('input').keydown(function handler(event) {
  	if (event.which === 13) {
  		event.preventDefault();
  		var searchTerm = $('input').val();
  		for (var i = 0; i < searchTerm.length; i++) {
  			if (searchTerm[i] === " ") {
  				searchTerm[i] = "+";
  			}
  		}
	  	$.ajax({
	  			method: 'GET',
	  			url: 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=dc6zaTOxFJmzC',
	  			success: function (response) {
	    			response.data.forEach(function (element, index) {
	    				$("#gifs").append("<img src=" + element.images.fixed_width.url + ">");
	    		});
	  		}
			});
		}
	});
});
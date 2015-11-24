console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$('span').on("click", function traceClick(x){
		var currentClick = $(this).text();
	
		$("ul").append(currentClick + "<br>");
})

})

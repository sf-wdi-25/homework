$(document).ready(function(){
$("span").on("click", function() {
	
	$("ul").append("<li>" + $(this).text());
});
});

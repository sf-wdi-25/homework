console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	var startTime;
	var myEndTime;
	var totalTime;


$(window).on('keypress', function handleEvent(event){

	if(startTime) {
	myEndTime = Date.now();
	totalTime = (myEndTime - startTime) / 1000;
	$("#total-time").text(totalTime +  "seconds");
	}else{ 
		startTime = Date.now();
	}
})
})

/*
I had to cheat to only find out I was missing a hash tag
plus I had garbage values on my last one
*/
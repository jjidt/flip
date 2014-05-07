
$(document).ready(function() {

	//reports the scroll height on scroll
  	$(window).scroll(function() {console.log($(window).scrollTop())});
	
  	//code block flips div and changes color
	var animDur= 500;
	$("div").on("click", function(){
	  if($(this).data("running") === false){
		$(this).animate({
			"width": 0
		}, {duration: animDur, queue: false});
		$(this).animate({
				"opacity": 1}, 
				{duration: animDur, queue: false});
	  };
	})
	$("div").on("click", function(){
	  if ($(this).data("running") === false){
	  	$(this).data("running", true);
		console.log($(this).data("blue"));
		var width = $(this).width();
		var left = $(this).css("left");
		console.log(width);
		console.log(left);
		$(this).animate({
			"margin-left": (width/2),
		}, animDur, function (){
			if ($(this).data("blue") === true) {
				$(this).css("background-color", "green");
				$(this).data("blue", false);
			} else {
				$(this).css("background-color", "blue");
				$(this).data("blue", true);
			}


			$(this).animate({
				"opacity": 0.5}, 
				{duration: animDur, queue: false});
			$(this).animate({
				"margin-left": 0
			}, {duration: animDur, queue: false});
			$(this).animate({
				"width": width
			}, animDur, function(){
						$(this).data("running", false);	
						} )
		});
	  };
	})
});
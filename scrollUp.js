//shows back to top button if user has scrolled 300px down
$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		$("#topButton").fadeIn();
    } 
    else {
		$("#topButton").fadeOut();
	}
});

//scrolls back to top smoothly
$(function() {
    $('#topButton').click(function() {
        $('html,body').animate({
            scrollTop: 0 
        }, 800);

        return false;
    });
});
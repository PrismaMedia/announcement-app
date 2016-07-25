//adds an arrow when hovering over submit buttons
$(document).ready(function() {
    //sign up button
    //arrow appears and slides rightwards on hover and the text moves leftwards
    $("#signUp").hover(function() {
        $("#arrow").css("left", "690px");
        $("#arrow").css("opacity", "1");
        $("#signUp").css("padding-right", "20px");
        }, 
        //returns to normal after hover               
        function() {
        $("#arrow").css("left", "640px");
        $("#arrow").css("opacity", "0");
        $("#signUp").css("padding-right", "0px");
        });
    
    //log in button
    $("#continueButton").hover(function() {
        $("#arrow2").css("left", "720px");
        $("#arrow2").css("opacity", "1");
        $("#continueButton").css("padding-right", "20px");
        }, function() {
        $("#arrow2").css("left", "670px");
        $("#arrow2").css("opacity", "0");
        $("#continueButton").css("padding-right", "0px");
        });
    
    //create announcement
    $("#submit").hover(function() {
        $("#arrow3").css("left", "930px");
        $("#arrow3").css("opacity", "1");
        $("#submit").css("padding-right", "20px");
        }, function() {
        $("#arrow3").css("left", "880px");
        $("#arrow3").css("opacity", "0");
        $("#submit").css("padding-right", "0px");
        });
    
    //update announcements
    $("#updateButton").hover(function() {
        $("#arrow4").css("left", "290px");
        $("#arrow4").css("opacity", "1");
        $("#updateButton").css("padding-right", "60px");
        }, function() {
        $("#arrow4").css("left", "240px");
        $("#arrow4").css("opacity", "0");
        $("#updateButton").css("padding-right", "0px");
        });
});
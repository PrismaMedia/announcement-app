//underlines input fields
$(document).ready(function() {
    //sign up page
    //adds an underline when student# field is in focus
    $("#studentNumber").focusin(function() {
        $("#underline").css("width", "402px");
        });
    //removes the underline when it is out of focus
    $("#studentNumber").focusout(function() {
        $("#underline").css("width", "0px");
        });
    //adds an underline when password field is in focus
    $("#password").focusin(function() {
        $("#underline2").css("width", "402px");
        });
    //removes the underline when it is out of focus
    $("#password").focusout(function() {
        $("#underline2").css("width", "0px");
        });
    
    
    //login page
    $("#studentBox").focusin(function() {
        $("#underline").css("width", "416px");
        });
    $("#studentBox").focusout(function() {
        $("#underline").css("width", "0px");
        });
    $("#passwordBox").focusin(function() {
        $("#underline2").css("width", "416px");
        });
    $("#passwordBox").focusout(function() {
        $("#underline2").css("width", "0px");
        });
});
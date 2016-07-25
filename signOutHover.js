$(document).ready(function() {

    $("#studentNumber").hover(function() {
        $("#signOut").css("visibility", "visible");
        }, 
                       
        function() {
        $("#signOut").css("visibility", "hidden");
        });
});
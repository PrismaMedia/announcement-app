/* MIT KAPADIA | ICS3UH-B | APRIL 25, 2016 */

//uploads a local picture and changes the icon of the user
function upload() {
    
    //gets the file chosen
    var input = document.getElementById("uploadPic").files[0];
    
    //creates a new FileReader object
    var reader = new FileReader();
    
    //reads it as a Data URL
    reader.readAsDataURL(input);
    
    if (input.size > 3000000) {
        alert("This file is too big. Upload something lower than 3 MB.");
    }
    
    else {
        //saves the uploaded image to local storage
        reader.onload = function() {
            var dataStorage = reader.result;
            localStorage.setItem("picture", dataStorage);
            document.getElementById("personIcon").src = localStorage.getItem("picture");
        };
    }
}

function picture() {
    //changes the img source to the data URL
    document.getElementById("personIcon").src = localStorage.getItem("picture");
    document.getElementById("headerIcon").src = localStorage.getItem("picture");
}

//clicking on the picture clicks input file 
$(document).ready(function() {
    $('#picture').click(function() {
        $('#uploadPic').click();
    });
});

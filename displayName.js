//displays the name of the user on the navbar

//gets the name from the local storage that was typed in login page
var student = localStorage.getItem("studentStorage");

//changes the innerHTML of a p tag in the navbar to the value from local storage
function displayName() {
    document.getElementById("studentNumber").innerHTML = "Hello, " + student + "!";
}
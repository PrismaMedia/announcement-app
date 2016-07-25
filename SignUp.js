/* MIT KAPADIA | ICS3UH-B | APRIL 25, 2016 */

var students = [];
var studentIndex = 0;

//function used to store each student's info in local storage
function signUp() {
    //stores the student number and password combinations entered in the input box to the array 
    students[studentIndex] = {
        studentNumber: document.getElementById("studentNumber").value,
        password: document.getElementById("password").value
    };
    
    //alert that shows up if an input field is left empty
    if (students[studentIndex].studentNumber === "" || students[studentIndex].password === "") {
        alert("You left a required field blank.");
    }
    
    //the info is stored in a local storage
    else {
        localStorage.setItem("studentsList", JSON.stringify(students));
        alert("You are now signed up, " + students[studentIndex].studentNumber + "!");
        studentIndex++;
    }
}

/*var names = "Mit Kapadia Osama Syed Sudhi Suvarna Aumkar Niak Rahil Patel";

function namesFunc() {
    //var hello = names.replace(/ /g, "</br>");
    //document.getElementById("names").innerHTML = hello;

    while(names.length > 0) {
        var end = names.indexOf(" ");
        var name = names.substring(0, end);
        console.log(name);
        names = name.substring(end + 1, names.length);
    }
}*/
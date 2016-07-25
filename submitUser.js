/* MIT KAPADIA | ICS3UH-B | APRIL 25, 2016 */

//This function is used to log in
function submitUser() {
    //get the input field values for student# and password
    var student = document.getElementById("studentBox").value;
    var password = document.getElementById("passwordBox").value;
    
    //stores the value from the student# in a localStorage to be used later
    var studentStorage = localStorage.setItem("studentStorage", student);
    
    //retrieves the student numbers and passwords from sign up page
    var studentData = JSON.parse(localStorage.getItem("studentsList"));
    
    //errors that show up if something was not entered when there is no local storage
    if (student == "" || password == "") {
        document.getElementById("invalid").innerHTML = "Something was not entered."
        document.getElementById("invalid").style.visibility = "visible";
    }
    
    //for loop that checks if ANY of the student# & password combinations from sign up page matches the data entered in sign in page
    for (u = 0; u < studentData.length; u++) {
        
        //if everything is entered right, it goes to the announcements page
        if (student == studentData[u].studentNumber && password == studentData[u].password) {
            window.location = "announcements.html";
            break;
        }
        
        //error that shows up each time something is not entered
        else if (student == "" || password == "") {
            document.getElementById("invalid").innerHTML = "Something was not entered."
            document.getElementById("invalid").style.visibility = "visible";
        }
        
        //error that shows up if something is entered wrong
        else if (student !== studentData[u].studentNumber || password !== studentData[u].password) {
            document.getElementById("invalid").innerHTML = "The student #/password is wrong!"
            document.getElementById("invalid").style.visibility = "visible";
        }
    }
}
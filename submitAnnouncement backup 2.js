/* MIT KAPADIA | ICS3UH-B | APRIL 25, 2016 */

var announcement = [];
var index = 0;
var temp;
var copyAnnouncement;

//this funcion submits the announcement information entered by the user into localStorage
function submitAnnouncement() {
    //gets the current time and date
    var timeNow = new Date();
    
    //makes it possible to keep appending on the array after page reload
    temp = localStorage.getItem("announcementStorage");
    copyAnnouncement = JSON.parse(temp);
    
    //stores the announcement info entered in the creator page to the array
    announcement[index] = {
        gender: $("#genderList").val(),
        grade: $("#gradeList").val(),
        category: $("#categoryList").val(),
        club: $("#clubList").val(),
        priority: $("#priorityList").val(),
        title: $("#titleBox").val(),
        announcementInfo: $("#announcementBox").val(),
        currentDate: timeNow.getDate(),
        currentMonth: timeNow.getMonth(),
        currentYear: timeNow.getFullYear(),
        currentHour: timeNow.getHours(),
        currentMinute: timeNow.getMinutes()
    };
    
    //an alert comes up if any required field is left empty
    if (announcement[index].gender == null || announcement[index].grade == null || (announcement[index].category == null && announcement[index].club == null) || announcement[index].title === "" || announcement[index].announcementInfo === "") {
        alert("You left a required field blank.");
    }
    
    //the announcement is stored in localStorage
    else {
        index++;
        //appends new announcements to any previously stored announcements
        announcement.push.apply(announcement, copyAnnouncement);
        localStorage.setItem("announcementStorage", JSON.stringify(announcement));
        document.getElementById("makeAnnouncement").reset();
        alert("Announcement Posted!");
        document.location.reload(true);   
    }
}
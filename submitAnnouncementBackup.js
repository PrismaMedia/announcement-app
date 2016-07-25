var announcement = [];
var index = 0;
var i;
var temp;
var copyAnnouncement;

function submitAnnouncement() {
    var timeNow = new Date();
    temp = localStorage.getItem("announcementStorage");
    copyAnnouncement = JSON.parse(temp);
    
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
    
    if (announcement[index].gender == null || announcement[index].grade == null || announcement[index].club == null || announcement[index].title === "" || announcement[index].announcementInfo === "") {
        alert("You left a required field blank.");
    } else {
        index++;
        announcement.push.apply(announcement, copyAnnouncement);
        localStorage.setItem("announcementStorage", JSON.stringify(announcement));
        document.getElementById("makeAnnouncement").reset();
        alert("Announcement Posted!");
        document.location.reload(true);
    }
}

var getAllInfo = JSON.parse(localStorage.announcementStorage);

function filter() {

    var selectedGender = document.getElementById("gender").value;

    for (a = 0; a <= getAllInfo.length; a++) {
        if (selectedGender != getAllInfo[a].gender) {
        getAllInfo.splice(a, 1);
                    console.log(getAllInfo);

        }   
    }

        
    if (getAllInfo === null) {
        document.getElementById("noAnnouncements").innerHTML = "There are no announcements at the moment.";
    } 
    else {
        for (i = 0; i <= getAllInfo.length; i++) { 
            
        //gets the Title and creates a div card
        var getTitle = document.createElement("div");
        getTitle.innerHTML = getAllInfo[i].title;
        getTitle.className = "card titleOfCard";
        document.getElementById("announcementsWrapper").appendChild(getTitle);
        
        //creates the group icon
        var groupImg = document.createElement("img");
        groupImg.src = "group.png";
        groupImg.className = "groupIcon";
        document.getElementById("announcementsWrapper").appendChild(groupImg);
        
        //gets the Club and creates a p tag to put the club name
        var getClub = document.createElement("p");
        getClub.innerHTML = getAllInfo[i].club;
        getClub.className = "card club";
        document.getElementById("announcementsWrapper").appendChild(getClub);
        
        //creates the time icon
        var timeImg = document.createElement("img");
        timeImg.src = "time.png";
        timeImg.className = "groupIcon timeIcon";
        document.getElementById("announcementsWrapper").appendChild(timeImg);
        
        //gets the Time the announcement was made and creates a p tag to put the date
        var AMPM;    
        var minutes = getAllInfo[i].currentMinute;
        var hour = getAllInfo[i].currentHour;
        var day = getAllInfo[i].currentDate;
        var month = getAllInfo[i].currentMonth;
        var year = getAllInfo[i].currentYear;
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var hourNames = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
        var time = document.createElement("p");    
            
        if (getAllInfo[i].currentHour < 12) {
            AMPM = "am";
        }  
        else {
            AMPM = "pm";
        } 
            
        if (getAllInfo[i].currentMinute.toString().length == 1) {
            var minutes = "0" + getAllInfo[i].currentMinute;
        }
                         
        time.innerHTML = "Posted on " + monthNames[month] + " " + day + " at " + hourNames[hour] + ":" + minutes + " " + AMPM;
        
        time.className = "card time";
        document.getElementById("announcementsWrapper").appendChild(time);
        
        //gets the Announcement Info and creates a p tag to put the info
        var getAnnouncementInfo = document.createElement("p");
        var getAnnInfo = getAllInfo[i].announcementInfo;
            
            //decides whether to put ... or not
            if (getAnnInfo.length < 140) {
                getAnnouncementInfo.innerHTML = getAnnInfo;
            } 
            else {
                var limitCharacters = getAnnInfo.substring(0,150);
                getAnnouncementInfo.innerHTML = limitCharacters + ". . .";
            }

        getAnnouncementInfo.className = "card club content";
        document.getElementById("announcementsWrapper").appendChild(getAnnouncementInfo);
            
        //creates the priority bar and decides what color it should be
        var priority = document.createElement("div");
        var priorityInfo = getAllInfo[i].priority;
        priority.className = "priority";

            if (priorityInfo == "High") {priority.style.backgroundColor = "#cb291f";}
            else if (priorityInfo == "Medium") {priority.style.backgroundColor = "#de716b";}
            else if (priorityInfo == "Low") {priority.style.backgroundColor = "#efc2bf";}
            else {priority.style.backgroundColor = "none";}
        document.getElementById("announcementsWrapper").appendChild(priority);
    }
    }
}

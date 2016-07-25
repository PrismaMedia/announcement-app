/* MIT KAPADIA | ICS3UH-B | APRIL 25, 2016 */

//retrieves the announcement info from localStorage
var getAllInfo = JSON.parse(localStorage.getItem("announcementStorage"));

//filters announcements and then displays the correct ones on the page
function getAnnouncement() {    
    //gets the dropdown box values and stores them
    var genderBox = document.getElementById("gender").value;
    var gradeBox = document.getElementById("grade").value;
    var categoryBox = document.getElementById("category").value;
    var clubBox = document.getElementById("club").value;
    var highPriority = document.getElementById("highPriorityCheckBox").checked;
    
    //sorts the array by date
    if (document.getElementById("sortingList").value == "oldest") {
        getAllInfo.reverse();
    }
    
    //sorts the array by higher priority
    else if (document.getElementById("sortingList").value == "priority") {
        getAllInfo.sort(function(a, b) {return a.priority < b.priority});
    }
    
    //shows no announcements if array has nothing
    if (getAllInfo === null) {
        document.getElementById("noAnnouncements").style.visibility = "visible";
    }
    
    else {
        //loops through the array and displays announcements
        for (i = 0; i <= getAllInfo.length; i++) {
            //checks and applies the filters
            if (((genderBox === getAllInfo[i].gender ||  getAllInfo[i].gender === "Both") && (gradeBox === getAllInfo[i].grade || getAllInfo[i].grade === "All grades") && (categoryBox === getAllInfo[i].category || clubBox === getAllInfo[i].club)) || highPriority == true && getAllInfo[i].priority == "c") {
                
                //gets the Title and creates a div card with it    
                var getTitle = document.createElement("div");
                getTitle.innerHTML = getAllInfo[i].title;
                //assign classes to it for styling in css
                getTitle.className = "card titleOfCard";
                document.getElementById("announcementsWrapper").appendChild(getTitle);

                //creates the club icon
                var clubImg = document.createElement("img");
                clubImg.src = "club.png";
                clubImg.className = "clubIcon";
                document.getElementById("announcementsWrapper").appendChild(clubImg);

                //gets the Club and creates a p tag for the club name
                var getClub = document.createElement("p");
                getClub.innerHTML = (getAllInfo[i].club !== null) ? getAllInfo[i].club : getAllInfo[i].category;
                getClub.className = "card club";
                document.getElementById("announcementsWrapper").appendChild(getClub);

                //creates the time icon
                var timeImg = document.createElement("img");
                timeImg.src = "time.png";
                timeImg.className = "clubIcon timeIcon";
                document.getElementById("announcementsWrapper").appendChild(timeImg);

                //gets the Date & Time and creates a p tag to put it in
                var AMPM;
                var minutes = getAllInfo[i].currentMinute;
                var hour = getAllInfo[i].currentHour;
                var day = getAllInfo[i].currentDate;
                var month = getAllInfo[i].currentMonth;
                var year = getAllInfo[i].currentYear;
                var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var hourNames = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
                var time = document.createElement("p");    

                //decides if time is AM or PM
                AMPM = (getAllInfo[i].currentHour < 12) ? AMPM = "am" : AMPM = "pm";

                //puts a 0 before the minute if it is only 1 digit
                minutes = (getAllInfo[i].currentMinute.toString().length == 1 ? "0" : "") + minutes;

                //date & time info is more readible
                time.innerHTML = "Posted on " + monthNames[month] + " " + day + " at " + hourNames[hour] + ":" + minutes + " " + AMPM;
                time.className = "card time";
                document.getElementById("announcementsWrapper").appendChild(time);

                //gets the gender and creates a p tag for it
                var getGender = document.createElement("p");
                getGender.innerHTML = getAllInfo[i].gender;
                getGender.className = "card gender";
                document.getElementById("announcementsWrapper").appendChild(getGender);
                
                var genderImg = document.createElement("img");
                
                if(getAllInfo[i].gender == "Male") {
                    genderImg.src = "male.svg";
                }
                
                else if(getAllInfo[i].gender == "Female") {
                    genderImg.src = "female.svg";
                }
                
                else if(getAllInfo[i].gender == "Both") {
                    genderImg.src = "both.svg";
                }
                
                genderImg.className = "genderIcon clubIcon";
                document.getElementById("announcementsWrapper").appendChild(genderImg);

                //gets the Announcement Info and creates a p tag to put it in
                var getAnnouncementInfo = document.createElement("p");
                getAnnouncementInfo.innerHTML = getAllInfo[i].announcementInfo;
                getAnnouncementInfo.className = "card club content";
                document.getElementById("announcementsWrapper").appendChild(getAnnouncementInfo);
            
                //gets the priority info from local storage and creates the priority bar deciding what color it should be
                var priority = document.createElement("div");
                var priorityInfo = getAllInfo[i].priority;
                priority.className = "priority";

                if (priorityInfo == "c") {
                    priority.style.backgroundColor = "#cb291f";
                }
                else if (priorityInfo == "b") {
                    priority.style.backgroundColor = "#de716b";
                }
                else if (priorityInfo == "a") {
                    priority.style.backgroundColor = "#efc2bf";
                }
                document.getElementById("announcementsWrapper").appendChild(priority);
            }
        }
    }
}

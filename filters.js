/*var getInfo = JSON.parse(localStorage.getItem("announcementStorage"));

function filter() {
    var genderBox = document.getElementById("gender").value;
        
    for (i = 0; i <= getInfo.length; i++) { 
        if (genderBox == "gender") {
            localStorage.setItem("filteredStorage", JSON.stringify(getInfo));
        }

        else if (genderBox != getInfo[i].gender) {
            getInfo.splice(i, 1);
            localStorage.setItem("filteredStorage", JSON.stringify(getInfo));
            document.location.reload(true);   
        }        
    }
}*/
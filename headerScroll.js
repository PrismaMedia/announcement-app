//makes the top portion of the header go away after scrolling a certain amount
function yScroll() {
    //gets the elements of the header
    var header = document.getElementById("header");
    var headerTitle = document.getElementById("headerTitle");
    var logo = document.getElementById("logo");
    var studentNumber = document.getElementById("studentNumber");
    var navBarList = document.getElementById("navbarList");
    
    //gets how much the user has scrolled from top
    var yPos = window.pageYOffset;
    
    //If scrolled enough, it changes position-top of the header so it goes away
    if (yPos > 350) {
        header.style.top = "-160px";
        headerTitle.style.top = "-75px";
        logo.style.top = "-84px";
        studentNumber.style.top = "-90px";
        navBarList.style.top = "0px";
        headerIcon.style.top = "-80px";
    }
    
    //Brings it back to normal position
    else {
        header.style.top = "-70px";
        headerTitle.style.top = "15px";
        logo.style.top = "6px";
        studentNumber.style.top = "0px";
        navBarList.style.top = "80px";
        headerIcon.style.top = "10px";
    }
}

window.addEventListener("scroll", yScroll);
//function for making the footer animate in for announcements page
function footerScroll() {
    var announcementsWrapper = document.getElementById("announcementsWrapper");
    
    //gets the height of the wrapper
    var heightPage = announcementsWrapper.offsetHeight;
    //gets the scrolled amount
    var scrolledAmount = window.pageYOffset + 223;
    
    //changes the margin bottom of the wrapper so footer can animate in
    if (scrolledAmount >= heightPage) {
            announcementsWrapper.style.marginBottom = "80px";
    }
    
    //changes it back to normal
    else {
        announcementsWrapper.style.marginBottom = "0px";
    }
}

//runs footerScroll() when scrolling is detected
window.addEventListener("scroll", footerScroll);
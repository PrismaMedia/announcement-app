//function for making the footer animate in for creation page
function footerScroll() {
    //gets the amount scrolled
    var yPosition = window.pageYOffset;
    var bodyContainer = document.getElementById("bodyContainer");
    
    //changes the margin bottom of the container so footer can animate in
    if (yPosition > 656) {
            bodyContainer.style.marginBottom = "80px";
    }
    
    //changes it back to normal
    else {
        bodyContainer.style.marginBottom = "0px";
    }
}

//runs footerScroll() when scrolling is detected
window.addEventListener("scroll", footerScroll);
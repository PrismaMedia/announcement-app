//applies a parallax effect when scrolling
function parallax() {
    //gets the background image and makes its position-top 1/3 of the scroll so it goes up slower than everything else
    var bg = document.getElementById("bgPic");
    bg.style.top = -(window.pageYOffset / 2) + "px";
    
    //gets the text on top of the background and makes its position-top 1/1.7 of the scroll
    var text = document.getElementById("pageTitle");
    text.style.top = -(window.pageYOffset / 1.7) + "px";
}        
window.addEventListener("scroll", parallax);




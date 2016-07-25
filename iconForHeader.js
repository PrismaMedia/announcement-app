function picture() {
    
    var picIcon = localStorage.getItem("picture");
    var headerIcon = document.getElementById("headerIcon");
    
    if (picIcon == null) {
        headerIcon.style.display = "none";
    }
    else {
        headerIcon.src = picIcon;
    }
}
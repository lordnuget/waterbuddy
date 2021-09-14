const menuLinks = document.getElementById('menuLinks');

const menuButton = document.getElementById('menuButton');
menuButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    if(menuLinks.style.display === "block") {
        menuLinks.style.display = "none";
    } else {
        menuLinks.style.display = "block";
    }
}
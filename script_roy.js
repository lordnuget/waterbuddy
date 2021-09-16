// ---------------------------------------------- //
// ---------- HAMBURGER MENU OP MOBILE ---------- //
// ---------------------------------------------- //

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

// --------------------------------------- //
// ---------- SCROLL ANIMATIONS ---------- //
// --------------------------------------- //

/*
// Deze animaties heb ik leren maken met behulp van https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671
// Ik heb die code uitvoerig bestudeerd en met het toevoegen van de onderstaande comments wil ik laten zien dat ik de code begrijp en kan toepassen.
// Ook heb ik de code iets veranderd zodat ik geen aanpassingen aan mijn HTML hoefde te doen en slechts beperkte aanpassingen aan mijn CSS.
*/


// Alle elementen die we moeten animeren stoppen we in een const, zo kunnen we die straks makkelijk oproepen
const animatedElements = document.querySelectorAll(".main__introduction__image");


// We bepalen of een element in zicht is door de positie van de bovenkant van het element te vergelijken met de hoogte van de viewport
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  console.log(`elementTop: ${elementTop}`);
  

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

// Als de positie van de bovenkant van een element groter is dan de hoogte van de viewport, dan is het element weer uit zicht verdwenen
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

// Voeg de class scrolled toe aan een element
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

// Haal de class scrolled van een element af
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

// Deze functie bekijkt of een element in beeld is en voegt in dat geval de class scrolled toe
// Is het element niet in beeld, dan haalt wordt de class scrolled weer verwijderd
const handleScrollAnimation = () => {
  animatedElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

// Een EventListener om te kijken of de window gescrolled wordt. Zo ja, roep dan de functie handleScrollAnimation aan
window.addEventListener("scroll", () => { 
  handleScrollAnimation();
  // console.log(`window.innerHeight: ${window.innerHeight}`);
  // console.log(`document.documentElement.clientHeight: ${document.documentElement.clientHeight}`);
  // console.log(`document.documentElement.clientHeight / 1.25: ${document.documentElement.clientHeight/1.25}`);
});
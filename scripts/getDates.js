

var year="2023";
var thisYear=document.querySelector("#year");
thisYear.textContent=year;


let mod=document.lastModified;
let theMod=document.querySelector("#lastModified");
theMod.textContent=mod;



const menuBtn =
    document.querySelector(".menu-btn");
const menuNav =
    document.querySelector(".menu-nav");
const menu =
    document.querySelector(".menu");

const navItems =
    document.querySelectorAll(".nav-item");
 
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach((item) =>
            item.classList.add("show"));

        
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach((item) =>
            item.classList.remove("show"));

        
        showMenu = false;
    }
}
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const h2=document.querySelector("h2");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#000";
        h2.style.color = "#fff";
        
		modeButton.textContent = "❎";
        
	} else {
        main.style.background = "#b2ccaf";
		main.style.color = "#1E1536";
        h2.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});

const visitsDisplay = document.querySelector(".visits");

let quantity = Number(window.localStorage.getItem("quantity-ls")) || 0;

if (quantity !== 0) {
	visitsDisplay.textContent = quantity;
} else {
	visitsDisplay.textContent = ` 🥳 Welcome!`;
}

quantity++;

localStorage.setItem("quantity-ls", quantity);






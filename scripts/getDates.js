
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


 
const currentTemp=document.querySelector('#current-temp');
const weatherIcon=document.querySelector('#weather-icon');
const captionDesc=document.querySelector('#figcaption');

const url='https://api.openweathermap.org/data/2.5/weather?lat=-5.08&lon=-42.8&units=imperial&appid=57352b8a1892c6e8dcde50dc5abccec8';

async function apiFetch(){
    try{
        const response= await fetch(url);
        if(response.ok){
            const data= await response.json();
            console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
        } catch (error){
            console.log(error);
        }
    }

apiFetch();

function displayResults(data){
    currentTemp.innerHTML=`${data.main.temp}&deg;F `;
    const iCode=data.weather[0].icon;
    const iconSrc=`https://openweathermap.org/img/w/${iCode}.png`;
    weatherIcon.setAttribute('src',iconSrc);
    const desc=data.weather[0].description;
    captionDesc.textContent=`${desc}`;

}


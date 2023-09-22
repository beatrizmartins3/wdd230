let mod=document.lastModified;
let theMod=document.querySelector("#lastModified");
theMod.textContent=mod;

const menuBtn =
    document.querySelector(".btn");
const menuNav =
    document.querySelector(".nave");
const menu =
    document.querySelector(".menu");

const navItems =
    document.querySelectorAll(".item");
 

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
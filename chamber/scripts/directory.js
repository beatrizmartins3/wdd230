const url = "https://beatrizmartins3.github.io/wdd230/chamber/data/members.json";

const d=document.querySelector("#direc");

async function getMembersData(url){
    const response= await fetch(url);
    const data= await response.json();
    //console.table (data.prophets);
    displayMembers(data.members);
}
getMembersData(url);

const displayMembers=(members)=>{
    members.forEach((member) => {
        let name=document.createElement('h3');
        let sec=document.createElement("section");
        let phone=document.createElement("p");
        let address=document.createElement("p");
        let mLevel=document.createElement("p");
        let yoc=document.createElement("p");
        let url=document.createElement("a");
        let image=document.createElement("img");

        name.textContent=`${member.name}  ` ;
        phone.textContent=`Phone: ${member.phone}`;
        address.textContent=`Address: ${member.address}`;
        mLevel.textContent=`Membership Level: ${member.mLevel}`;
        yoc.textContent=`Year of Creation: ${member.yearOfCreation}`;
        url.textContent=` ${member.url} `;
        image.setAttribute("src",member.image);
        image.setAttribute("alt","Portrait of ${member.name} ");
        image.setAttribute("loading","lazy");
        image.setAttribute("width","350");
        image.setAttribute("height","300");

        
        sec.appendChild(name);
        sec.appendChild(phone);
        sec.appendChild(address);
        sec.appendChild(mLevel);
        sec.appendChild(yoc);
        sec.appendChild(url);
        sec.appendChild(image);
        d.appendChild(sec);
        
    });
}
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

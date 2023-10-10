const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards=document.querySelector("#cards");

async function getProphetData(url){
    const response= await fetch(url);
    const data= await response.json();
    //console.table (data.prophets);
    displayProphets(data.prophets);
}
getProphetData(url);

const displayProphets=(prophets)=>{
    prophets.forEach((prophet) => {
        let fullname=document.createElement('h2');
        let card=document.createElement("section");
        let card2=document.createElement("section");
        let portrait=document.createElement("img");

        fullname.textContent=`${prophet.name} ${prophet.lastname} ` ;
        card.textContent=`Date of Birth: ${prophet.birthdate}`
        card2.textContent=`Place of Birth: ${prophet.birthplace}`
        portrait.setAttribute("src",prophet.imageurl);
        portrait.setAttribute("alt","Portrait of ${prophet.name} {prophet.lastname}");
        portrait.setAttribute("loading","lazy");
        portrait.setAttribute("width","340");
        portrait.setAttribute("height","440");

        
        card.appendChild(card2);
        card.appendChild(fullname);
        card.appendChild(portrait);
        cards.appendChild(card);
        
    });
}


const baseURL="https://beatrizmartins3.github.io/wdd230/";
const linksURL="https://beatrizmartins3.github.io/wdd230/data/links.json";
const cards=document.querySelector("#cards");
async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
    console.log(data);
  }
  


function displayLinks(weeks){
    weeks.forEach((week) => {
        let fullname=document.createElement("h3");
        let card=document.createElement("section");
        let card2=document.createElement("ul");
        let portrait=document.createElement("li");
        let portrait2=document.createElement("a");

        fullname.textContent= "Learning Activities" ;
        portrait.textContent=`${week.week}: ${week.title}`;
        portrait2.setAttribute("href",week.url);
       
        card.appendChild(fullname);
        portrait.appendChild(portrait2)
        card.appendChild(card2);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
    console.log(cards);
    
}
getLinks(linksURL);



 const linksURL="https://beatrizmartins3.github.io/wdd230/data/links.json";
 const cards=document.querySelector("#cards");

 async function getLinks(){
     const response= await fetch (linksURL);
     const data= await response.json();
     displayLinks(data.weeks);
 }
 getLinks();
 

 function displayLinks(allWeeks){
     allWeeks.forEach(item => {
        const h4=document.createElement("h4");
        h4.textContent=`${item.week}`;
        const ul= document.createElement("ul");

        item.links.forEach(link=>{
        const li= document.createElement("li");
        li.innerHTML=`<a href="${link.url}"> ${link.title}</a>`;

        ul.appendChild(li);
    });
    cards.appendChild(h4);
    cards.appendChild(ul);
   });
}



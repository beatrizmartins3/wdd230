
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
    //  let sec= document.createElement("section");
        const ul= document.createElement("ul");
    //  let p= document.createElement("p");
        

    //  p.textContent= `${week.week}`;
    //  sec.appendChild(p);

    //  
    item.links.forEach(link=>{
        const li= document.createElement("li");
        li.innerHTML=`<a href="${link.url}"> ${link.title}</a>`;

        ul.appendChild(li);
    });
    cards.appendChild(h4);
    cards.appendChild(ul);
   });
}
//  const displayLinks=(weeks)=>{
//      weeks.forEach((week) => {
//          let sec=document.createElement("section");
//          let ul=document.createElement("ul");
//          let li=document.createElement("li");
//          let p=document.createElement("p");
//          let a=document.createElement("a");
//          let href=document.createElement("href");

//          p.textContent=` ${week.tittle}`;
//          a.textContent=` ${week.week}`;
//          href.textContent=week.url;
        

//          a.appendChild(href);
//          p.appendChild(a);
//          li.appendChild(p);
//          ul.appendChild(li);
//          sec.appendChild(ul);
//          cards.appendChild(sec);
        
//      });
//  }



const baseURL="https://beatrizmartins3.github.io/wdd230/";
const linksURL="https://beatrizmartins3.github.io/wdd230/data/links.json";

const cards=document.querySelector("#cards");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
getLinks();

function displayLinks(weeks){
    weeks.forEach((week) => {
        const li=document.createElement("li");
        const ul=document.createElement("ul");
        const sec=document.createElement("sec");

        weeks.links.forEach((link) => {
            const a=document.createElement("a");
            a.href=link.url;
            a.textContent=link.title;

            li.appendChild(a);
            ul.appendChild(li);
        });
        sec.appendChild(ul);
        cards.appendChild(sec)
    });
    
}

const currentTemp=document.querySelector('#desc');
const weatherIcon=document.querySelector('#weather-icon');
const captionDesc=document.querySelector('#figcaption');

const url='https://api.openweathermap.org/data/2.5/weather?lat=-5.08&lon=-42.8&units=imperial&appid=57352b8a1892c6e8dcde50dc5abccec8';

async function apiFetch(){
    try{
        const response= await fetch(url);
        if(response.ok){
            const data= await response.json();
            console.log(data);
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
    const iconsrc='https://openweathermap.org/img/w/02n.png';
    let desc=data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt','icon');

    captionDesc.textContent=`${desc}`;

}
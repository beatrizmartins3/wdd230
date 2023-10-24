 
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


const linkURL = "https://beatrizmartins3.github.io/wdd230/chamber/data/members.json";

const d=document.querySelector("#sec3");

async function getMembersData(linkURL){
    const response= await fetch(linkURL);
    const data= await response.json();
    //console.table (data.prophets);
    displayMembers(data.members.slice(0,3));
}
getMembersData(linkURL);


const displayMembers=(members)=>{
    members.forEach((member) => {
        let name=document.createElement('h2');
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
        image.setAttribute("max-width","100%");
        image.setAttribute("height","75px");

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
const days= new Date();
const displayDays= [1,2,3];

if (displayDays.includes(days.getDay())){
    const banner= document.getElementById("banner");
    banner.style.display= "block";
}



const currentTemp=document.querySelector('#current-temp');
const weatherIcon=document.querySelector('#weather-icon');
const captionDesc=document.querySelector('#figcaption');

const url='https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=57352b8a1892c6e8dcde50dc5abccec8';

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
    weatherIcon.setAttribute('width','50');
    weatherIcon.setAttribute('height','50');

    captionDesc.textContent=`${desc}`;

}
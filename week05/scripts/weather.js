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



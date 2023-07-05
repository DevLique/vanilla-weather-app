function formatDate(timestamp){
let date = new Date(timestamp);
let hours = date.getHours();
let minutes = date.getMinutes();
if (hours < 10){
    hours = `0${hours}`;
}
if (minutes < 10){
    minutes = `0${minutes}`;
}
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`;
}




function displayTemperature(response){
    
    let temperatureElement = document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
    windElement.innerHTML = Math.round(response.data.wind.speed);
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt",response.data.weather[0].description);  
}

let key = "f5029b784306910c19746e40c14d6cd3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${key}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

//  api.openweathermap.org/data/2.5/weather?q=New York&appid=f5029b784306910c19746e40c14d6cd3&units=metric
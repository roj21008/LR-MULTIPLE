const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Trujillo,PE&units=imperial&APPID=a2f1a61501fd27fd28283d9ea3fb3a7a';      
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    const tempF = jsObject.main.temp
    const tempC = ((tempF - 32) * 5/9).toFixed(1); // Redondeamos a 1 decimal
    document.querySelector('#current-temp').textContent = tempC;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const speed = jsObject.wind.speed;
    document.querySelector('#weathericon').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('.condition-weather').textContent = desc; 
    document.querySelector('#speed').textContent = speed; 
  });  
 
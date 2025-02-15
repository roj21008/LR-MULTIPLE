
let temperatureInt = ""
let wSpeedInt = ""

let temperature = document.getElementById("current-temp").textContent;
let windSpeed = document.getElementById("speed").textContent;

wSpeedInt = parseFloat(windSpeed);
temperatureInt = parseInt(temperature,10)

function windChillCalculator(t,s){
    let none = "N/A"
    let wind = 35.74 + 0.6215*t - 35.75*(s**(0.16)) + 0.4275*t**(0.16);
if (t <= 10 && s >= 4.8){
    
    return wind.toFixed(2)
    
}else {
    return none
}
}

document.getElementById("windchill").innerHTML = windChillCalculator(temperature,wSpeedInt);  




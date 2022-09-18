async function getApi() {

    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York?unitGroup=metric&key=N8F2BH4BRLZDNV2HPZPBQ2XWV&contentType=json')

    const obj = await response.json()

    return obj;
}

var weather = document.getElementById("weatherList");
(async() => {
 let x = await getApi();
 console.log(x);
 console.log(x.days[0]);
 console.log(x.address);
 var item = document.getElementById("location");
 item.innerHTML = x.address;

 for (var i=0;i<x.days.length;i++) {
    console.log("DATE: " + x.days[i].datetime + " || CONDITIONS: " + x.days[i].conditions + " || TEMP: " + x.days[i].temp);
    var data = document.createElement("p");
    data.innerHTML = "DATE: " + x.days[i].datetime + " || CONDITIONS: " + x.days[i].conditions + " || MIN TEMP: " + x.days[i].tempmin + "C || MAX TEMP: "+ x.days[i].tempmax + "C || TEMP: " + x.days[i].temp + "C || " + x.days[i].description;
    weather.appendChild(data);
 }
//  var list = document.getElementById("list-group");
 
if (x.days[0].conditions == "Partially cloudy") {
    document.querySelector('body').style.backgroundImage="url(images/PartiallyCloudy.jpeg)";
 } else if (x.days[0].conditions == "Rain") {
    document.querySelector('body').style.backgroundImage="url(images/RainyDay.jpg)";
 } else if (x.days[0].conditions == "Overcast") {
    document.querySelector('body').style.backgroundImage="url(images/Overcast.jpeg)";
 } else if (x.days[0].conditions == "Rain, Partially cloudy") {
    document.querySelector('body').style.backgroundImage="url(images/RainCloud.jpeg)";
 } else if (x.days[0].conditions == "Rain, Overcast") {
    document.querySelector('body').style.backgroundImage="url(images/RainyDay.jpg)";
 } else if (x.days[0].conditions == "Clear"){
    document.querySelector('body').style.backgroundImage="url(images/Clear.jpg)";
 } else {
    document.querySelector('body').style.backgroundImage="url(images/Thunder.jpeg)";
 }
})()

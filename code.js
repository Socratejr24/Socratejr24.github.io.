  const APIKEY='52ec1dda5e84d7e7b03107ab36de1d01';

  /*Appel à l'API OPENWEATHERMAP D'UNE QUELCONQUE VILLE*/
  let APICALL=function(vil){
    let url="https://api.openweathermap.org/data/2.5/weather?q="+vil+"&appid="+APIKEY+"&units=metric&lang=fr";

    fetch(url).then((response) =>
      response.json().then((data)=> {
          console.log(data);
      document.querySelector("#city").innerHTML= "<i class='fa-solid fa-city'> City</i>"   +data.name;
      document.querySelector("#temp").innerHTML="<i class='fa-solid fa-temperature-low'>Temp</i>"+data.main.temp+"°";
      document.querySelector("#humidity").innerHTML= "<i class='fa-solid fa-droplet'>Humidity</i>"+data.main.humidity+"%" ;
      document.querySelector("#wind").innerHTML= "<i class='fa-solid fa-wind'>wind</i>"+ data.wind.speed +"Km/h" ;
  }))
    .catch((err) =>  console.log('Erreur:' +err));
  };
 /*Ecouteur d"évènement sur la soumission du formulaire*/
 document.querySelector("form").addEventListener("submit",  function(e) {
    e.preventDefault();
    let city=document.querySelector('#ville').value;
    APICALL(city);
 });

  /*Appel par défaut au chargement*/
  APICALL('YOPOUGON');

  





  

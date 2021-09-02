
const requestURL="https://api.openweathermap.org/data/2.5/weather?id=1726701&units=metric&appid=b12a1671edc09010b4035fbee67836d8";
const request = new XMLHttpRequest();
request.open('GET',requestURL);

request.responseType='json';
request.send();

//Obtener datos
request.onload=function()
{
    const Obtener_Clima=request.response;
    console.log(Obtener_Clima);

    //document.getElementById('temperatura').innerHTML=Obtener_Clima['main'].temp;
    //document.getElementById('temp').innerHTML=Obtener_Clima.main.temp;
    mostrarClima(Obtener_Clima);
}

function mostrarClima(Obtener_Clima)
{
    //header 
    var header = document.querySelector('header');
    var Titulo = document.createElement('h1');
    Titulo.textContent=Obtener_Clima.name;
    header.appendChild(Titulo);
    //secction
    var secttion=document.querySelector('section');
    var article=document.querySelector('article');
    var div=document.querySelector('div');
    //primerarticulo
    var Temperatura=document.createElement('h3');
    var Actual=document.createElement('p');
    var Minima=document.createElement('p');
    var Maxima=document.createElement('p');

    Temperatura.textContent='Temperatura';
    Actual.textContent='Actual:'+ Obtener_Clima.main.temp;
    Minima.textContent='Minima:'+ Obtener_Clima.main.temp_min;
    Maxima.textContent='Maxima:'+ Obtener_Clima.main.temp_max;
    
    secttion.appendChild(Temperatura);
    secttion.appendChild(Actual)
    secttion.appendChild(Minima);
    secttion.appendChild(Maxima);
    //segundoarticulo
    var Humedad=document.createElement('h3');
    var humedad=document.createElement('p');

    Humedad.textContent='Humedad';
    humedad.textContent='La Humedad es:'+Obtener_Clima.main.humidity+'%';
    
    article.appendChild(Humedad);
    article.appendChild(humedad);

    //cuartoarticulo
    var Viento=document.createElement('h3');
    var Velosidad=document.createElement('p');
    var Direccion=document.createElement('p');
    var Rafagas=document.createElement('p')

    Viento.textContent='Viento';
    Velosidad.textContent='La velosidad del viento es:'+Obtener_Clima.wind.speed;
    Direccion.textContent='La direccion del viento es:'+Obtener_Clima.wind.deg;
    Rafagas.textContent='las rafagas son de:'+Obtener_Clima.wind.gust;
    
    div.appendChild(Viento);
    div.appendChild(Velosidad);
    div.appendChild(Direccion);
    div.appendChild(Rafagas);

}

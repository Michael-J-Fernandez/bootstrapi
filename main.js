// Part 1 - Random Dog Generator

let img = document.querySelector('img');
let dogButton = document.querySelector('button');

function getDogImg(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response){
            // console.log(response.json());
            return response.json();
        })
        .then(function(data){
            console.log(data.message);
            img.src = data.message;
            img.style.height = "300px";
            // img.style.height = "300px";
            img.style.objectFit = "contain";
        })
}

getDogImg()

img.addEventListener('click', getDogImg);
dogButton.addEventListener('click', getDogImg);




// Part 2 - Weather App

let weatherForm = document.querySelector('#weather-form');
let cityInput = document.querySelector('#city-input');

let city = document.querySelector('#city');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let desc = document.querySelector('#desc');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // https://goweather.herokuapp.com/weather/{city}

    fetch(encodeURI(`https://goweather.herokuapp.com/weather/${cityInput.value}`))
        .then((response)=>{
            // console.log(response.json());
            return response.json();
        })
        .then((data)=>{
            console.log(data);

            // display values
            temp.innerText = 'Temperature: ' + data['temperature'];
            wind.innerText = 'Wind: ' + data['wind'];
            desc.innerText = 'Description: ' + data['description'];
        })
       
    city.innerText = cityInput.value;
    cityInput.value = "";
})

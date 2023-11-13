const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const resolveButton = document.getElementById('resolve-button');
const divResolve = document.getElementById('div-resolve')
const weatherStatusImg = document.getElementById('weather-status-img')
const countryName = document.getElementById('country-name');
const newBttn = document.getElementById('new-bttn');

resolveButton.addEventListener('click', function(){
    cliclFirstButton(fetchWeather)
});

newBttn.addEventListener('click', function(){
    cliclFirstButton(fetchNewWeather)
});

function fetchNewWeather() {
    return new Promise((resolve) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName.value}&appid=762822e1a7e164ada05626179933322d`)
            .then(response => response.json())
            .then(data => {
                resolve(data)
            })
    })
}

function fetchWeather() {
    return new Promise((resolve) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=762822e1a7e164ada05626179933322d`)
            .then(response => response.json())
            .then(data => {
                resolve(data)
            })
    })
};

function cliclFirstButton(calback) {
    calback()
        .then((data) => {
            divResolve.innerHTML = '';

            const cardCountry = document.createElement("div");
            cardCountry.innerHTML = 'Country : ' + data.sys.country;
            cardCountry.className += 'cardCountry'
            divResolve.appendChild(cardCountry);

            const cardName = document.createElement("div");
            cardName.innerHTML = 'Name : ' + data.name;
            divResolve.appendChild(cardName);

            const cardTemp = document.createElement("div");
            cardTemp.innerHTML = 'Temperature : ' + data.main.temp + ' - degrees kelvin';
            divResolve.appendChild(cardTemp);

            const cardTempFeel = document.createElement("div");
            cardTempFeel.innerHTML = 'Feels like : ' + data.main.feels_like + ' - degrees kelvin';
            divResolve.appendChild(cardTempFeel);

            const cardWeather = document.createElement("div");
            cardWeather.innerHTML = 'Weather : ' + data.weather[0].main;
            divResolve.appendChild(cardWeather);

            return data
        })
        .then((data) => {
            weatherStatusImg.innerHTML = '';

            if (data.weather[0].main === 'Clear') {
                const img = document.createElement('img');
                img.src = 'https://media.tenor.com/GW_5ZWZ0nMoAAAAd/dog-with-butterfly-dog-butterfly-meme.gif';
                img.alt = 'clear wather';
                img.className += 'weatheImg'
                weatherStatusImg.appendChild(img)
            } else if (data.weather[0].main === 'Clouds') {
                const img = document.createElement('img');
                img.src = 'https://i.imgflip.com/3noocr.jpg?a471792';
                img.alt = 'Clouds wather';
                img.className += 'weatheImg'
                weatherStatusImg.appendChild(img)
            } else if (data.weather[0].main === 'Rain') {
                const img = document.createElement('img');
                img.src = 'https://i.imgflip.com/lukr1.jpg';
                img.alt = 'Rain wather';
                img.className += 'weatheImg'
                weatherStatusImg.appendChild(img)
            } else if (data.weather[0].main === 'Wind') {
                const img = document.createElement('img');
                img.src = 'https://i.chzbgr.com/full/9198679552/h1E8C4108/gif-of-dog-with-its-mouth-flapping-in-the-wind';
                img.alt = 'Wind wather';
                img.className += 'weatheImg'
                weatherStatusImg.appendChild(img)
            } else if (data.weather[0].main === 'Snow') {
                const img = document.createElement('img');
                img.src = 'https://gifgifmagazine.com/uploads/gif/content_image_5fdce2d1c8781.gif';
                img.alt = 'Snow wather';
                img.className += 'weatheImg'
                weatherStatusImg.appendChild(img)
            }
            console.log(data)
        })
}

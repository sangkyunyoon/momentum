function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const locale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang${locale}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            city.textContent = data.name;
            weather.textContent = `${data.weather[0].main} / ${data.main.temp}`
        });

}

function onGeoError() {

}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
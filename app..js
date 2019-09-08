// initialize weather object
const weather = new Weather('Slough', 'UK');

// get weather om DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Slough', 'UK')

function getWeather(){weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err));
}

class Weather {
    constructor(city, state) {
        this.apiKey = '3058933ecdf5251acc3500a3bdb76a5e';
        this.city = city;
        this.state = state;
    }

    // fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.darksky.net/forecast/${this.apiKey}/${this.state},${this.city}`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}

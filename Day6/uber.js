//4. Calculate Uber Price

class Uber {
    constructor(type = '', totalKM, weather = '', time = '', pricePerKm = 12) {
        this.type = type;
        this.totalKM = totalKM;
        this.weather = weather;
        this.time = time;
        this.pricePerKm = pricePerKm;
    }

    getUberPrice(uber = [Uber]) {
        var weatherSurge = 0;
        if (uber.weather === 'rain') {
            weatherSurge = 2;
        }

        var timeSurge = 0;
        if (uber.time === 'peak') {
            timeSurge = 4;
        }

        if (uber.type === 'mini') {
            var hike = 3;
        } else if (uber.type === 'sedan') {
            var hike = 5;
        } else if (uber.type === 'suv') {
            var hike = 7;
        }

        var price = (uber.pricePerKm + hike + weatherSurge + timeSurge) * uber.totalKM;
        return price;
    }
}

const trip1 = new Uber('suv', 30, 'normal', 'peak');

console.log(trip1.getUberPrice(trip1));
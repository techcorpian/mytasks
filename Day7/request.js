var uri = "https://restcountries.com/v3.1/all";
var newInstance = new XMLHttpRequest();
newInstance.open("GET", uri);
newInstance.send();
newInstance.onreadystatechange = function () {
  if (this.readyState === 4) {
    if (this.status === 200) {
      var countries = JSON.parse(this.response);

        //a. Get all the countries from Asia continent /region using Filter method
        var countryNames = countries.filter((country) => country.region === 'Asia').map((country) => country.name.common); 
        console.log(countryNames);

        //b. Get all the countries with a population of less than 2 lakhs using Filter method
        var countryNames = countries.filter((country) => country.population < 200000).map((country) => country.name.common); 
        console.log(countryNames);

        // c. Print the following details name, capital, flag, using forEach method
        countries.forEach((countryDet) => {
        console.log(countryDet.name.common);
        console.log(countryDet.capital);
        console.log(countryDet.flag);
        });

        //d. Print the total population of countries using reduce method
        var population = countries.map((country) => country.population).reduce((prev, curr) => {
            return prev+curr;
        });
        console.log(population);

        //e. Print the country that uses US dollars as currency.
        var countryNames = countries.filter((country) => country.currencies && Object.keys(country.currencies).includes("USD")).map((country) => country.name.common);
        
        console.log(countryNames);
      
    } 
  }
};
newInstance.onerror = function (error) {
  console.log("Error occurred", error);
};

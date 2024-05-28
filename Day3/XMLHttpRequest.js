var uri = "https://restcountries.com/v3.1/all";
// Initialize New XMLHttpRequest instance
var newInstance = new XMLHttpRequest();
newInstance.open("GET", uri);
newInstance.send();
newInstance.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    var todos = JSON.parse(this.response);

    todos.forEach(element => {
      console.log(element.flags.png);
      console.log(element.name.common);
      console.log(element.region);
      console.log(element.subregion);
      console.log(element.population);

    });
    
  }
};
newInstance.onerror = function (error) {
  console.log("Error occured", error);
};
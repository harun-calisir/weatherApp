

document.querySelector("button").addEventListener("click", () => {

    let city = document.querySelector("input").value
    let url = "https://api.weatherapi.com/v1/current.json?key=2e8d60a196904a589d4171129221003&q=" + city + "&aqi=no"
    fetch(url)
    .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
     })
    .then(data => {
    document.querySelector(".city").innerHTML = city.toUpperCase()
    let current = data.current.temp_c
    document.querySelector("h3").innerHTML = current +"°"
    let condition = data.current.condition.text
    document.querySelector("p").innerHTML = condition
    })
    .catch((error) => console.error("FETCH ERROR:", error));

})

  
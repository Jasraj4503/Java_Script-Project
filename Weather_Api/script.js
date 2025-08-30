function getWeather() {

    // Get location entered by user
    let location = document.querySelector("#locationInput").value;
    let resultDiv = document.querySelector("#result");

    if (location === "") {
        resultDiv.innerHTML = "❗ Please enter a location.";
        return;
    }

    // API key and URL
    let apiKey = "129e0fb16d6c4d3daaa105456252508"; // your API key
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    // Fetch data from API
    fetch(url)
        .then((response) => response.json()) // convert response to JSON
        .then((data) => {
            // Get required values
            let temp = data.current.temp_c;
            let condition = data.current.condition.text;
            let icon = data.current.condition.icon;
            let city = data.location.name;
            let country = data.location.country;

            // Show results using template literals
            resultDiv.innerHTML = `
                        <p><b>${city}, ${country}</b></p>
                        <p>🌡️ Temperature: ${temp}°C</p>
                        <p>🌥️ Condition: ${condition}</p>
                        <img src="https:${icon}" alt="weather icon">
                    `;
        })
        .catch((error) => {
            resultDiv.innerHTML = "⚠️ Error fetching weather data.";
        });
}
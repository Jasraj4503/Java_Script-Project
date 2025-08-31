function getData() {
    var country = document.getElementById('countryInput').value;
    var url = `https://disease.sh/v3/covid-19/countries/${country}`;
    document.getElementById('message').innerHTML = "<div class='alert alert-info'>Loading...</div>";

    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Country not found");
            }
            return res.json();
        })
        .then((data) => {
            document.getElementById('flag').src = data.countryInfo.flag;
            document.getElementById('countryName').innerText = data.country;
            document.getElementById('cases').innerText = data.cases;
            document.getElementById('deaths').innerText = data.deaths;
            document.getElementById('recovered').innerText = data.recovered;
            var pct = data.cases ? Math.round((data.recovered / data.cases) * 100) : 0;
            document.getElementById('recoveredPct').innerText = pct + '%';

            document.getElementById('result').style.display = 'block';
            document.getElementById('message').innerHTML = "";
        })
        .catch((err) => {
            document.getElementById('message').innerHTML = '<div class="alert alert-warning">' + err.message + '</div>';
            document.getElementById('result').style.display = 'none';
        });
}
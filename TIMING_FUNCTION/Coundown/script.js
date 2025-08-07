setInterval(() => {
    const expiryInput = document.querySelector('#expiry').value;

    if (!expiryInput) {
        document.querySelector('#output').innerHTML = "Please select a expiry date.";
        return;
    }
    const expire_date = new Date(expiryInput)
    const current_date = new Date()

    const dateFormat = expire_date - current_date;



    let days = Math.floor(dateFormat / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateFormat / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((dateFormat / (1000 * 60)) % 60);
    let seconds = Math.floor((dateFormat / 1000) % 60);

    if (days < 10) {
        days = `0${days}`
    } else if (hours < 10) {
        hours = `0${hours}`
    } else if (minutes < 10) {
        minutes = `0${minutes}`
    } else if (seconds < 10) {
        seconds = `0${seconds}`
    }

    document.querySelector("#output").innerHTML = `Time left:
  ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

}, 1000);
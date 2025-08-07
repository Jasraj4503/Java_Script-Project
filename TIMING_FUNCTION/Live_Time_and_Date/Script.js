setInterval(() => {
    const date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    if (h < 10) {
        h = `0${h}`
    }
    else if (m < 10) {
        m = `0${m}`
    }
    else if (s < 10) {
        s = `0${s}`
    }

    const d = `${h}:${m}:${s}`;

    // Date 
    let day = date.getDate()
    let month = date.getMonth() + 1
    const year = date.getFullYear()

    if (day < 10) {
        day = `0${day}`
    }
    if (month < 10) {
        month = `0${month}`
    }

    const currentDate = `${day}-${month}-${year}`;

    document.querySelector('#timer').innerHTML = d
    document.querySelector('#date').innerHTML = currentDate
}, 1000)
function showQuotes() {

    const arr = [
        "All that glitters is not gold.",
        "Be yourself; everyone else is already taken.",
        "So many books, so little time.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Fear cuts deeper than swords.",
        "Happiness depends upon ourselves.",
        "Do one thing every day that scares you.",
        "In the middle of difficulty lies opportunity.",
        "Life is really simple, but we insist on making it complicated."
    ];

    const random = Math.random();
    const randomIndex = Math.floor(random * arr.length);

    document.getElementById("Quotes").innerHTML = arr[randomIndex];
}
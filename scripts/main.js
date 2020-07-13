// function to get a new random quote
const newButton = document.querySelector(".card__new--button");
const charName = document.querySelector(".card__name--text");
const charQuote = document.getElementById("quote");
const charImage = document.querySelector(".card__character--image")
let quoteData;

const getQuote = () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(res => res.text())
        .then(data => {
            quoteData = JSON.parse(data);
        })
}

const generateQuote = () => {
    getQuote()
    let name = quoteData[0].character;
    name === "Apu Nahasapeemapetilon" ? name = "Apu" : name = name;
    name === "Groundskeeper Willie" ? name = "Willie" : name = name;
    let quote = quoteData[0].quote;
    let image = quoteData[0].image;
    charName.innerHTML = name;
    charQuote.innerHTML = quote;
    charImage.setAttribute("src", image)
    charImage.setAttribute("alt", `image of ${name}`)
    console.log(name, quote, image)
}

newButton.addEventListener("click", () => {
    generateQuote()
})

generateQuote();
generateQuote();
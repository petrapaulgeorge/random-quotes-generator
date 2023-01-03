const button = document.getElementById("generate");
const quotes = [
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: " Martin Fowler"
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        author: " John Johnson"
    },
    {
        quote: "Experience is the name everyone gives to their mistakes.",
        author: " Oscar Wilde"
    },
    {
        quote: "In order to be irreplaceable, one must always be different.",
        author: " Coco Chanel"
    },
    {
        quote: "Java is to Javascript what car is to Carpet.",
        author: " Chris Heilmann"
    }
]

function displayQuote() {
    // Alege un index aleatoriu din array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Alege obiectul la acel index
    const randomQuote = quotes[randomIndex];
    // Afiseaza citatul si autorul
    document.getElementById("quote").innerHTML = randomQuote.quote;
    document.getElementById("author").innerHTML = randomQuote.author;
}

button.addEventListener("click", displayQuote);


// Store the qoutes in an array//
let quoteA = ["No one has caught the cricket ",
              "It is easy to forget all good things ",
              "No one can do  what your mum do",
              "I do not want to ruin a peace.",
              "Be the good captain of your ship."];

let quoteB = ["unless they crawl.",
              "which people did to us.",
              "so don't forget what she has done.",
              " I do not owe you",
              "Fight all your battles with prayer."];

let quoteC = ["Did you get it?",
              "than one bad thing.",
              "Give to her your love.",
              "if it is possible.",
              "You will always win."];


let randomQuoteA = Math.floor(Math.random() * quoteA.length);
let randomQuoteB = Math.floor(Math.random() * quoteB.length);
let randomQuoteC = Math.floor(Math.random() * quoteC.length);

let newQuote = `${quoteA[randomQuoteA]} ${quoteB[randomQuoteB]} ${quoteC[randomQuoteC]}`;
console.log(newQuote);

//1. use prompt to ask the user how many times we want to generate a random quote

let randomTimes = prompt("Enter the number of times we want to generate a random");
let numberOfQuotesGenerated = Math.floor(Math.random() * 5);
//2. check if the prompt give us something between 1 and 5


//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
for(let i = 0; i < newQuote.legth; i++) {
    
}
console.log(newQuote)
//4. refactor our code into a function, and put the function call inside the loop
//4.1 generate random numbers
//4.2 show the generated quotes
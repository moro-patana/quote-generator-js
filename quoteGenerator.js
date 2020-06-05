function myQuote() {

// Store the qoutes in an array/

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
                "You will always win."
];
let randomQuoteA = quoteA[Math.floor(Math.random() * quoteA.length)];
let randomQuoteB = quoteB[Math.floor(Math.random() * quoteB.length)];
let randomQuoteC = quoteC[Math.floor(Math.random() * quoteC.length)];

let newQuote = `${randomQuoteA} ${randomQuoteB} ${randomQuoteC}`;
return newQuote;
}
var newQuote = myQuote();
console.log(newQuote);

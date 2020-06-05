function myQuote() {

// Store the qoutes in an array/

  let quoteA = ["No one has caught the cricket unless they crawl",
                "It is easy to forget good things which people did to you than one thing",
                "No one can do  what your mum do",
                "I do not want to ruin a peace I do not owe you",
                "Be the good captain ofyour ship"];
  let quoteB = ["let them go",
                "if only I know.",
                "Where is your code.",
                "Don't give up",
                "read carefully"];
  let quoteC = ["did you solve it?",
                "I forget to leave the key",
                "It so hard",
                "if it is possible",
                "trust the others"
];
let randomQuoteA = quoteA[Math.floor(Math.random() * quoteA.length)];
let randomQuoteB = quoteB[Math.floor(Math.random() * quoteB.length)];
let randomQuoteC = quoteC[Math.floor(Math.random() * quoteC.length)];

let newQuote = `${randomQuoteA} ${randomQuoteB} ${randomQuoteC}`;
return newQuote;
}
var newQuote = myQuote();
console.log(newQuote);

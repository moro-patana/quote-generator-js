// Store the qoutes in an array//
let quoteA = ["No one has caught the cricket ",
               "It is easy to forget all good things ",
               "No one can do  what your mum do",
               "I do not want to ruin a peace.",
               "Be the good captain of your ship.",
               "I prefer"];

let quoteB = ["unless they crawl",
               "which people did to us",
               "so don't forget what she has done",
               " I do not owe you",
               "Fight all your battles with prayer", "loneliness"];

let quoteC = ["Did you get it?",
               "than one bad thing.",
               "Give to her your love",
               "if it is possible",
               "You will always win", 
               "over fake company"];

const quoteGenerator = () => {
     let randomQuoteA = Math.floor(Math.random() * quoteA.length);
     let randomQuoteB = Math.floor(Math.random() * quoteB.length);
     let randomQuoteC = Math.floor(Math.random() * quoteC.length);
     let newQuote = `${quoteA[randomQuoteA]} ${quoteB[randomQuoteB]} ${quoteC[randomQuoteC]}`;
     return newQuote;
};

//1. use prompt to ask the user how many times we want to generate a random quote

let number = prompt("How many random quotes do you want to generate?");
//4. refactor our code into a function, and put the function call inside the loop

if (number >= 1 && number <= 5) {

//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!//

     for (let i = 0; i < number; i++) {
//4.2 show the generated quotes//
          /*let newQuote = quoteGenerator();
          console.log(newQuote);*/
     }
} else {
     console.error("We need a number between 1 and 5");
};
/*var number2 = prompt("How many random quotes do you want to generate?");*/
function quoteGenerator2(number) {
     var quotationBig, quotationMid, quotationEnd;
     var randomBig, randomMid, randomEnd;

     if (number == 1) {
          quotationBig = ["When trust", "Do not complain", "The love of god"];
          quotationMid = ["is broken", "about the snow on your neighboor's roof", "was enough"];
          quotationEnd = ["sorry means nothing", "when your front door is unclean", "to change the impossible"];

     }
     else if (number == 2) {
          quotationBig = ["Yesterday is history", "Planting trees", "I prefer"];
          quotationMid = ["tomorrow is mystery", "when your are young", "loneliness than"];
          quotationEnd = ["and today is present", "over fake company", "you will have shelter later"];

     }
     else {
          console.error("We only choose between 1 and 2");
     }

     randomBig = quotationBig[Math.floor(Math.random() * quotationBig.length)];
     randomMid = quotationMid[Math.floor(Math.random() * quotationMid.length)];
     randomEnd = quotationEnd[Math.floor(Math.random() * quotationEnd.length)];

     var result = "\"" + randomBig + " " + randomMid + ", " + randomEnd + "\"";
     console.log(result);
}
// Use prompt to ask the user which type of quote they want//
var choice = Number(prompt("Type 1 to choose generator 1 or type 2 for generator 2"));
if (number >= 1 && number <= 5) {
     for (i = 0; i < number; i++) {
          quoteGenerator2(choice);
     }
}

//2. check if the prompt give us something between 1 and 5
//4.1 generate random numbers

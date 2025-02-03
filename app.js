var num = +prompt("Enter your number:");

if (num >= 1 && num <= 100) {
    if (num <= 29) console.log("Riksha chalaly bhai");
    else if (num <= 39) console.log("Bachat ho gai");
    else if (num <= 49) console.log("D grade bana ha");
    else if (num <= 59) console.log("C grade bana ha");
    else if (num <= 69) console.log("B grade bana ha");
    else if (num <= 79) console.log("A grade bana ha");
    else if (num <= 89) console.log("A+ grade bana ha");
    else console.log("A+1 grade bana ha");
} else {
    console.log("Invalid number! Please enter a number between 1 and 100.");
}

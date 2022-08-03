var yourName = yourNameText;

var loverName = loverNameText;

// // Making The Love Score // 

var yourLoveScore = Math.floor(Math.random() * 100 ) + 1;

var loverLoveScore = Math.floor(Math.random() * 100 ) + 1;

var bothPeopleLoveScore = yourLoveScore + loverLoveScore;

var bothPeopleLoveScore = (bothPeopleLoveScore / 2);

var finalLoveScoreOfBoth = Math.round(bothPeopleLoveScore);

// That Message Will Gonna Change According To The Score That They Got 

if (finalLoveScoreOfBoth > 50 ) {
    document.querySelectorAll("p")[1].textContent = "You Too Are The Best Mach For Eachother So Always Love Eachother & Stay Safe ";
}
else {
    document.querySelectorAll("p")[1].textContent = "Lover"; 
}









let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("User-score");
let compScore_span = document.getElementById("Computer-score");
let scoreBoard_div = document.queryCommandValue(".Score-board");
let result_p = document.querySelector(".resultado >p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let sissors_div = document.getElementById("s");

function getComputerChoice(){
    let choices = ["r","s","p"];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML= convertToWord(userChoice) + " derrota a "+convertToWord(computerChoice)+". Tu ganas!";
}
function lose(userChoice,computerChoice){
    compScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML= convertToWord(userChoice) + " pierde con "+convertToWord(computerChoice)+". lo siento";
}
function draw(userChoice,computerChoice){
    result_p.innerHTML= convertToWord(userChoice) + " y "+convertToWord(computerChoice)+". es un empate!";
}
function convertToWord(letter){
     if(letter ==="r") return "Piedra";
     if(letter =="p") return "Papel";
     return "Tijera";
}
function game(userChoice){
    let computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose (userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
};
main();
function main(){
    rock_div.addEventListener('click', function(){game("r");});
    paper_div.addEventListener('click', function(){game("p");});
    sissors_div.addEventListener('click', function(){game("s");});
}
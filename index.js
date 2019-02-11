let userScore=0;
let computerScore=0;

const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");

const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result>p");

const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s")


let computerChoice = "";
function getComputerChoice(){
    const choices=["r", "p","s"];
    const randomNumber=Math.floor(Math.random()*3);
    computerChoice = choices[randomNumber];
    return computerChoice;
}

function convert(letter){
    if(letter === "r") return " ჭა ";
    if(letter ==="s") return " მაკრატელი "
    if(letter==="p") return " ქაღალდი "

}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML="შენ გაიმარჯვე, რადგან აირჩიე : " +convert(userChoice) + " მოწინააღმდეგემ კი: " + convert(computerChoice) + ", გილოცავ!!!";
    document.getElementById(userChoice).classList.add("green-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"),1000)
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML="შენ დაამრცხდი, რადგან აირჩიე : " +convert(userChoice) + " მოწინააღმდეგემ კი:" + convert(computerChoice) + ", სუსტებს განსაცდელი გელით ❤!!!";
    document.getElementById(userChoice).classList.add("red-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"),1000)
}
function draw(userChoice, computerChoice){
    result_div.innerHTML="ფრეა ... შენ აირჩიე: "+ convert(userChoice) + ", მოწინააღმდეგემაც აირჩია: " + convert(computerChoice);
    document.getElementById(userChoice).classList.add("gray-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow"),1000)
}

function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice + computerChoice){
        case "pr":
        case "sp":
        case "rs":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
        opponent();
    })

    paper_div.addEventListener('click', function(){
        game("p");
        opponent();
    })

    scissors_div.addEventListener('click', function(){
        game("s");
        opponent();
    })
}
main();

function opponent(){
    switch(computerChoice){
        case "r":
            document.getElementById("rand").src="qva.png";
            break;
        case "p":
            document.getElementById("rand").src="qagaldi.png";
            break;
        case "s":
            document.getElementById("rand").src="makrateli.png";
            break;
    }
}
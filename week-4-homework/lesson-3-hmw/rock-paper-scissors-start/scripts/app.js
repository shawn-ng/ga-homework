// * Remember to run "go live" below to see your changes on save.

// * write all your code INSIDE the function below
function init() {

    // this is the choices array 
    const choices = ["rock", "paper", "scissor"]

    // Score 
    var playerScoreCount = 0
    var robotScoreCount = 0

    // referal
    const choiceButton = document.querySelectorAll(".choice")
    const displayPlayerChoice = document.querySelector(".P1")
    const displayRobotChoice = document.querySelector(".R2")
    const displayResult = document.querySelector(".resultShow")
    const resetButton = document.querySelector(".reset")
    const playerScore = document.querySelector("#playerScore")
    const robotScore = document.querySelector("#robotScore")

    // Function of the handleClick
    function handleClick(event){

        // clear everything
        displayPlayerChoice.innerHTML = "Player choose:"
        displayRobotChoice.innerHTML = "Robot choose:"

        // robot choice
        const machineChoice = choices[ Math.floor(Math.random() * choiceButton.length) ]

        // player choice
        const playerChoice = event.target.innerHTML
        
        // displaying the choice
        displayPlayerChoice.innerHTML = displayPlayerChoice.innerHTML + " " + playerChoice
        displayRobotChoice.innerHTML = displayRobotChoice.innerHTML + " " + machineChoice

        // if statement for result
        if(playerChoice === "rock" && machineChoice === "paper"){
            displayResult.innerHTML = "This round robot win !"
            robotScoreCount += 1
            playerScore.innerHTML = playerScoreCount
            robotScore.innerHTML = robotScoreCount
        }else if(playerChoice === "rock" && machineChoice === "scissor"){
            displayResult.innerHTML = "This round player win !"
            playerScoreCount += 1
            playerScore.innerHTML = playerScoreCount
            robotScore.innerHTML = robotScoreCount
        }else if(playerChoice === "paper" && machineChoice === "rock"){
            displayResult.innerHTML = "This round player win !"
            playerScoreCount += 1
            playerScore.innerHTML = playerScoreCount
            robotScore.innerHTML = robotScoreCount
        }else if(playerChoice === "paper" && machineChoice === "scissor"){
            displayResult.innerHTML = "This round robot win !"
            robotScoreCount += 1
            playerScore.innerHTML = playerScoreCount
            robotScore.innerHTML = robotScoreCount
        }else if(playerChoice === "scissor" && machineChoice === "rock"){
            displayResult.innerHTML = "This round robot win !"
            robotScoreCount += 1
            playerScore.innerHTML = playerScoreCount
            robotScore.innerHTML = robotScoreCount
        }else if(playerChoice === "scissor" && machineChoice === "paper"){
            displayResult.innerHTML = "This round player win !"
            playerScoreCount += 1
            playerScore.innerHTML = playerScoreCount
            robotScore.innerHTML = robotScoreCount
        }else{
            displayResult.innerHTML = "DRAW !"
            playerScore.innerHTML = playerScoreCount
            robotScore.innerHTML = robotScoreCount
        }

        if(playerScoreCount === 3){
            displayResult.innerHTML = "Player WON !"
            alert("Player Won! Press the reset button to go again !")
            
        }else if(robotScoreCount === 3){
            displayResult.innerHTML = "Robot WON !"
            alert("Robot Won! Wanted some revenge? Press the reset button to go again !")

        }
    }

    // Function to handle reset 
    function handleReset(event){

        displayPlayerChoice.innerHTML = "Player choose:"
        displayRobotChoice.innerHTML = "Robot choose:"
        displayResult.innerHTML = "Click one of the buttons to start !"

        // reset score 
        playerScoreCount = 0
        robotScoreCount = 0

        playerScore.innerHTML = playerScoreCount
        robotScore.innerHTML = robotScoreCount

    }

    // loop all choiceButton to add event listener
    choiceButton.forEach((Button) => 
    Button.addEventListener("click", handleClick))
    
    resetButton.addEventListener("click", handleReset)









}

// ! do not touch below here
window.addEventListener('DOMContentLoaded', init)

let userscore = 0;
let compscore = 0;
let yourscore = document.getElementById("you")
let computerscore = document.getElementById("comp")
let msg = document.querySelector(".msg")
// console.log(yourscore);


let choices = document.querySelectorAll(".choice")

const gencompchoice = () =>{
    let arr = ["paper","rock", "scissors"]
    const randidx = Math.floor(Math.random()*3)
    // console.log(randidx);
    
    return arr[randidx]

}

const playgame = (userchoice) =>{
    console.log("user choice is", userchoice);
    let compchoice = gencompchoice()
    console.log("computer choice is ", compchoice);
    if(userchoice === compchoice){
        //draw
        drawgame()
    }
    else{
        let userwin = true
        if(userchoice==="rock"){
            // computer is generated paper or scissors
            userwin = compchoice === "paper" ?false:true
        }
        else if(userchoice==="scissors"){
            //computer is generated paper or rock
            userwin = compchoice === "paper" ?true:false

        }
        else{
            //computer is generated rock or scissors
            userwin = compchoice === "rock"?true:false
        }
        showwinner(userwin,userchoice,compchoice)
    }
}


choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const choiceid = choice.getAttribute("id")
        playgame(choiceid)
    })
})
const drawgame = () =>{
    console.log("game is draw");
    msg.innerText = "Game is Draw"
    msg.style.backgroundColor = "rgb(32, 52, 40)"
}
const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        // console.log("you win");
        userscore++
        yourscore.innerText = userscore
        msg.innerText = `You win ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "Green"
        
    }
    else{
        // console.log("you loose");
        compscore++
        computerscore.innerText = compscore
        msg.innerText = `You loose ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor = "Red"
        
    }
}
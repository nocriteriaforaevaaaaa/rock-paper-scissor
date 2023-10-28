// const prompt=require("prompt-sync")()

let user=prompt("Enter R,P or S")
user=user.toUpperCase()
let cpu1=Math.floor(Math.random()*3);
let cpu=["R","P","S"][cpu1]
const match=(cpu,user)=>{
    if(cpu===user)
    {
        return "Nobody.The match is tied!!";
    }
    else if(cpu ==="R" && user==="P")
    {
        return "User";
    }
    else if(cpu==="R" && user==="S")
    {
        return "Cpu";
    }
    else if(cpu==="S" && user==="P")
    {
        return "Cpu";
    }
    else if(cpu==="S" && user==="R")
    {
        return "User";
    }
    else if(cpu==="P" && user==="R")
    {
        return "Cpu";
    }
    else if(cpu==="P" && user==="S")
    {
        return "User";
    }
}
    let result=match(cpu,user);
    document.write(`CPU:${cpu} and <br> \n User:${user}<br>\n The winner is:${result.toUpperCase()}`)
    let color=prompt("Enter the background color of your choice")
    document.body.style.background=color;


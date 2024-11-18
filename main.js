// add event listener for send button 

const sendbtn = document.getElementById("sendbtn");
const username = document.getElementById("name");
const mail = document.getElementById("email");
const message = document.getElementById("message");

    message.addEventListener("click",function (event)
{
    console.log(event.target);
    sendbtn.style.display = "block";
});

sendbtn.addEventListener("click",function (event){
    console.log(event.target);
    event.target.textContent ="Sended";
    sendbtn.style.color ="white";
    sendbtn.style.backgroundColor = "lightgreen";
})

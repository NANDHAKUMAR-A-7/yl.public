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
    sendbtn.addEventListener("click" ,function(event){
        alert("Get Replay As Soon As Once Our Team Receive Your Message ! ...Thank You For Contacting Us."           
        )
    });
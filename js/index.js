// let coin= 20;
const hearts=0;
let coin= parseInt(document.getElementById("coin-amount").innerText)

// const cards= document.getElementsByClassName("card")
// // console.log(cards);

// for ( const eachCard of cards(
//     document.getel
    
// ))


document.getElementById("card-container").addEventListener("click",function(event){
    if(event.target.closest("BUTTON") && coin>=20){
        // alert("ok")

        const serviceName= event.target.closest("BUTTON").parentNode.parentNode.children[1].innerText;
        const serviceNumber=event.target.closest("BUTTON").parentNode.parentNode.children[3].innerText;

       alert("You are calling "+ serviceName + ": " + serviceNumber)


       coin= coin - 20;
       document.getElementById("coin-amount").innerText=coin;
        
    }

    
    else if(event.target.tagName == "BUTTON"){     
         console.log(event.target.tagName);
    
    } 
    else{
        // alert("You dont have enough balance to make a call.")
    }
    
})

// document.getElementById("btn-call").addEventListener('click',function(event){
    
//     alert("ok")
// })
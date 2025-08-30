let hearts=parseInt(document.getElementById("heart-count").innerText);
let copy=parseInt(document.getElementById("copy-count").innerText);
let coin= parseInt(document.getElementById("coin-amount").innerText)



document.getElementById("card-container").addEventListener("click",function(event){
    
    if(event.target.closest("BUTTON") && event.target.closest("BUTTON").getAttribute("class").includes('btn-copy')){     

        const copiedData=event.target.closest("BUTTON").parentNode.parentNode.children[3].innerText;
        navigator.clipboard.writeText(copiedData)
        alert("copied " + copiedData)

        copy=copy+1;
         document.getElementById("copy-count").innerText=copy;
    
    } 
    else if(event.target.closest("BUTTON") && coin>=20){

        const serviceName= event.target.closest("BUTTON").parentNode.parentNode.children[1].innerText;
        const serviceNumber=event.target.closest("BUTTON").parentNode.parentNode.children[3].innerText;

       alert("You are calling "+ serviceName + ": " + serviceNumber)


       coin= coin - 20;
       document.getElementById("coin-amount").innerText=coin;
        
    }

    else if( event.target.closest("BUTTON") && coin<20){
        alert("You dont have enough balance to make a call.")
    }

    else{
        return;
        // alert("You dont have enough balance to make a call.")
    }

    
})




document.getElementById("heart").addEventListener("click",function(event){
    hearts= hearts+1;
       document.getElementById("heart-count").innerText=hearts;
})

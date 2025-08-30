let hearts=parseInt(document.getElementById("heart-count").innerText);
let copy=parseInt(document.getElementById("copy-count").innerText);
let coin= parseInt(document.getElementById("coin-amount").innerText)

const callData= [];


function callHistory(callData){
    const container=document.getElementById("history");
    document.getElementById("history").innerHTML=''

    for (const i of callData){
    const divs= document.createElement("div")
    divs.innerHTML=`<div class="flex justify-between items-center gap-1 shadow-md rounded-lg bg-[#fafafa] p-3 mt-2">
            <div>
            <h1 class="font-semibold">${i.sName}</h1>
            <h1>${i.sNumber}</h1>
            </div>
            <p>${i.time}</p>
          </div>`
container.appendChild(divs)
}

}



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

       const data= {
        sName: serviceName,
        sNumber: serviceNumber,
        time:new Date().toLocaleTimeString(),
       }

       callData.push(data);
        callHistory(callData);
        
    }

    else if( event.target.closest("BUTTON") && coin<20){
        alert("You dont have enough balance to make a call.")
    }


    else if(event.target.getAttribute("class").includes("fa-heart")){
            hearts= hearts+1;
       document.getElementById("heart-count").innerText=hearts;

    }

    else{
        return;
    }
})


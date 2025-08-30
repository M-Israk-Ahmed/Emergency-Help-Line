// variables to count hearts/wishlist counter
let hearts = parseInt(document.getElementById("heart-count").innerText);
//copied number counter
let copy = parseInt(document.getElementById("copy-count").innerText);
//coin counter
let coin = parseInt(document.getElementById("coin-amount").innerText);
//transection data store
const callData = [];

// transection appending

function callHistory(callData) {
    const container = document.getElementById("history");
    document.getElementById("history").innerHTML = "";

    for (const i of callData) {
        const divs = document.createElement("div");
        divs.innerHTML = `<div class="flex justify-between items-center gap-1 shadow-md rounded-lg bg-[#fafafa] p-3 mt-2">
            <div>
            <h1 class="font-semibold">${i.sName}</h1>
            <h1>${i.sNumber}</h1>
            </div>
            <p>${i.time}</p>
          </div>`;
        container.appendChild(divs);
    }
}


//button functionalities with the concept of event delegation
document.getElementById("card-container")
    .addEventListener("click", function (event) {
        //checking if it a "button" and if its the "copy" button
        if (
            event.target.closest("BUTTON") &&
            event.target.closest("BUTTON").getAttribute("class").includes("btn-copy")
        ) {
            const copiedData =
                event.target.closest("BUTTON").parentNode.parentNode.children[3]
                    .innerText;

            // stackoverflow
            navigator.clipboard.writeText(copiedData);
            alert("copied " + copiedData);

            copy = copy + 1;
            document.getElementById("copy-count").innerText = copy;
        }
        // checking if it a "button" and if its the "call" button also pushing the data to the call history variable for transactions update
        else if (event.target.closest("BUTTON") && coin >= 20) {
            const serviceName =
                event.target.closest("BUTTON").parentNode.parentNode.children[1]
                    .innerText;
            const serviceNumber =
                event.target.closest("BUTTON").parentNode.parentNode.children[3]
                    .innerText;

            alert("You are calling " + serviceName + ": " + serviceNumber);

            coin = coin - 20;
            document.getElementById("coin-amount").innerText = coin;

            const data = {
                sName: serviceName,
                sNumber: serviceNumber,
                time: new Date().toLocaleTimeString(),
            };
            //pushing transaction data and updating it in the call history by calling callHistory function
            callData.push(data);
            callHistory(callData);
        } 
        //checking if user is pressing call button with min balance
        else if (event.target.closest("BUTTON") && coin < 20) {
            alert("You dont have enough balance to make a call.");
        } 
        //counting the number of time the hearts are pressed
        else if (event.target.getAttribute("class").includes("fa-heart")) {
            hearts = hearts + 1;
            document.getElementById("heart-count").innerText = hearts;
        } 
        //for everything else just return nothing
        else {
            return;
        }
    });


//clearing the call history section as well as removing those data from the callData variable, so they are permanently cleared.
document
    .getElementById("btn-clear")
    .addEventListener("click", function (event) {
        document.getElementById("history").innerHTML = "";
        callData.length = 0;
    });

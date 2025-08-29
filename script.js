document.getElementById('btn-emergency-call')
.addEventListener('click',function(){
    
})

const callBtns = document.getElementsByClassName("btn-call");
console.log(callBtns);

for(let callButton of callBtns){
    callButton.addEventListener("click",function(){
        const callTitle = callButton.parentNode.parentNode.children[1].innerText;
        
        console.log(callTitle)
        const callNumber = callButton.parentNode.parentNode.children[3].innerText;
        console.log(callNumber)

        const cardContainerRight = document.getElementsByClassName("card-container-right")[0];
        const now = new Date ();
        const timeString = now.toLocaleTimeString();
        const newCard = document.createElement("div")
        newCard.innerHTML = ` 
        <div class="bg-[#F5FFF6] rounded-xl flex justify-between items-center p-4 mt-5">
            <div class="">
                <h2 class="font-bold text-lg">${callTitle}</h2>
                <h2 class="">${callNumber}</h2>
            </div>
            <div>
            <h2 class="text-lg font-bold">${timeString}</h2>
            </div>
        
        </div>`;
        cardContainerRight.append(newCard);
        
    })
}
const callBtns = document.getElementsByClassName("btn-call");
console.log(callBtns);

let coins = 100;
const coinCount = document.getElementById("coin-count");


for(let callButton of callBtns){
    callButton.addEventListener("click",function(){
        const callTitle = callButton.parentNode.parentNode.children[1].innerText;
        
        const callNumber = callButton.parentNode.parentNode.children[3].innerText;

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
        
        if(coins < 20){
            alert("you have not enough coin to make this call at least 20 coin required to make a call");
            return;
        }

        coins -=20;
        coinCount.innerText=coins;

        alert(`calling ${callTitle} ${callNumber}`)
       
    })
}

document.getElementById("btn-clear").addEventListener("click",function(){
const cardContainerRight = document.getElementsByClassName("card-container-right")[0];
const firstDiv = cardContainerRight.children[0];
    cardContainerRight.innerHTML="";
    cardContainerRight.appendChild(firstDiv)
})


const heartBtns = document.getElementsByClassName("btn-heart");
const heartCount = document.getElementById("heart-count");
for(let btn of heartBtns){
    btn.addEventListener("click",function(){
        heartCount.innerText=Number(heartCount.innerText) + 1;
    })
}

const copyBtns = document.getElementsByClassName("btn-copy");
const copyCount = document.getElementById("copy-count");
for(let btn of copyBtns){
    btn.addEventListener("click",function(){
        copyCount.innerText=Number(copyCount.innerText) + 1;
        alert("copied"); 
        
    })

    

}

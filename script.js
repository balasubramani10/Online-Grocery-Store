let numberBox = (document.querySelector(".producctQtyNos input"));
let numberOfItems =parseInt(document.querySelector(".producctQtyNos input").value);
let addBtn = document.querySelector(".addTOCartBtn button");
let cartDis = document.querySelector(".cartNos h6");
let cart=0;
let additem = document.querySelector(".plus");
let lessitem = document.querySelector(".minus");
additem.addEventListener("click",()=>{
   numberOfItems +=1;
   numberBox.value = numberOfItems;
});
lessitem.addEventListener("click",()=>{
    if(numberOfItems>1){
        numberOfItems -=1;
        numberBox.value = numberOfItems;
    }
    else{
        numberBox.value = 1;
    }
});
cartDis.innerHTML = cart;
addBtn.addEventListener("click",()=>{
    cartDis.innerHTML = numberOfItems;
    addBtn.innerHTML = "Update Cart";
    addBtn.style.color ="black";
    addBtn.style.backgroundColor = "#EFF7FA";
});


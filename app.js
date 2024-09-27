const amountEl_one=document.getElementById("amount-one");
const amountEl_two=document.getElementById("amount-two");
const currencyEl_one=document.getElementById("currency-one");
const currencyEl_two=document.getElementById("currency-two");
const swap=document.getElementById("swap");
const rateEl=document.getElementById("rate");
// value
const currencyValue_1=currencyEl_one.value;
const currencyValue_2=currencyEl_two.value;

// add event listner

currencyEl_one.addEventListener("change", caclulate);
amountEl_one.addEventListener("input", caclulate);
currencyEl_two.addEventListener("change", caclulate);
amountEl_two.addEventListener("input", caclulate);



// Fetch exchange rates and update the DOM

function caclulate(){

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyValue_1}`)
    .then((result)=>result.json()).then((data)=>{
        const rate=data.rates[currencyValue_2];
        rateEl.innerText=`1 ${currencyValue_1} = ${rate} ${currencyValue_2}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })  
}


swap.addEventListener("click", () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    caclulate();
  });


caclulate()
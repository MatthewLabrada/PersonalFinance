let welcome = "Welcome back";
let name = "Matthew";
let greeting = welcome + ", " + name + "!";

let welcomeEl = document.getElementById("welcome-el");
console.log(welcomeEl);

welcomeEl.innerText = greeting;

welcomeEl.innerText += " =)"

let bills = [];

const addBill = (ev)=>{
    let bill = {
        billName: document.getElementById('billName').value,
        billCost: document.getElementById('billCost').value
    }
    bills.push(bill);

    console.log('Added bill!', {bills}); 
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('save-btn').addEventListener('click', addBill);
});
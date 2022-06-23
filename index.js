let welcome = "Welcome back";
let name = "Matthew";
let greeting = welcome + ", " + name + "!";

let welcomeEl = document.getElementById("welcome-el");
console.log(welcomeEl);

welcomeEl.innerText = greeting;

welcomeEl.innerText += " 👋🏻"
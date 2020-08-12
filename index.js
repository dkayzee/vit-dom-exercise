var body = document.querySelector("body");
console.log(body);
var first = body.firstChild;
console.log(first);

var newElement = document.createElement("h1");
document.body.appendChild(newElement);
document.body.removeChild(newElement);

document.getElementById("button"); //returns THE element
document.getElementsByClassName("input"); // returns array
document.getElementsByTagName("h1"); // returns array

// USING QUERY SELECTORS
// by id
document.querySelector("#button"); // <button id="button">Click Me</button>
document.querySelectorAll("#button"); // HTMLCollection [1]
// by class
document.querySelector(".input"); // <input type="text" class="input first center popular" />
document.querySelectorAll(".input"); // HTMLCollection [4]

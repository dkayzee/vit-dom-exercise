var userName = prompt("What is your name?", "Harry Potter");

console.log(userName);

// var name = document.getElementById("name");
var name = document.querySelector("#name");
// console.log(name);

var header = document.getElementsByTagName("h1");
console.log(header[0].children[0].innerText);

var innerP = header[0].children[0];

if (userName == null || userName == undefined) {
  innerP.innerText = "Stranger";
} else {
  innerP.innerText = userName;
}

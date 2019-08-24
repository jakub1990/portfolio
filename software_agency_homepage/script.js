const bars = document.querySelector("#mobile-bars");
const nav = document.querySelector("nav");
const button = document.querySelector("button");

bars.addEventListener("click", function() {
  nav.classList.toggle("mobile");
});

button.addEventListener("click", function() {
 button.classList.add("rotation");
});


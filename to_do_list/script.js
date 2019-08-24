const inputField = document.querySelector(".todo");
const buttonAdd = document.querySelector(".buttonAdd");
const buttonClear = document.querySelector(".buttonClear");
const ul = document.querySelector("ul");


buttonAdd.addEventListener("click", function() {
  if(inputField.value === "") {
  	alert("Add a task!");
  } else {
  	let li = document.createElement("li");
  	let task = document.createTextNode(inputField.value);
  	li.appendChild(task);
  	ul.appendChild(li);
  	li.addEventListener("click", function() {
  	li.classList.add("cross");
    })
  }
  inputField.value = ""; 
})

buttonClear.addEventListener("click", function() {
	ul.innerHTML = "";
})








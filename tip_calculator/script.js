function calculateTip() {
  var billAmount = document.querySelector("#billamount").value;
  var serviceQual = document.querySelector("#servicequal").value;
  var peopleAmount = document.querySelector("#peopleamount").value;
  
  if(billAmount === "" || serviceQual === 0) {
    alert("Please enter values");
    return;
  }
  if(peopleAmount === "" || peopleAmount <= 1) {
    document.querySelector("#each").style.display = "none";
  } else {
    document.querySelector("#each").style.display = "block";
  }
  
  var total = (billAmount * serviceQual) / peopleAmount;
  total = Math.round(total * 100) / 100;
  document.querySelector("#totaltip").style.display="block";
  document.querySelector("#tip").innerHTML = total;
}

document.querySelector("#totaltip").style.display = "none";
document.querySelector("#each").style.display="none";

document.querySelector("#calculate").addEventListener("click", function(){
  calculateTip();
})
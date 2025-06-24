function buttonConditions() {
  var x = document.getElementById("b").value;
  var y = document.getElementById("y");
  alert(x);
  if (x === "Lyla, Twilightsworn Enchantress") {
    y.style.display = "block";
  }
  else
  {
    y.style.display = "none";
  }
}
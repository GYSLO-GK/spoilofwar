function buttonConditions() {
  var x = document.getElementById("b").value;
  var y = document.getElementById("y");
  if (x === "Lyla, Twilightsworn Enchantress") {
    y.style.display = "block";
  }
  else
  {
    y.style.display = "none";
  }
}

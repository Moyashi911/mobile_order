var orderNum = 0;
var btn1 = document.getElementById("menu1");
var orderbtn = document.getElementById("orderbtn");
btn1.addEventListener("click", function () {
  var selected = document.getElementById("selectedmenu");
  var selected_menuname = document.getElementById("selected_menuname");
  var name = document.getElementById("selected_menuname");
  selected.src = "../static/img/dish1.jpg";
  selected_menuname.innerHTML = "menu1";
});
orderbtn.addEventListener("click", function () {
  var selected = document.getElementById("selectedmenu");
  var selected_menuname = document.getElementById("selected_menuname");
  selected.src = "../static/img/selectmenu.png";
  // selected_menuname.innerHTML = "";
});

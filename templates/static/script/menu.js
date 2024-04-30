var orderNum = 0;
var btn1 = document.getElementById("menu1");
var btn2 = document.getElementById("menu2");
var btn3 = document.getElementById("menu3");
var btn4 = document.getElementById("menu4");
var selected = document.getElementById("selectedmenu");
var menuform = document.getElementById('menuname');
btn1.addEventListener("click", function () {
  selected.src = "../static/img/dish1.jpg";
  menuform.value = "スープ"
});
btn2.addEventListener("click", function () {
  selected.src = "../static/img/dish2.jpg";
  menuform.value = "カレー"
});
btn3.addEventListener("click", function () {
  selected.src = "../static/img/dish3.jpg";
  menuform.value = "唐揚げ"
});
btn4.addEventListener("click", function () {
  selected.src = "../static/img/dish4.jpg";
  menuform.value = "ポテト"
});

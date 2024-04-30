var orderNum = 0;
var btn1 = document.getElementById("menu1");
var btn2 = document.getElementById("menu2");
var btn3 = document.getElementById("menu3");
var btn4 = document.getElementById("menu4");
var btn5 = document.getElementById("menu5");
var btn6 = document.getElementById("menu6");
var btn7 = document.getElementById("menu7");
var btn8 = document.getElementById("menu8");
var btn9 = document.getElementById("menu9");
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
btn5.addEventListener("click", function () {
  selected.src = "../static/img/dish5.jpg";
  menuform.value = "オムライス"
});
btn6.addEventListener("click", function () {
  selected.src = "../static/img/dish6.jpg";
  menuform.value = "素うどん"
});
btn7.addEventListener("click", function () {
  selected.src = "../static/img/dish7.jpg";
  menuform.value = "天ぷらうどん"
});
btn8.addEventListener("click", function () {
  selected.src = "../static/img/dish8.jpg";
  menuform.value = "親子丼"
});
btn9.addEventListener("click", function () {
  selected.src = "../static/img/dish9.jpg";
  menuform.value = "カツ丼"
});

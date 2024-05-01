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
var btn10 = document.getElementById("menu10");
var btn11 = document.getElementById("menu11");
var btn12 = document.getElementById("menu12");
var btn13 = document.getElementById("menu13");
var btn14 = document.getElementById("menu14");
var btn15 = document.getElementById("menu15");
var btn16 = document.getElementById("menu16");
var selected = document.getElementById("selectedmenu_img");
var menuform = document.getElementById('menuname');
var img_source = document.getElementById("img_source")
btn1.addEventListener("click", function () {
  selected.src = "../static/img/dish1.jpg";
  img_source.value = "static/img/dish1.jpg"
  menuform.value = "スープ"
});
btn2.addEventListener("click", function () {
  selected.src = "../static/img/dish2.jpg";
  img_source.value = "static/img/dish2.jpg"
  menuform.value = "カレー"
});
btn3.addEventListener("click", function () {
  selected.src = "../static/img/dish3.jpg";
  img_source.value = "static/img/dish3.jpg"
  menuform.value = "唐揚げ"
});
btn4.addEventListener("click", function () {
  selected.src = "../static/img/dish4.jpg";
  img_source.value = "static/img/dish4.jpg"
  menuform.value = "ポテト"
});
btn5.addEventListener("click", function () {
  selected.src = "../static/img/dish5.jpg";
  img_source.value = "static/img/dish5.jpg"
  menuform.value = "オムライス"
});
btn6.addEventListener("click", function () {
  selected.src = "../static/img/dish6.jpg";
  img_source.value = "static/img/dish6.jpg"
  menuform.value = "素うどん"
});
btn7.addEventListener("click", function () {
  selected.src = "../static/img/dish7.jpg";
  img_source.value = "static/img/dish7.jpg"
  menuform.value = "天ぷらうどん"
});
btn8.addEventListener("click", function () {
  selected.src = "../static/img/dish8.jpg";
  img_source.value = "static/img/dish8.jpg"
  menuform.value = "親子丼"
});
btn9.addEventListener("click", function () {
  selected.src = "../static/img/dish9.jpg";
  img_source.value = "static/img/dish9.jpg"
  menuform.value = "カツ丼"
});
btn10.addEventListener("click", function () {
  selected.src = "../static/img/dish10.jpg";
  img_source.value = "static/img/dish10.jpg"
  menuform.value = "ラーメン"
});
btn11.addEventListener("click", function () {
  selected.src = "../static/img/dish11.jpg";
  img_source.value = "static/img/dish11.jpg"
  menuform.value = "カレーうどん"
});
btn12.addEventListener("click", function () {
  selected.src = "../static/img/dish12.jpg";
  img_source.value = "static/img/dish12.jpg"
  menuform.value = "かつ丼２"
});
btn13.addEventListener("click", function () {
  selected.src = "../static/img/dish13.jpg";
  img_source.value = "static/img/dish13.jpg"
  menuform.value = "照り焼きチキン"
});
btn14.addEventListener("click", function () {
  selected.src = "../static/img/dish14.jpg";
  img_source.value = "static/img/dish14.jpg"
  menuform.value = "塩豚丼"
});
btn15.addEventListener("click", function () {
  selected.src = "../static/img/dish15.jpg";
  img_source.value = "static/img/dish15.jpg"
  menuform.value = "辛味チキン丼"
});
btn16.addEventListener("click", function () {
  selected.src = "../static/img/dish16.jpg";
  img_source.value = "static/img/dish16.jpg"
  menuform.value = "天丼"
});

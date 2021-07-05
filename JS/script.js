var tangram = document.getElementsByClassName("tangram")[0];
var button_basic = document.getElementsByClassName("button--basic")[0];
var button_gun = document.getElementsByClassName("button--gun")[0];
var button_butterfly = document.getElementsByClassName("button--butterfly")[0];
var button_rabbit = document.getElementsByClassName("button--rabbit")[0];
var button_snake = document.getElementsByClassName("button--snake")[0];

button_basic.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--basic');
};
button_gun.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--gun');
};
button_butterfly.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--butterfly');
};
button_rabbit.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--rabbit');
};
button_snake.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--snake');
};
var tangram = document.getElementsByClassName("tangram")[0];
var button_basic = document.getElementsByClassName("button--basic")[0];
var button_bougie = document.getElementsByClassName("button--bougie")[0];
var button_shirt = document.getElementsByClassName("button--shirt")[0];
var button_gun = document.getElementsByClassName("button--gun")[0];
var button_rocket = document.getElementsByClassName("button--rocket")[0];

button_basic.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--basic');
};
button_bougie.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--bougie');
};
button_shirt.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--shirt');
};
button_gun.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--gun');
};
button_rocket.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--rocket');
};
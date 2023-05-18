canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty"
var last_position_of_X;
var last_position_of_Y;
color = "black";
width_of_line = 10;
radius = 50;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseEvent = "mousedown";
    color = document.getElementById("color").value; 
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousedleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_X = e.clientX - canvas.offsetLeft;
    current_position_of_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        console.log("current position of mouse X and Y coordinates = ");
        console.log("X = " + current_position_of_X + "y = " + current_position_of_Y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_X, current_position_of_Y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}
}
function clearArea() { 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}
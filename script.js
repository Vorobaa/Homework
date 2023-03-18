function draw(event) {
    var canvas = document.getElementById("imgCanvas");
    var ctx = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect()
    var posx = event.clientX - rect.left;
    var posy = event.clientY - rect.top;
    ctx.fillStyle = "#aaaaff";
    ctx.beginPath();
    ctx.arc(posx, posy, 50, 0, Math.PI * 2);
    ctx.fill();
}
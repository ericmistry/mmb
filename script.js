document.addEventListener("DOMContentLoaded", function() {
    const cupcakeCursor = document.createElement("div");
    cupcakeCursor.style.position = "absolute";
    cupcakeCursor.style.zIndex = "1000";
    cupcakeCursor.style.pointerEvents = "none";
    cupcakeCursor.style.fontSize = "2rem";
    cupcakeCursor.textContent = "🧁";
    document.body.appendChild(cupcakeCursor);

    document.addEventListener("mousemove", function(e) {
        cupcakeCursor.style.left = e.pageX + "px";
        cupcakeCursor.style.top = e.pageY + "px";
    });

    document.body.style.cursor = "none";
});

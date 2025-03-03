document.addEventListener("DOMContentLoaded", function () {
    const colorControl=document.getElementById("color-control");

    colorControl.addEventListener("click", function () {
        const randomColor=getRandomColor();
        document.body.style.backgroundColor=randomColor;
    });

    function getRandomColor() {
        const colors=["red", "blue", "green", "purple", "orange", "pink", "yellow", "teal", "cyan"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});

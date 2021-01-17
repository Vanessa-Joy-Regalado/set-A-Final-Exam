function randomize() {
    document.getElementById('image').style.backgroundColor = randomColors();
}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function showcolor() {
    var color = document.getElementById("colorlist").value
    document.getElementById("image").style.backgroundColor = color;
}

function reset() {
    document.getElementById("image").style.backgroundColor = "white";
}
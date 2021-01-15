function Firstbutton() {
    if (document.getElementById("secondview").style.display === 'none', document.getElementById("firstview").style.display === 'block') {
        document.getElementById("secondview").style.display = 'block';
        document.getElementById("firstview").style.display = 'none';
    } else {
        document.getElementById("secondview").style.display = 'none';
        document.getElementById("firstview").style.display = 'block';
    }
}

function ramdom() {
    var x = "0123456789ABCDRF";
    var y = "#";
    for (i = 0; i < 6; i++) {
        y = y + x[Math.floor(Math.random() * 16)];
    }
    document.getElementById("image").style.backgroundColor = y;
}

function secondbutton() {
    var btnS = document.getElementById("ramdomID");
    var color = btnS.options[btnS.selectedIndex].value;
    document.getElementById("image").style.backgroundColor = color;
}

function thirdbutton() {
    document.getElementById("image").style.backgroundColor = 'white';
}
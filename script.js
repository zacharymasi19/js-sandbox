let colorselector = document.getElementById("colorselector");
colorselector.onchange = function () {
    console.log(colorselector.value)
    document.getElementById("colorbox").style = `background-color: ${colorselector.value};`;
};

function toggleDarkMode(){
    alert("toggle me")
}
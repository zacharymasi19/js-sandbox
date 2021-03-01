let colorselector = document.getElementById("colorselector");
colorselector.onchange = function () {
    console.log(colorselector.value)
    document.getElementById("colorbox").style = `background-color: ${colorselector.value};`;
};

function toggleDarkMode(){
    let content = document.getElementById("content")
    content.classList.toggle("dark-mode");
    //alert("TOGGLE ME");
}

function teleport(){
    console.log("TELEPort");
    let runaway = document.getElementById("runaway")
    runaway.innerText = "Something Else";
    
}
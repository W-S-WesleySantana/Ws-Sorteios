function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 2)) + min;

    const inputresult = document.querySelector("#result-box");

    inputresult.value = result;

    inputresult.style.display = "inline-block";

}

function howtouse() {

    const footerText = document.querySelector("#footer")

    footerText.style.display = "inline-block"

}

document.addEventListener("click", function (event) {
    const footerText = document.querySelector("#footer");
    const elementoClicado = event.target;

    const clicouNoBotao = elementoClicado.getAttribute("onclick")?.includes("howtouse");

    if (footerText && elementoClicado !== footerText && !footerText.contains(elementoClicado) && !clicouNoBotao) {
        footerText.style.display = "none";
    }
});
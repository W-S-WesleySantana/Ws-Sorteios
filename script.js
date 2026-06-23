function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 2)) + min;

    const inputresult = document.querySelector("#result-box");

    inputresult.value = result;

    inputresult.style.display = "inline-block";

}


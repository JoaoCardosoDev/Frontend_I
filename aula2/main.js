import TestA from "./testa.js"
import TestB from "./testb.js"

window.onload = () => {
    const x = new TestA
    const y = new TestB

    let divA = document.querySelector("#a");
    console.log(divA)

    let divB = document.getElementsByClassName("b")
    console.log(divB)

    let button = document.querySelector("button")
    button.onclick = () => {
        divA.style.background = "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)"
        divA.style.minWidth = "500px"

        divA.onmouseenter = () => {
            divA.style.position="absolute"
            divA.style.width="100vw"
            divA.style.height="100vh"
            divA.style.backgroundImage="url(https://i.pinimg.com/236x/a7/33/a8/a733a826035d297ecf70707862e88a93.jpg)"
            divA.style.zIndex="100"
        }
    }
}




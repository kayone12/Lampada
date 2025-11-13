var lamp = document.getElementById("lamp")//acesso a lampada
var aceso = 0

lamp.addEventListener("click", function () {

    if(aceso == 0) {
        aceso = 1
        lamp.src = "assets/lamp_on.png"// acesso ao src
        lamp.alt = "Lâmpada Acesa"
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)"
    }
    else{
        aceso = 0
        lamp.src = "assets/lamp_off.png"// acesso ao src
        lamp.alt = "Lâmpada Apagada"
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)"

    }
})

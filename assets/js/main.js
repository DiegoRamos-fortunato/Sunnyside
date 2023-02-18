const botao = document.getElementById("botao");


function menuHamburguer () {
    const nav = document.getElementById("nav")

    nav.classList.toggle('active')
    
}




botao.addEventListener("click",menuHamburguer)
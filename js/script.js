let local = document.getElementById('local')

let rolagem = 0

//Títulos Inputs

function mudarLetra(elemento){
    elemento.style.color = '#F24E29'
    elemento.style.fontSize = '50px'
}

function letraNormal(elemento){
    elemento.style.color = 'white'
    elemento.style.fontSize = '48px'
}

//Localização

function animationLocal(){

    rolagem = scrollY
    console.log(rolagem)
    
    if(rolagem >= 870){
        local.classList.remove('invis')
        local.classList.add('visi')
    }
    
}

function linhaEmbaixo(elemento){
    elemento.style.paddingBottom = '2px'
    elemento.style.borderBottom = '2px solid #F24E29'
    elemento.style.fontSize = '21.8px'
}

function bordaNormal(elemento){
    elemento.style.borderBottom = 'none'
    elemento.style.fontSize = '20.8px'
}


const decors = document.querySelectorAll(".traco-decor");
const infoTutores = document.querySelector(".bloco-anima")
const garantia = document.querySelector(".garantia-emprego")

// decor.setAttribute('fill','#000000')
// const contImg = document.querySelector('.container-img-decor')


console.log(decors)
/*Checa se sessão Sobre está aparecendo na tela ao dar scroll, se sim adiciona animação*/
function animaImgSobre(){

 const posicaoPrimeiro = decors[0].getBoundingClientRect() //pega posição do primeiro traço que compõem o svg 
 const topoPrimeito = posicaoPrimeiro.top
 const basePrimeiro = posicaoPrimeiro.bottom //pega a base dele

    let atrasoAnima = 0
    decors.forEach((dec)=>{
        
        if( (topoPrimeito >=0 ) && (basePrimeiro < window.innerHeight)){
            // console.log('Base do elem passou pela tela')
                setTimeout(()=>{
                dec.style.fill = '#C5FFF6'
            }, 1000 + atrasoAnima)
            
        }
       atrasoAnima+=100
        
    })
    
}

function animaTextoTutores(){
    const posicao = infoTutores.getBoundingClientRect();
    const topo = posicao.top;
    const base = posicao.bottom-200

    if((topo >= 0) && (base <= window.innerHeight)){//window.innerHeight retorna altura em px da janela
    infoTutores.classList.add('animaParaDireita')
    }
}

function animaTextoGarantia(){
    const posicao = garantia.getBoundingClientRect();
    const topo = posicao.top;
    const base = posicao.bottom-200

    if((topo >= 0) && (base <= window.innerHeight)){//window.innerHeight retorna altura em px da janela
    garantia.classList.add('animaParaCima')
    }
}


document.addEventListener('scroll',animaImgSobre)

document.addEventListener('scroll',animaTextoTutores)
document.addEventListener('scroll',animaTextoGarantia)
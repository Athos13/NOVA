const decors = document.querySelectorAll(".traco-decor");
const infoTutores = document.querySelector(".bloco-anima")
const garantia = document.querySelector(".garantia-emprego")
const botaoMenu = document.querySelector("#botao-menu")
const nav = document.querySelector(".container-header nav")
const containerHead = document.querySelector('.bg-nav')
const tracosMenu = document.querySelector('#botao-menu div')

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

function removeBgNav(){
    if(window.matchMedia("(min-width: 768px)").matches) {
        // console.log('match')
        /* a viewport tem pelo menos 400 pixels de largura */
        containerHead.classList.remove('mostrarBgNav')
        tracosMenu.style.transform = 'rotate(0deg)';
      } 
}
 

function fechaMenuClickFora(e){
    if(e.currentTarget === e.target){
        nav.classList.remove('mostrar')
        containerHead.classList.remove('mostrarBgNav')
    }
}


function toggleMenu(){
  containerHead.addEventListener('click', fechaMenuClickFora)

  nav.classList.toggle('mostrar')
  containerHead.classList.add('mostrarBgNav')
  
  if(nav.classList.contains('mostrar')){
    tracosMenu.style.transform = 'rotate(90deg)';
  }else{
    tracosMenu.style.transform = 'rotate(0deg)';
  }

}



document.addEventListener('scroll',animaImgSobre)
document.addEventListener('scroll',animaTextoTutores)
document.addEventListener('scroll',animaTextoGarantia)
window.addEventListener('resize', removeBgNav)

botaoMenu.addEventListener('click',toggleMenu)



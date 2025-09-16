const decors = document.querySelectorAll(".traco-decor");
// decor.setAttribute('fill','#000000')
// const contImg = document.querySelector('.container-img-decor')


console.log(decors)
/*Checa se sessão Sobre está aparecendo na tela ao dar scroll, se sim adiciona animação*/
function animaImgTextSobre(){

 const posicaoPrimeiro = decors[0].getBoundingClientRect() //pega posição do primeiro traço que compõem o svg 
 const basePrimeiro = posicaoPrimeiro.bottom //pega a base dele

    let atrasoAnima = 0
    decors.forEach((dec)=>{
        
        if(basePrimeiro < window.innerHeight){
            // console.log('Base do elem passou pela tela')
                setTimeout(()=>{
                dec.style.fill = '#C5FFF6'
            }, 1000 + atrasoAnima)
            
        }
       atrasoAnima+=100
        
    })
    
}
document.addEventListener('scroll',animaImgTextSobre)
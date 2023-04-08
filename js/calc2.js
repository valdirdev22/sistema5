
(function ($) {
  
  "use strict";

    // MENU
    $('#sidebarMenu .nav-link').on('click',function(){
      $("#sidebarMenu").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);
  
  

    const form = document.querySelector('#formulario');
    form.addEventListener('submit', function(e) {
     
    
    e.preventDefault();
    const inputLadoA = e.target.querySelector('#ladoA');
    const inputLadoB = e.target.querySelector('#ladoB');
    const inputLadoC = e.target.querySelector('#ladoC');
    
    const ladoA = Number(inputLadoA.value);
    const ladoB = Number(inputLadoB.value);
    const ladoC = Number(inputLadoC.value);
    
    
    function getValidador(ladoA, ladoB, ladoC){

        if((ladoA < ladoB+ladoC) && (ladoB < ladoA+ladoC) && (ladoC < ladoA+ladoB)){
            if((ladoA==ladoB) && (ladoB==ladoC)){
                const validador = "TRIÂNGULO EQUILÁTRO"; 
                return validador;    
            }
          else if ((ladoA==ladoB) || (ladoB==ladoC) || (ladoC==ladoA)){
            const validador = "TRIÂNGULO ISOSCELES";
            return validador;    
          }
            else if((ladoA!=ladoB) && (ladoB!=ladoC)){
                const validador = "TRIÂNGULO ESCALENO";
                return validador;
            
        }  
        
    } 
        else {
            const validador = "NÃO É POSSÍVEL FORMAR TRIÂNGULO";
            return validador;  
        }
          
    

}
    
    
    if((isNaN(ladoA) == true)){
        setResultado_1('Lado A inválido', false);
        return
    } 
    
    
    
    if(isNaN(ladoB) == true) {
        setResultado_1('Lado B é inválido', false);
        return
    }
    
    if(isNaN(ladoC) == true) {
        setResultado_1('Lado C é inválido', false);
        return
    }
    
    
    if(inputLadoB.value == "") {
        setResultado_1('Lado B está vazio', false);
        return
    }

    if(inputLadoC.value == "") {
        setResultado_1('Lado C está vazio', false);
        return
    }
    

    if(inputLadoA.value <= 0) {
        setResultado_1('Lado A deve ser maior que ZERO', false);
        return
    }

    if(inputLadoB.value <= 0) {
        setResultado_1('Lado B deve ser maior que ZERO', false);
        return
    }
    
    if(inputLadoC.value <= 0) {
        setResultado_1('Lado C deve ser maior que ZERO', false);
        return
    }

   
    
   
    const validador = getValidador(ladoA, ladoB, ladoC);
    const msg1 =`${validador}<br>`;
    setResultado_1(msg1, true);
   console.log(validador);
   
});
     
    
     
    function criarP () {
        const p = document.createElement(p);
       return p;
       }
    
     
    function setResultado_1(msg1, isValid){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML ='';
     
        const p = criarP();
     
        if(isValid){
            p.classList.add('paragrafo-resultado');
         } else{
             p.classList.add('bad');
        }
       
     p.innerHTML = msg1;
     resultado.appendChild(p);
       
    }
     
    function criarP(){
        const p = document.createElement('p');
        return p;
     
    }
   

  


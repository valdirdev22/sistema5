
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
    const inputValorA = e.target.querySelector('#valorA');
    const inputValorB = e.target.querySelector('#valorB');
    const inputValorC = e.target.querySelector('#valorC');
    
    const valorA = Number(inputValorA.value);
    const valorB = Number(inputValorB.value);
    const valorC = Number(inputValorC.value);
    
    
    function getConcavidade(valorA){
        if(valorA > 0){
            const concavidade = "Concavidade da parabola para cima";
            return concavidade;    
          } if(valorA < 0){
            const concavidade = "Concavidade da parabola  para baixo";
            return concavidade; 
        }
    }
    
    if((isNaN(valorA) == true)){
        setResultado_1('Valor de A inválido', false);
        return
    } 
    
    
    if(inputValorA.value == 0){
        setResultado_1('Valor de A deve ser diferente de ZERO', false);
        return
    } 
    
    
    if(isNaN(valorB) == true) {
        setResultado_1('Valor de B inválido', false);
        return
    }
    
    if(isNaN(valorC) == true) {
        setResultado_1('Valor de C inválido', false);
        return
    }
    
    if(inputValorA.value == "") {
        setResultado_1('Valor de A está vazio', false);
        return
    }
    
    if(inputValorB.value == "") {
        setResultado_1('Valor de B está vazio', false);
        return
    }
    
    if(inputValorC.value == "") {
        setResultado_1('Valor de C está vazio', false);
        return
    }
    
    
    
    
       const raiz_1 = getRaiz_1(valorA, valorB, valorC);  
       const raiz_2 = getRaiz_2(valorA, valorB, valorC);
       const concavidade = getConcavidade(valorA);  
       const msg_1 = `${concavidade}<br> O valor de X1 = ${raiz_1}<br>O valor de X2 = ${raiz_2}.`; 
       setResultado_1(msg_1, true);
       console.log(raiz_1);
       console.log(raiz_2);
       console.log(concavidade);
    });
     
    
          
    
    function getRaiz_1(valorA, valorB, valorC){
        const delta = (((valorB)**2) -4*(valorA)*(valorC));
        if (delta < 0){
            
            alert(" O valor do delta é negativo,logo, a equação não tem solução no conjunto dos reais.")
            msg_1.setResultado_1 = '';
        }
        const x1 = Math.sqrt(delta);
        const raiz_1 = ((- valorB + x1)/(2*valorA));    
        return raiz_1.toFixed(2);
          
    }
    
    
    function getRaiz_2(valorA, valorB, valorC){
        const delta = (((valorB)**2) -4*(valorA)*(valorC));
        const x2 = Math.sqrt(delta);
        const raiz_2 = ((- valorB - x2)/(2*valorA));    
        return raiz_2.toFixed(2);
        
    }
    
     
    function criarP () {
        const p = document.createElement(p);
       return p;
       }
    
     
    function setResultado_1(msg_1, isValid){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML ='';
     
        const p = criarP();
     
        if(isValid){
            p.classList.add('paragrafo-resultado');
         } else{
             p.classList.add('bad');
        }
       
     p.innerHTML = msg_1;
     resultado.appendChild(p);
       
    }
     
    function criarP(){
        const p = document.createElement('p');
        return p;
     
    }
   

  


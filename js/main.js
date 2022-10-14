
           
var nav = document.querySelector('nav');


window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    
    nav.style.backgroundColor='#181818';
    nav.style.transition='0.5s';

    document.getElementById('logo').src="imagens/logo_2.png";

  } else {

    nav.style.backgroundColor = 'transparent';

    document.getElementById('logo').src="imagens/logo_3.png";
 
  }
});


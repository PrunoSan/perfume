var nav = document.querySelector('nav');
var nav_item = document.getElementsByClassName('nav-link');
var icon_menu=document.getElementsByClassName(`fa-solid`)[0];

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {

    nav.style.backgroundColor='#181818';
    nav.style.transition='0.5s';
    
  
    for(x = 0; x<nav_item.length;x++ ){
      nav_item[x].style.color="#D6BAAA";
      
    }
    
    icon_menu.style.color="#D6BAAA";
    

    document.getElementById('logo').src="imagens/logo_2.png";

  } else {

    

    for(x = 0; x<nav_item.length;x++ ){
      nav_item[x].style.color="#41423F";
      icon_menu.style.color="#D6BAAA";
    }
    
    nav.style.backgroundColor = 'transparent';
    document.getElementById('logo').src="imagens/logo_3.png";
   
    icon_menu.style.color='#181818';
    
  
  }
});

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


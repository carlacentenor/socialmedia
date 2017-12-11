var navMobile = document.querySelector('.nav-mobile');
var menuMobile = document.querySelector('.menu-mobile-js');
navMobile.addEventListener('click',function(){
    if(menuMobile.classList.contains("disabled-menu")){
        menuMobile.classList.remove("disabled-menu");
        menuMobile.classList.add("enabled-menu");
      }
      else {
      menuMobile.classList.add("disabled-menu");
      menuMobile.classList.remove("enabled-menu");
      }
});


/*


  */
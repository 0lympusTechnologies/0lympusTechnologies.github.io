var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 900){
    nav.classList.add('bg-dark', 'shadow');
    nav.classList.remove('bg-transparent');
  } 
  else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});
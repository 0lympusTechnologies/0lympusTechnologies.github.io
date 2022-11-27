// select the navbar
var nav = document.querySelector('nav');

// observe the window for scrolling
window.addEventListener('scroll', function(){
  // when the window has gone beyond 900 in the Y direction, remove transparency and add shaded nav background 
  if(window.pageYOffset > 900){
    nav.classList.add('bg-dark', 'shadow');
    nav.classList.remove('bg-transparent');
  }
  // if window is less than 900 in the Y direction, remove shaded nav background 
  else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});
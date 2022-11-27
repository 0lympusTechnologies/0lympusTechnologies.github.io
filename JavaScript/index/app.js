const observer = new IntersectionObserver((entries) => {
  entries.forEach(element => {
    console.log(element)
    if (element.isIntersecting) {
      element.target.classList.add('from-right-show');
    }
    /*
    will restart the animation whenever use does nto view element
    else {
      element.target.classList.remove('from-right-show');
    }*/
  });
})

const hiddenElements = document.querySelectorAll('.from-right');
hiddenElements.forEach((element) =>
  observer.observe(element));


const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(element => {
    console.log(element)
    if (element.isIntersecting) {
      element.target.classList.add('from-left-show');
    }
    /*
    will restart the animation whenever use does nto view element
    else {
      element.target.classList.remove('from-left-show');
    }*/
  });
})

const hiddenElements2 = document.querySelectorAll('.from-left');
hiddenElements2.forEach((element) =>
  observer2.observe(element));
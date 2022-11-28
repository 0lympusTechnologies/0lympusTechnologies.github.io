// set an observer to check if the window is intersecting the element to be animated
const observer = new IntersectionObserver((entries) => {
  entries.forEach(element => {
    console.log(element)
    if (element.isIntersecting) {
      element.target.classList.add('from-right-show');
    }
    /* 
    If needed:
    will restart the animation whenever use does not view element
    else {
      element.target.classList.remove('from-right-show');
    }*/
    if (element.isIntersecting) {
      element.target.classList.add('from-left-show');
    }
    /* 
    If needed:
    will restart the animation whenever use does not view element
    else {
      element.target.classList.remove('from-left-show');
    }*/
  });
})

// get the elements with the class names for their animation type
const animateFromRight = document.querySelectorAll('.from-right');
const animateFromLeft  = document.querySelectorAll('.from-left');

// call the observer function to observe if the element is in the window and change class
animateFromRight.forEach((element) =>
  observer.observe(element));
// call the observer function to observe if the element is in the window and change class
animateFromLeft.forEach((element) =>
    observer.observe(element));
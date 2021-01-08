const medQue = window.matchMedia('(max-width: 831px)');
const carouselWrapper = document.querySelector('.carouselWrapper');
const parallaxContainer = document.querySelector('.containerPara');
const carouselSlide = document.querySelectorAll('.carouselWrapper .carouselSlide');
const upDownBtn = document.querySelectorAll('.upDownBtn');
const carouselButtons = document.querySelectorAll('.carouselNavBtn');
const numberOfDiv = carouselSlide.length;
const parallax = document.querySelector('.parallax');

let divIndex = 1;
let slideTranslation = 0;
let parallaxTranslation = 0;

function clickFct(evt) {
  if (evt.target.id === 'previous' && divIndex !== 1)  {
    divIndex--;
    slideTranslation += 100;
    parallaxTranslation += 5;
  }
  else if (evt.target.id === 'next' && divIndex !== numberOfDiv) {
    divIndex++;
    slideTranslation -= 100;
    parallaxTranslation -= 5;
  }
    carouselWrapper.style.transform = `translateX(${slideTranslation}%)`;
    parallax.style.transform = `translateX(${parallaxTranslation}%)`;
}
carouselButtons.forEach(button => { button.addEventListener('click', clickFct); });

function MobileClickFct(evt) {
  if (evt.target.id === 'up' && divIndex !== 1)  {
    divIndex--;
    slideTranslation += 100;
    parallaxTranslation += 5;
  }
  else if (evt.target.id === 'down' && divIndex !== numberOfDiv) {
    divIndex++;
    slideTranslation -= 100;
    parallaxTranslation -= 5;
  }
    carouselWrapper.style.transform = `translateY(${slideTranslation}%)`;
    parallax.style.transform = `translateY(${parallaxTranslation}%)`;
}
upDownBtn.forEach(button => { button.addEventListener('click', MobileClickFct); });


if (medQue.matches) {
  parallaxContainer.addEventListener('touchstart', handleTouchStart);        
  parallaxContainer.addEventListener('touchmove', handleTouchMove);

  let yDown = null;

  function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];                                 
    yDown = firstTouch.clientY;                                          
  };   


  function handleTouchMove(evt) {
    if ( ! yDown ) {
        return;
    }
    
    let yUp = evt.touches[0].clientY;                                
    let yDiff = yDown - yUp;  

    if ( yDiff > 0 && divIndex !== numberOfDiv) {
        divIndex++;
        slideTranslation -= 100;
        parallaxTranslation -= 3;
    } else if (yDiff < 0 && divIndex !== 1) {
        divIndex--;
        slideTranslation += 100;
        parallaxTranslation += 3;
    }     
    carouselWrapper.style.transform = `translateY(${slideTranslation}%)`;  
    parallax.style.transform = `translateY(${parallaxTranslation}%)`;  

    yDown = null;                                             
  };
}
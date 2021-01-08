const mediaQuery = window.matchMedia('(min-width: 491px) and (max-width: 1400px)');
const mediaQueryMobile = window.matchMedia('(max-width: 490px)');
const slider = document.querySelector('.carouselSlider');
const items = document.querySelectorAll('.carouselItem');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let currentDiv = 0;
let divRotation = 0;
let width = (mediaQuery.matches) ? 450 : (mediaQueryMobile.matches) ? 270 : 700;
let xDown = null; 

function slideTranslation(index) {
  if (index < 1) {
    index = items.length;
  }
  else if (index > items.length) {
    index = 1;
  }  
  currentDiv = index;
  for(var i = 0; i < items.length; i++) {
      const box = items[i].querySelector('.carouselContent');
        if (i < index - 1) {
          divRotation = 35;
        }
        else {
          divRotation = -35;
        }
        if (i === (index - 1)) {
            items[i].classList.add('active');
            box.style.transform = `perspective(1200px)`; 
        } else {
          items[i].classList.remove('active');
          box.style.transform = `rotateY(${divRotation}deg)`;
        }
  }
  slider.style.transform = `translateX(${index * (-width) + width / 2 + window.innerWidth / 2}px)`;
}

function clickPrevBtn() {
  slideTranslation(--currentDiv);
}
function clickNextBtn() {
  slideTranslation(++currentDiv);
}

function handleTouchStart(evt) {
      const firstTouch = evt.touches[0];                                   
      xDown = firstTouch.clientX;     
};   

function handleTouchMove(evt) {
      if ( ! xDown ) {
          return;
      }
      let xUp = evt.touches[0].clientX;                                    
      let xDiff = xDown - xUp;
          if ( xDiff > 0 ) {
            slideTranslation(++currentDiv);
          } else {
            slideTranslation(--currentDiv);
          }                                    
      xDown = null;                                           
};

slideTranslation(Math.floor(items.length / items.length));
slider.addEventListener('touchstart', handleTouchStart);        
slider.addEventListener('touchmove', handleTouchMove);
prevBtn.addEventListener('click', clickPrevBtn);
nextBtn.addEventListener('click', clickNextBtn);  
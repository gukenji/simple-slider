let nextSlideButton = document.getElementById('next');
let backSlideButton = document.getElementById('back');
let dots = document.getElementsByClassName('dots')[0].children;
dots = [...dots];
var myInterval = setInterval(nextslide, 5000)

function backslide(){  
  let active = document.getElementById('active');
  let previousElement = active.previousElementSibling;
  let slides = document.getElementsByClassName('slide')[0].children;
  
  (previousElement == null) ? (previousElement = slides[slides.length-1]) : previousElement;
  
  let dotIndex = previousElement.dataset.index
  let dot = document.getElementsByClassName('dots')[0].children[dotIndex]

  paintDot(dot);
  active.className = "hidden";
  active.id = null;
  previousElement.className = '';
  previousElement.id = 'active';
  resetTimeout();
}

function nextslide() {
  let active = document.getElementById('active');
  let nextElement = active.nextElementSibling;
  let slides = document.getElementsByClassName('slide')[0].children;

  (nextElement == null) ? (nextElement = slides[0]) : nextElement;

  let dotIndex = nextElement.dataset.index
  let dot = document.getElementsByClassName('dots')[0].children[dotIndex]

  paintDot(dot);
  active.className = "hidden";
  active.id = null;
  nextElement.className = '';
  nextElement.id = 'active';
  resetTimeout();
}

function dotNavigation(){
  let index = this.dataset.index;
  let slides = document.getElementsByClassName('slide')[0].children;
  let slide = slides[index];
  let activeSlide = document.getElementById('active');

  paintDot(this)
  activeSlide.className = "hidden";
  activeSlide.id = null;
  slide.className = '';
  slide.id = 'active';
  resetTimeout();
}

function paintDot(dot){
  let activeDot = document.getElementsByClassName('active')[0];

  activeDot.classList.remove('active');
  dot.classList.add('active');
}

function resetTimeout(){
  clearInterval(myInterval);
  myInterval = setInterval(nextslide, 5000)
}

backSlideButton.addEventListener('click', backslide);
nextSlideButton.addEventListener('click', nextslide);
dots.forEach(element => element.addEventListener('click', dotNavigation));

